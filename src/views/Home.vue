<template>
  <div class="home" id="start-fotos+titles">
    <h1>The best places of Braslaw Land</h1>
    <div class="sections">
      <router-link
        v-for="section in sections"
        :key="section.id"
        :to="{
          name: 'sections',
          params: { slug: section.slug },
        }"
      >
        <h2>{{ section.name }}</h2>
        <img :src="`/images/${section.image}`" :alt="section.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  name: "HomeView",
  components: {},
  data: () => ({
    sections: sourceData.sections,
  }),
};
</script>
