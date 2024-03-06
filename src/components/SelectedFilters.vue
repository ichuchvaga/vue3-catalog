<script>
import IconClose from './icons/IconClose.vue';

export default {
  components: {
    IconClose
  }
}
</script>

<template>
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
</template>