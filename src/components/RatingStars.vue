<script>
import IconRatingStar from './icons/IconRatingStar.vue';

export default {
  computed: {
    elementWidth() {
      const width = (parseFloat(this.value) / 5) * 100;
      return {
        width: width + '%'
      };
    }
  },
  props: {
    value: Number
  },
  components: {
    IconRatingStar
  }
}
</script>
<template>
<div class="rating-stars">
  <div class="rating-stars__default">
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
  </div>
  <div class="rating-stars__filled" :style="elementWidth">
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
    <div class="rating-stars__item"><IconRatingStar /></div>
  </div>
</div>
</template>

<style lang="scss">
.rating-stars {
  font-size: 0;
  line-height: 0;
  position: relative;
  width: 80px;

  &__item {
    width: 16px;

    svg {
      fill: #E8E8E8;
      width: 16px;
      height: 16px;
    }
  }

  &__default {
    display: flex;
  }

  &__filled {
    display: flex;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;

    .rating-stars__item {
      svg {
        fill: #FED833;
      }
    }
  }
}
</style>