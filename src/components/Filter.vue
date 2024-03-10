<script>
import VueMultiselect from 'vue-multiselect';
import RangeSlider from 'vue-simple-range-slider';
//import 'vue-simple-range-slider/css';
import categories from '../data/categories.js';
import filters from '../data/filters.json';
import IconFavorite from './icons/IconFavorite.vue';
import Checkbox from './form/Checkbox.vue';
import Switch from './form/Switch.vue';

export default {
  data() {
    return {
      categories,
      filters,
      sortedProducts: [],
      priceMin: 321,
      priceMax: 10200,
      priceRangeMin: 321,
      priceRangeMax: 10200,
      priceRangeSliderValue: [321, 10200],
      limit: 160,
      limitOptions: ["25 товаров", "50 товаров", "75 товаров", "100 товаров", "120 товаров", "160 товаров"],
      showInStock: true
    }
  },
  watch: {
    priceRangeSliderValue(newValue, oldValue) {
      this.priceMin = newValue[0];
      this.priceMax = newValue[1];
    },
    priceMin(newValue, oldValue) {
      if (this.priceRangeSliderValue[0] != newValue) {
        this.priceRangeSliderValue[0] = newValue;
      }
    },
    priceMax(newValue, oldValue) {
      if (this.priceRangeSliderValue[1] != newValue) {
        this.priceRangeSliderValue[1] = newValue;
      }
    },
  },
  methods: {

  },
  components: {
    IconFavorite,
    Checkbox,
    Switch,
    VueMultiselect,
    RangeSlider
  }
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
      <div class="filter-group__title">{{ f.name }}</div>

      <div class="filter-group__content">
        <div class="filter-group__content-in">
          <div class="checkboxes">
            <Checkbox v-for="item in f.items" :data="item" :name="f.inputName"/>
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
      <Switch :name="'inStock'" :text="'Только товары в наличии'" />
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
          @update:model-value="newValue => limit = parseInt(newValue)"
        />

      </div>
    </div>
    <!-- .limit -->

    <!-- reset -->
    <div class="sidebar-item filter-reset">
      <button type="button" class="btn btn--outline btn--sm filter-reset__btn">Сбросить</button>
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

<style lang="scss">
.sidebar {
  width: 240px;
  background-color: #fff;
  border-radius: 16px;
  flex-shrink: 0;
  padding: 16px 16px 16px;
  
  .filter-reset {
    .btn {
      width: 100%;
    }    
  }
}

.sidebar-nav {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  &__item {
    padding: 8px 0;
  }

  &__link {
    text-decoration: none;
    color: #333;
    transition: all .25s ease;

    &:hover,
    &.active {
      text-decoration: none;
      color: #39B6D1;      
    }
  }
}

.filter-group {
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
}

.sidebar-item {
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
}

.filter-save-selection {
  margin-top: 25px;

  &__link {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-decoration: none;
    color: #333;
    font-size: 14px;
    line-height: 20px;
    transition: all .25s ease;

    &-text {
      font-weight: 500;
    }

    svg {
      fill: #fff;
      stroke: #333;
      width: 16px;
      height: 16px;
      margin-top: 1px;
      margin-left: 10px;
      transition: all .25s ease;
    }

    &:hover {
      color: #279FB9;
      text-decoration: none;

      svg {
        stroke: #279FB9;
      }
    }
  }
}
</style>