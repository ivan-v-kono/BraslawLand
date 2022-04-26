<template>
  <Navigation />
  <div class="container">
    <router-view />
    <!--:key="$route.path" -->
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>

<style></style>
