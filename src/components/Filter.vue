<script>
import { mapGetters, mapState } from 'vuex';
import brands from '../data/brands.js';

import VueMultiselect from 'vue-multiselect';
import RangeSlider from 'vue-simple-range-slider';
import categories from '../data/categories.js';
import IconFavorite from './icons/IconFavorite.vue';
import Checkbox from './form/Checkbox.vue';
import Switch from './form/Switch.vue';

export default {
  data() {
    return {
      categories,
      priceMin: 321,
      priceMax: 10200,
      priceRangeMin: 321,
      priceRangeMax: 10200,
      priceRangeSliderValue: [321, 10200],
      limit: "25 товаров",
      limitOptions: ["25 товаров", "50 товаров", "75 товаров", "100 товаров", "120 товаров", "160 товаров"],
    }
  },
  computed: {
    ...mapState([
        'filters',
        'inStockOnly'
    ])
  },
  watch: {
    priceRangeSliderValue(newValue, oldValue) {
      this.priceMin = newValue[0];
      this.priceMax = newValue[1];

      this.$store.commit('updatePriceFilter', {
        min: this.priceRangeSliderValue[0],
        max: this.priceRangeSliderValue[1]
      });
    },
    priceMin(newValue, oldValue) {
      if (this.priceRangeSliderValue[0] != newValue) {
        this.priceRangeSliderValue[0] = newValue;

        this.$store.commit('updatePriceFilter', {
          min: newValue
        });
      }      
    },
    priceMax(newValue, oldValue) {
      if (this.priceRangeSliderValue[1] != newValue) {
        this.priceRangeSliderValue[1] = newValue;

        this.$store.commit('updatePriceFilter', {
          max: newValue
        });
      }
    },
    ...mapState(['inStockOnly'])
  },
  methods: {
    addFilter(value) {
      this.$store.commit('addFilter', value);
    },
    removeFilter(value) {
      this.$store.commit('removeFilter', value);
    },
    updateInStock(isChecked) {
      if (!this.inStockOnly === isChecked) {
        this.$store.commit('updateInStock', isChecked);
      }      
    },
    resetFilter() {
      this.$store.commit('resetFilter');
    },
    ...mapGetters([
      'getFilters'
    ])
  },
  components: {
    IconFavorite,
    Checkbox,
    Switch,
    VueMultiselect,
    RangeSlider
  },
  created() {
    this.$store.commit('updatePriceFilter', {
      min: this.priceRangeSliderValue[0],
      max: this.priceRangeSliderValue[1]
    });
    this.$store.commit('initFilters');
  },
}
</script>

<template>
<div class="sidebar">
  <div class="filter">

    <!-- categories -->
    <div class="filter-group">
      <div class="filter-group__title">Категории</div>

      <div class="filter-group__content">
        <div class="filter-group__content-in">
          <ul class="sidebar-nav">
            <li class="sidebar-nav__item" v-for="item in categories">
              <a href="#" class="sidebar-nav__link" @click.prevent>{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- .categories -->

    <!-- other filters -->
    <div class="filter-group" v-for="f in filters">
      <div class="filter-group__title">{{ f.title }}</div>

      <div class="filter-group__content">
        <div class="filter-group__content-in">
          <div class="checkboxes">
            <Checkbox 
              v-for="item in f.items" 
              :data="item"
              :name="f.name"

              @checked="addFilter({
                name: f.name,
                value: item.title
              })"

              @unchecked="removeFilter({
                name: f.name,
                value: item.title
              })"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- .other filters -->

    <!-- price -->
    <div class="filter-group">
      <div class="filter-group__title">Цена</div>

      <div class="filter-group__content">
        <div class="filter-group__content-in">
          <div class="range">
            <div class="range__inputs">

              <div class="range__input">
                <label for="range-from" class="range__input-label">От</label>
                <input type="text" class="range__input-elem" id="range-from" placeholder="" v-model.number="priceMin">
              </div>

              <div class="range__input">
                <label for="range-to" class="range__input-label">До</label>
                <input type="text" class="range__input-elem" id="range-to" placeholder="" v-model.number="priceMax">
              </div>

            </div>

            <div class="range__slider">
              <RangeSlider 
                v-model="priceRangeSliderValue"
                style="width: 100%"
                :min="priceRangeMin"
                :max="priceRangeMax"
                popover-content-editable="false"
                bar-color="#F5F5F5"
                active-bar-color="#279FB9"
                @update:model-value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .price -->

    <!-- stock -->
    <div class="sidebar-item in-stock-switch">
      <Switch :text="'Только товары в наличии'" :checked="inStockOnly" @update="updateInStock" />
    </div>
    <!-- .stock -->

    <!-- limit -->
    <div class="sidebar-item filter-limit">
      <div class="dropdown">
        <div class="dropdown__label">Показывать на странице</div>

        <VueMultiselect
          :model-value="limit"
          :options="limitOptions"
          :searchable="false"
          :show-labels="false"
          :close-on-select="true"
          :allow-empty="false"
          placeholder="Select one"
          @update:model-value="newValue => { limit = parseInt(newValue); this.$store.commit('updateLimit', parseInt(newValue))}"
        />

      </div>
    </div>
    <!-- .limit -->

    <!-- reset -->
    <div class="sidebar-item filter-reset">
      <button 
        type="button" 
        class="btn btn--outline btn--sm filter-reset__btn"
        @click.prevent="resetFilter"
      >Сбросить</button>
    </div>
    <!-- .reset -->

    <!-- save selection -->
    <div class="sidebar-item filter-save-selection">
      <a href="#" class="filter-save-selection__link" @click.prevent>
        <span class="filter-save-selection__link-text">Сохранить подборку</span>
        <IconFavorite />
      </a>
    </div>
    <!-- .save selection -->

  </div>
</div>
</template>

<style>
 .multiselect__select::before {
    background: url("/src/assets/img/select-arrow.svg") no-repeat 0 0;
  }
</style>