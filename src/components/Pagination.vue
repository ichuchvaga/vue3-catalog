<script>

export default {
  data() {
    return {
      currentPage: 1
    }
  },
  props: {
    total: Number,
    limit: Number
  },
  emits: ['update'],
  watch: {
    currentPage(newPage, oldPage) {
      this.$emit('update', newPage);
    }
  }
}
</script>

<template>
<div class="custom-pagination">
  <vue-awesome-paginate
    :total-items="total"
    :items-per-page="limit"
    :max-pages-shown="5"
    v-model="currentPage"
  />
</div>
</template>

<style>
.custom-pagination .pagination-container {
  column-gap: 4px;
}
.custom-pagination .paginate-buttons {
  height: 32px;
  width: 29px;
  border-radius: 7px;
  cursor: pointer;
  background-color: rgba(255,255,255,0);
  border: none;
  color: #333;
  font-size: 16px;
}
.custom-pagination .paginate-buttons:hover {
  background-color: #F5F5F5;
}
.custom-pagination .active-page {
  background-color: #279FB9;
  color: white;
}
.custom-pagination .active-page:hover {
  background-color: #279FB9;
}
.custom-pagination .back-button:active,
.custom-pagination .next-button:active {
  background-color: #279FB9;
  color: #fff;
}
</style>