<script>
  // import components
  import Header from './components/Header.vue';
  import Breadcrumbs from './components/Breadcrumbs.vue';
  import Footer from './components/Footer.vue';
  import Filter from './components/Filter.vue';
  import SelectedFilters from './components/SelectedFilters.vue';
  import Sorting from './components/Sorting.vue';
  import Product from './components/Product.vue';

  // import data
  import brands from './data/brands.js';
  import scales from './data/scales.js';
  import products from './data/products.json';

  export default {
    data() {
      return {
        breadcrumbs: [
          "Главная",
          "Автомобили и мотоциклы",
          "Легковые",
          "Tamiya",
          "Porsche 959"
        ],
        brands: brands,
        scales: scales,
        products: products
      }
    },
    mounted() {
      
    },
    methods: {

    },
    components: {
      Header,
      Footer,
      Breadcrumbs,
      Filter,
      SelectedFilters,
      Sorting,
      Product
    }
  }
</script>

<template>
  <Header />

  <div class="page">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs" />

      <div class="page-heading">
        <h1>Каталог</h1>
        <div class="page-heading__count">1223 товара</div>
      </div>

      <div class="base-layout">
        <Filter />

        <div class="main">
          <SelectedFilters />          
          <Sorting />

          <!-- products -->
          <div class="products-grid">
            <div class="products-grid__inner">
              <Product v-for="item, key in products" :key="item.id" :data="item"/>
            </div>
          </div>
          <!-- .products -->

          
          <!-- relinking -->
          <div class="relinking">
            
            <!-- brands -->
            <div class="relinking__group">
              <div class="relinking__title">Производители по запросу Автомобили и мотоциклы</div>
              <div class="relinking__content">
                <div class="chips chips--secondary">
                  <div class="chips__inner">
                    <a href="#" class="chips__item" v-for="item in brands" @click.prevent>{{ item }}</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- brands -->

            <!-- scales -->
            <div class="relinking__group">
              <div class="relinking__title">Масштабы по запросу Автомобили и мотоциклы</div>
              <div class="relinking__content">
                <div class="chips chips--secondary">
                  <div class="chips__inner">
                    <a href="#" class="chips__item" v-for="item in scales" @click.prevent>{{ item }}</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- scales -->
          </div>
          <!-- relinking -->

        </div>
      </div>

    </div>
  </div>

  <Footer />
</template>

<style scoped lang="scss">
</style>
