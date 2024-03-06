<script>
export default {
  props: {
    items: Array
  }
}
</script>

<template>
<div class="breadcrumbs">
  <ul class="breadcrumbs__list">
    <li class="breadcrumbs__item" v-for="item, index in items" :class="{'breadcrumbs__item--current': ((index + 1) == items.length)}">
      <a href="#" class="breadcrumbs__link" @click.prevent v-if="(index + 1) < items.length">{{ item }}</a>
      <span class="breadcrumbs__link" @click.prevent v-if="(index + 1) == items.length">{{ item }}</span>
    </li>
  </ul>
</div>
</template>

<style lang="scss">
.breadcrumbs {
  font-size: 14px;
  line-height: 20px;

  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: block;
      width: 7px;
      height: 12px;
      margin-left: 14px;
      margin-right: 12px;
      background: url("@/assets/img/icon-arrow-right.svg") no-repeat 0 0;
      background-size: contain;
    }

    &--current {
      &::after {
        content: unset;
        display: none;
      }
    }
  }

  &__link {
    text-decoration: none;
    color: #333;
  }

  &__item--current {
   .breadcrumbs__link {
     color: #BDBDBD;
   } 
  }
}
</style>