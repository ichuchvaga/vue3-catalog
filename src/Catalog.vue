<script>
  import { mapState, mapGetters } from 'vuex';
  import sort from './helpers/sort.js';

  // import components
  import Header from './components/Header.vue';
  import Breadcrumbs from './components/Breadcrumbs.vue';
  import Footer from './components/Footer.vue';
  import Filter from './components/Filter.vue';
  import SelectedFilters from './components/SelectedFilters.vue';
  import Sorting from './components/Sorting.vue';
  import ProductsList from './components/ProductsList.vue';

  // import data
  import brands from './data/brands.js';
  import scales from './data/scales.js';

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
        scales: scales
      }
    },
    computed: {
      filteredProducts() {
        let filteredResult = [];
        this.$store.state.products.map(product => {
          filteredResult.push(product);
        });

        // filter by price
        const priceMin = parseFloat(this.getSelectedPrice.min);
        const priceMax = parseFloat(this.getSelectedPrice.max);

        let filteredPrice = filteredResult.filter(product => {
          const price = parseFloat(product.price);

          if ((price >= priceMin) && (price <= priceMax)) {
            return true;
          }
        });
        filteredResult = filteredPrice;
        
        // filter by stock availability
        const filteredByStockStatus = []; 
        filteredResult.map(product => {
          if (this.inStockOnly === true) {
            if (product.inStock == this.inStockOnly) {
              filteredByStockStatus.push(product);
            }
          } else {
            filteredByStockStatus.push(product);
          }
        });

        filteredResult = filteredByStockStatus;

        // filter by selected option (brand, scale)
        let filteredByOptions = [];   
        let filteredByOptionsIds = [];     

        if (this.$store.state.selectedFilters.length > 0) {
          const selectedBrands = [];
          const selectedScales = [];
          
          this.$store.state.selectedFilters.map(filter => {
            if (filter.name == 'brand') {
              selectedBrands.push(filter.value);
            } else if (filter.name == 'scale') {
              selectedScales.push(filter.value);
            }
          });

          filteredResult.map((product) => {
            this.$store.state.selectedFilters.map((filter) => {
              if (filteredByOptionsIds.includes(product.id)) {
                return true;
              }
              // Both filters applied
              if ((selectedBrands.length > 0) && (selectedScales.length > 0)) {
                if (selectedBrands.includes(product.brand) && selectedScales.includes(product.scale)) {
                  filteredByOptions.push(product);
                  filteredByOptionsIds.push(product.id);
                }
              }

              // Brand selected, no scale 
              if ((selectedBrands.length > 0) && (selectedScales.length == 0)) {
                if (selectedBrands.includes(product.brand)) {
                  filteredByOptions.push(product);
                  filteredByOptionsIds.push(product.id);
                }
              }

              // Scale selected, no brands 
              if ((selectedBrands.length == 0) && (selectedScales.length > 0)) {
                if (selectedScales.includes(product.scale)) {
                  filteredByOptions.push(product);
                  filteredByOptionsIds.push(product.id);
                }
              }
            });
          });
          filteredResult = filteredByOptions;
        }

        return filteredResult;
      },
      sortedProducts() {
        let sortedProducts = this.filteredProducts.map(product => product);
       
        let sortedArray = [];
        sortedArray = sortedProducts.sort(sort[this.getSortState.sortBy][this.getSortState.sortDir]);
        return (sortedArray.length) ? sortedArray : this.filteredProducts;
      },
      productsCount() {
        return this.sortedProducts.length;
      },
      ...mapState([
          'inStockOnly'
        ]),
      ...mapGetters([
        'getSelectedPrice',
        'getSortState',
      ])
    },
    components: {
      Header,
      Footer,
      Breadcrumbs,
      Filter,
      SelectedFilters,
      Sorting,
      ProductsList
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
        <div class="page-heading__count">{{ productsCount }} товара</div>
      </div>

      <div class="base-layout">
        <Filter />

        <div class="main">
          <SelectedFilters />          
          <Sorting />

          <!-- products -->
          <ProductsList :products="sortedProducts" />
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