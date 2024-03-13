<script>
import { mapState } from 'vuex';
import Product from './Product.vue';
import Pagination from './Pagination.vue';

export default {
  data() {
    return {
      page: 1
    }
  },
  props: {
    products: Array
  },
  components: {
    Product,
    Pagination
  },
  computed: {
    total() {
      return this.products.length;
    },
    startOffset() {
      return (this.page - 1) * this.limit;
    },
    endOffset() {
      return this.startOffset + this.limit;
    },
    paginatedProducts() {
      return this.products.slice(this.startOffset, this.endOffset);
    },
    limit() {
      return this.$store.state.limit;
    },
    ...mapState(['listingView'])
  },
  methods: {
    updatePage(value) {
      this.page = value;
    }
  }
}
</script>
<template>
<div class="products-grid" :class="{'products-grid--small': listingView == 'small'}" v-if="paginatedProducts.length > 0">
  <div class="products-grid__inner">
    <Product 
      v-for="item in paginatedProducts" 
      :key="item.id" 
      :data="item"
      />
  </div>

  <Pagination @update="updatePage" :total="total" :limit="limit" />
</div>

<div class="product-empty-result" v-if="paginatedProducts.length == 0">
  <p>Извините, по данному запросу товары не найдены</p>
</div>
</template>