<template>
  <h1>Not Found</h1>
  <p>Oops, we couldn't find that page...</p>
  <GoBack />
</template>

<script>
import GoBack from "@/components/GoBack";
export default {
  name: "NotFound",
  components: { GoBack },
};
</script>

<style scoped></style>
