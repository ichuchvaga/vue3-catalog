<script>
  import Header from './components/Header.vue';
  import Breadcrumbs from './components/Breadcrumbs.vue';
  import Footer from './components/Footer.vue';
  import Sidebar from './components/Sidebar.vue';
  import SelectedFilters from './components/SelectedFilters.vue';
  import Sorting from './components/Sorting.vue';  

  export default {
    data() {
      return {
        breadcrumbs: [
          "Главная",
          "Автомобили и мотоциклы",
          "Легковые",
          "Tamiya",
          "Porsche 959"
        ]
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
      Sidebar,
      SelectedFilters,
      Sorting
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
        <Sidebar />

        <div class="main">
          <SelectedFilters />          
          <Sorting />

          <!-- products -->
          <!-- .products -->

        </div>
      </div>

    </div>
  </div>

  <Footer />
</template>

<style scoped lang="scss">
</style>
