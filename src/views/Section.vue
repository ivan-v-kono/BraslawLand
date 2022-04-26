<template>
  <div class="wrapper">
    <section id="section" v-if="section" class="section">
      <h1>{{ section.name }}</h1>
      <div class="section-details">
        <img :src="`/images/${section.image}`" :alt="section.name" />
        <p>{{ section.description }}</p>
      </div>
    </section>
    <div id="router-link-home">
      <router-link to="/"> &#8592; Back</router-link>
    </div>
    <section class="locations">
      <h2>Top places in {{ section.name }}</h2>
      <div class="cards">
        <router-link
          v-for="location in section.locations"
          :key="location.slug"
          :to="{
            name: 'location.show',
            params: { locationSlug: location.slug },
          }"
        >
          <locationCard :location="location" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import locationCard from "@/components/locationCard";

export default {
  name: "SectionView",
  components: {
    locationCard,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    section() {
      return sourceData.sections.find((section) => section.slug === this.slug);
    },
  },
};
</script>

<style scoped></style>
