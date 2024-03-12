<script>
import IconClose from './icons/IconClose.vue';

export default {
  components: {
    IconClose
  },
  methods: {
    removeFilter(data) {
      this.$store.commit('removeFilter', data);
    }
  }
}
</script>

<template>
<div class="selected-filters">
  <div class="selected-filters__inner">

    
    <div class="selected-filter">
      <span class="selected-filter__text">Цена: от {{ this.$store.state.selectedPrice.min }} до  {{ this.$store.state.selectedPrice.max }}</span>
      <a href="#" @click.prevent class="selected-filter__remove">
        <IconClose />
      </a>
    </div>
   
    <div class="selected-filter" v-for="item in this.$store.state.selectedFilters" @click.prevent="removeFilter(item)">
      <span class="selected-filter__text">{{ item.value }}</span>
      <a href="#" class="selected-filter__remove">
        <IconClose />
      </a>
    </div>

  </div>
</div>
</template>