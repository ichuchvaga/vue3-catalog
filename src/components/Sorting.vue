<script>
import IconSortDirArrow from './icons/IconSortDirArrow.vue';
import IconViewDefault from './icons/IconViewDefault.vue';
import IconViewBig from './icons/IconViewBig.vue';

export default {
  data() {
    return {
      sortBy: [
        {
          name: 'popularity',
          caption: 'Популярности' 
        },
        {
          name: 'rating',
          caption: 'Рейтингу' 
        },
        {
          name: 'price',
          caption: 'Цене' 
        },
        {
          name: 'discount',
          caption: 'Скидке' 
        },
        {
          name: 'update',
          caption: 'Обновлению' 
        }
      ],
      sortDir: 'ASC',
      active: 'price',
      view: 'big'
    }
  },
  methods: {
    updateSort(param) {
      if (this.active == param) {
        this.updateSortDir();
      } else {
        this.active = param;
      }
    },
    updateSortDir() {
      this.sortDir = (this.sortDir == 'ASC') ? 'DESC' : 'ASC';
    },
    updateView(value) {
      if (this.view != value) {
        this.view = value;
      }
    }
  },
  components: {
    IconSortDirArrow,
    IconViewDefault,
    IconViewBig
  }
}
</script>

<template>
<div class="sorting-bar">
  <div class="sorting">
    <div class="sorting__caption">Сортировать по:</div>

    <div class="sorting__items">
      <div class="sorting__item" v-for="item in sortBy">
        <a href="#" class="sorting__link" :data-value="item.name" :class="{active: item.name == active}" @click.prevent="updateSort(item.name)">{{ item.caption }}
          <span class="sort-dir" v-show="item.name == active" :class="{desc: sortDir == 'DESC'}">
            <IconSortDirArrow />
          </span>
        </a>
      </div>
    </div>
  </div>

  <div class="view">
    <a href="#" class="view-link" @click.prevent="updateView('default')" :class="{active: view == 'default'}">
      <IconViewDefault />
    </a>

    <a href="#" class="view-link" @click.prevent="updateView('big')" :class="{active: view == 'big'}">
      <IconViewBig />
    </a>
  </div>
</div>
</template>

<style lang="scss">
.sorting-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 24px 0;
}

.sorting {
  font-size: 16px;
  line-height: 24px;
  display: flex;

  &__caption {
    color: #BDBDBD;
    margin-right: 16px;
  }

  &__items {
    display: flex;
  }

  &__item {
    margin-right: 12px;
  }

  &__link {
    color: #333;
    text-decoration: none;
    display: block;
    
    &.active {
      color: #279FB9;
      text-decoration: none;
      position: relative;
      padding-right: 21px;
    }

    .sort-dir {
      margin-left: 4px;
      position: absolute;
      top: 4px;
      right: 0;
      transition: transform .25s ease;
      transform: rotate(0deg);

      &.desc {
        transform: rotate(-180deg);
      }
    }
  }
}

.sort-dir {
  display: block;
  width: 16px;
  height: 16px;
  font-size: 0;
  line-height: 0;
}

.view {
  display: flex;
}

.view-link {
  color: #E0E0E0;
  text-decoration: none;
  display: block;
  width: 24px;
  height: 24px;
  font-size: 0;
  line-height: 0;
  margin-left: 8px;
  
  &:first-child {
    margin-left: 0;
  }

  svg {
    fill: currentColor;
    width: 24px;
    height: 24px;
  }

  &.active {
    color: #279FB9;
    text-decoration: none;
  }
}
</style>