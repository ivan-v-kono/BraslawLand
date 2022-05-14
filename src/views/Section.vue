<template>
  <div class="wrapper" id="wrrrrr">
    <section id="big-foto+decrip" v-if="section" class="section">
      <h1>{{ section.name }}</h1>
      <div class="section-details">
        <img :src="`/images/${section.image}`" :alt="section.name" />
        <p>{{ section.description }}</p>
      </div>
    </section>
    <section class="locations" id="row-small-fotos">
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
      <!--<router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          &lt;!&ndash;name="fade" mode="out-in"&ndash;&gt;
          &lt;!&ndash;name="moveUp"&ndash;&gt;
          &lt;!&ndash;name="slide" mode="out-in"&ndash;&gt;
          <component :is="Component" :key="$route.path"></component>
          &lt;!&ndash;&ndash;&gt;
        </transition>
      </router-view>-->
      <!--<router-view />-->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
    <GoBack />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import GoBack from "@/components/GoBack";
import LocationCard from "@/components/LocationCard";

export default {
  name: "SectionView",
  components: {
    LocationCard,
    GoBack,
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

<style>
/*---- fade transition ----*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
