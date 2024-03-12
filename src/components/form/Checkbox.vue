<script>
import IconCheck from '../icons/IconCheck.vue';

export default {
  data() {
    return {
      checked: this.data.checked,
    }
  },
  emits: ['checked', 'unchecked'],
  props: {
    data: Object,
    name: String
  },
  methods: {
    update(e) {
      const newValue = e.target.checked;
      if (newValue === true) {
        this.$emit('checked', newValue);
      } else {
        this.$emit('unchecked', newValue);
      }
    }
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
      :checked="data.checked"
      @input="update"
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