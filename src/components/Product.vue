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
      addedToCart: false
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
      if (this.isSmall) {
        return new URL(('../assets/img/' + this.data.imgSmall), import.meta.url).href;
      } else {        
        return new URL(('../assets/img/' + this.data.img), import.meta.url).href;
      }      
    },
    isSmall() {
      return this.$store.state.listingView == 'small';
    }
  },
  methods: {
    addToCart() {
      this.addedToCart = true;
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
        <div class="badge badge--new" v-if="data.new">NEW</div>
        <div class="badge badge--sale" v-if="data.discount > 0">SALE</div>
        <a href="#" class="badge badge--camera" @click.prevent v-if="data.video">
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
          <RatingStars :value="data.rating" />
        </div>
        <div class="product__reviews-count">{{ data.reviews }} отзывов</div>
      </div>

      <div class="product__button">
        <button type="button" class="btn btn--xs" @click="addToCart" @click.prevent="addToCard" v-if="!addedToCart">В корзину</button>
        <button type="button" class="btn btn--accent btn--xs" @click.prevent v-if="addedToCart">В корзине</button>
      </div>
      
    </div>
  </div>
</div>
</template>