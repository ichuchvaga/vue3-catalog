<script>
import { mapState } from 'vuex';
import Product from './Product.vue';

export default {
  data() {
    return {
    }
  },
  props: {
    products: Array
  },
  components: {
    Product
  },
  computed: {
    ...mapState(['listingView'])
  }
}
</script>
<template>
<div class="products-grid" :class="{'products-grid--small': listingView == 'small'}" v-if="products.length > 0">
  <div class="products-grid__inner">
    <Product 
      v-for="item in products" 
      :key="item.id" 
      :data="item"
      />
  </div>
</div>

<div class="product-empty-result" v-if="products.length == 0">
  <p>Извините, по данному запросу товары не найдены</p>
</div>
</template>