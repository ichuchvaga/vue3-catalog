<script>
import IconCheck from '../icons/IconCheck.vue';
export default {
  props: {
    data: Object,
    name: String
  },
  components: {
    IconCheck
  }
}
</script>

<template>
<div class="checkbox">
  <label>
    <input 
      type="checkbox" 
      :name="name" 
      :value="data.title"
    />
    <span class="checkbox__content">
      <span class="checkbox__icon">
        <IconCheck />
      </span>
      <span class="checkbox__text">{{ data.title }}</span>
    </span>
  </label>
</div>
</template>