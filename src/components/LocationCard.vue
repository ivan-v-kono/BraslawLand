<template>
  <div class="card" id="card">
    <img :src="`/images/${location.image}`" alt="location.name" />
    <span class="card__text">
      {{ location.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "locationCard",
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
