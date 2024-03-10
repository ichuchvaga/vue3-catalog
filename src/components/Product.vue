<script>
import IconCamera from './icons/IconCamera.vue';
import IconFavorite from './icons/IconFavorite.vue';
import RatingStars from './RatingStars.vue';

export default {
  props: {
    data: Object
  },
  mounted() {
  },
  data() {
    return {
      
    }
  },
  computed: {
    formatPrice() {
      let value = this.data.price;
      if (!value) return '';
      value = value.toString();
      const formatter = new Intl.NumberFormat("ru");
      return formatter.format(value);
    },
    imgUrl() {
      return new URL(('../assets/img/' + this.data.img), import.meta.url).href;
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.data.id);
    }
  },
  components: {
    IconCamera,
    IconFavorite,
    RatingStars
  }
}
</script>

<template>
<div class="product">
  <div class="product__inner">
    <div class="product__image">
      <img :src="imgUrl" alt="" />
      <div class="product__quick-view">
        <a href="#" class="btn btn--xxs" @click.prevent>Быстрый просмотр</a>
      </div>
      <div class="product__favorite">
        <button type="button" class="favorite-icon"><IconFavorite/></button>
      </div>
      <div class="product__badges">
        <div class="badge badge--new">NEW</div>
        <div class="badge badge--sale">SALE</div>
        <a href="#" class="badge badge--camera" @click.prevent>
          <IconCamera />
        </a>
      </div>
    </div>

    <div class="product__info">
      <div class="product__price">{{ formatPrice }} ₽</div>
      <div class="product__name">{{ data.name }}</div>
      <div class="product__params">
        <div class="product__scale">{{ data.scale }}</div>
        <div class="product__brand">{{ data.brand }}</div>
      </div>

      <div class="product__reviews">
        <div class="product__rating">
          <RatingStars value="3.5" />
        </div>
        <div class="product__reviews-count">{{ data.reviews }} отзывов</div>
      </div>

      <div class="product__button">
        <button type="button" class="btn btn--xs" @click="addToCart">В корзину</button>
        <button type="button" class="btn btn--accent btn--xs" v-if="false">В корзине</button>
      </div>
      
    </div>
  </div>
</div>
</template>