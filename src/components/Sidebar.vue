<script>
import categories from '../data/categories.js';
import filters from '../data/filters.json';
import IconFavorite from './icons/IconFavorite.vue';

export default {
  data() {
    return {
      categories,
      filters
    }
  },
  components: {
    IconFavorite
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

            <div class="checkbox" v-for="item in f.items">
              <label>
                <input type="checkbox" name="">
                <span class="checkbox__content">
                  <span class="checkbox__icon"></span>
                  <span class="checkbox__text">{{ item.title }}</span>
                </span>
              </label>
            </div>

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
                <input type="text" class="range__input-elem" id="range-from" placeholder="" value="321">
              </div>

              <div class="range__input">
                <label for="range-to" class="range__input-label">До</label>
                <input type="text" class="range__input-elem" id="range-to" placeholder="" value="10 200">
              </div>

            </div>

            <div class="range-slider">

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .price -->

    <!-- stock -->
    <div class="in-stock-switch">
      <input type="radio" name="inStock" value="1">
      <label class="in-stock-switch__label">Только товары в наличии</label>
    </div>
    <!-- .stock -->

    <!-- limit -->
    <div class="filter-limit">
      <div class="filter-limit__caption">Показывать на странице</div>
    </div>
    <!-- .limit -->

    <!-- reset -->
    <div class="filter-reset">
      <button type="button" class="btn filter-reset__btn">Сбросить</button>
    </div>
    <!-- .reset -->

    <!-- save selection -->
    <div class="filter-save-selection">
      <a href="#" class="filter-save-selection__link" @click.prevent>
        <span class="filter-save-selection__link-text">Сохранить подборку</span>
        <IconFavorite />
      </a>
    </div>
    <!-- .save selection -->

  </div>
</div>
</template>