<template>
  <section :id="locationSlug" class="fade-nested" :key="$route.path">
    <!--small-foto+desc-bottom-->
    <h1>{{ location.name }}</h1>
    <img :src="`/images/${location.image}`" alt="location.name" />
    <p>{{ location.description }}</p>
  </section>
</template>

<script>
import sourceData from "@/data.json";
export default {
  name: "PlacesView",
  props: {
    slug: {
      type: String,
      required: true,
    },
    locationSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    section() {
      return sourceData.sections.find((section) => section.slug === this.slug);
    },
    location() {
      return this.section.locations.find(
        (location) => location.slug === this.locationSlug
      );
    },
  },
};
</script>

<style>
/*---- fade-nested transition ----*/
.fade-nested {
  transition: opacity 1s ease;
}
.fade-enter-active .fade-nested {
  opacity: 0;
}
</style>
