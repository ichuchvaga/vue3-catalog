<script>
  import Header from './components/Header.vue';
  import Breadcrumbs from './components/Breadcrumbs.vue';
  import Footer from './components/Footer.vue';
  import Sidebar from './components/Sidebar.vue';
  import IconClose from './components/icons/IconClose.vue';

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
      IconClose
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
          <!-- selected filters -->
          <div class="selected-filters">
            <div class="selected-filters__inner">

              <div class="selected-filter">
                <span class="selected-filter__text">Цена: от 321 до  10 203</span>
                <a href="#" @click.prevent class="selected-filter__remove">
                  <IconClose />
                </a>
              </div>

              <div class="selected-filter">
                <span class="selected-filter__text">Легковая техника</span>
                <a href="#" @click.prevent class="selected-filter__remove">
                  <IconClose />
                </a>
              </div>

            </div>
          </div>
          <!-- .selected filters -->
          
          <div class="sorting-bar">
            <div class="sorting">
              <div class="sorting__caption">Сортировать по:</div>

              <div class="sorting__items">
                <div class="sorting__item">

                </div>
              </div>
            </div>

            <div class="view">
              <a class="view-link"></a>
              <a class="view-link"></a>
            </div>
          </div>

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
