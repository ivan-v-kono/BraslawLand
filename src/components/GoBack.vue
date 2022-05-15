<template>
  <!--TODO: сделать возврат не на предыдущую, а на уровень выше-->
  <span class="go-back">
    <button
      @click="$router.back()"
      style="border-color: rgba(255, 255, 255, 0.7)"
    >
      &#8592; Back
    </button>
  </span>
</template>

<script>
export default {
  name: "GoBack",
};
</script>

<style scoped></style>
