import { createStore } from 'vuex';
import filters from '../data/filters.json';
import products from '../data/products_randomized.json';

export default createStore({
  state () {
    return {
      selectedPrice: {
        min: 321,
        max: 10200
      },
      selectedFilters: [],
      filters: filters,
      sortBy: 'popularity',
      sortDir: 'ASC',
      inStockOnly: false,
      listingView: 'default',
      products
    }
  },
  getters: {
    getFilters(state) {
      return state.filters;
    },
    getSelectedPrice(state) {
      return state.selectedPrice;
    },
    getSortState(state) {
      return {
        sortBy: state.sortBy,
        sortDir: state.sortDir
      }
    }
  },
  mutations: {
    initFilters(state) {
      let newState = [];
      state.filters.map(filtersGroup => {        
        const updatedFilters = {
          title: filtersGroup.title,
          name: filtersGroup.name
        };
        updatedFilters.items = filtersGroup.items.map(filter => {
          return {
            ...filter,
            checked: false
          }
        });
        newState.push(updatedFilters);
      });
      state.filters = newState;
    },
    updatePriceFilter(state, price) {
      if (price.min) {
        state.selectedPrice.min = price.min;
      }
      if (price.max) {
        state.selectedPrice.max = price.max;
      }      
    },
    addFilter(state, { name, value }) {
      state.selectedFilters.push({
        'name': name,
        'value': value
      });

       // update checkbox state
       const newFilters = [];
       state.filters.map(filtersGroup => {       
         const updatedFilters = {
           title: filtersGroup.title,
           name: filtersGroup.name
         };
         updatedFilters.items = filtersGroup.items.map(filter => {
           const filterData = {
             ...filter
           };
           if ((filtersGroup.name == name) && (filter.title == value)) {
             filterData.checked = true;             
           }
           return filterData;
         });
         newFilters.push(updatedFilters);
       });
       
       state.filters = newFilters;
    },
    removeFilter(state, { name, value }) {
      // remove from selected
      const newState = state.selectedFilters.filter((filter => {
        return ((filter.name == name) && (filter.value == value)) ? false : true;
      }));
      state.selectedFilters = newState;

      // update checkbox state
      const newFilters = [];
      state.filters.map(filtersGroup => {       
        const updatedFilters = {
          title: filtersGroup.title,
          name: filtersGroup.name
        };
        updatedFilters.items = filtersGroup.items.map(filter => {
          const filterData = {
            ...filter
          };
          if ((filtersGroup.name == name) && (filter.title == value)) {
            filterData.checked = false;             
          }
          return filterData;
        });
        newFilters.push(updatedFilters);
      });
      
      state.filters = newFilters;
    },
    updateInStock(state, value) {
      state.inStockOnly = value;
    },
    resetFilter(state) {
      state.inStockOnly = true;
      state.sortBy = 'popularity';
      state.sortDir = 'ASC';
      state.selectedFilters = [];

      const newFilters = [];
      state.filters.map(filtersGroup => {
        const updatedFilters = {
          title: filtersGroup.title,
          name: filtersGroup.name
        };
        updatedFilters.items = filtersGroup.items.map(filter => {
          const filterData = {
            ...filter
          };

          filterData.checked = false;
          return filterData;
        });
        newFilters.push(updatedFilters);
      });
      
      state.filters = newFilters;
    },
    updateSortField(state, value) {
      state.sortBy = value;
    },
    updateSortDir(state, value) {
      state.sortDir = value;
    },
    updateView(state, value) {
      state.listingView = value;
    }
  }
})


// function getMinMax() {
//   let minValue = 0,
//   let maxValue = 0;
//   let prices = [];
//   products.map(product => {
//     prices.push(parseFloat(product.price));
//   });
//   console.log(prices);
//   return {
//     min: '',
//     max: ''
//   }
// }