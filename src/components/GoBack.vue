<template>
  <!--TODO: сделать возврат не на предыдущую, а на уровень выше-->
  <span class="go-back">
    <button @click="$router.back()">&#8592; Back</button>
  </span>
</template>

<script>
export default {
  name: "GoBack",
};
</script>

<style scoped></style>
