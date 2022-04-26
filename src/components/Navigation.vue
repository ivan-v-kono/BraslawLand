<template>
  <div id="nav">
    <span id="logo">
      <router-link id="logo-link" to="/">All`42</router-link>
    </span>
    <router-link
      v-for="section in sections"
      :key="section.id"
      :to="{
        name: 'sections',
        params: { slug: section.slug }
      }"
    >
      {{ section.name }}
    </router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  name: "TheNavigation",
  data: () => ({
    sections: sourceData.sections,
  }),
};
</script>

<style scoped></style>
