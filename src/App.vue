<template>
  <!--TODO: del IDs & rename classes-->
  <Navigation />
  <div class="container">
    <router-view />
    <!--<router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
        &lt;!&ndash;:key="route.path" &ndash;&gt;
      </transition>
    </router-view>-->
  </div>
</template>

<script>
import Navigation from "@/components/AppNavigation";

export default {
  components: {
    Navigation,
  },
};
</script>

<style>
/*---- slide transition ----*/
/*.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.51s, transform 0.51s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}*/

/*---- moveUp transition ----*/
/*.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}*/

/*---- fade transition ----*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 1;
}

/*---- slide-fade transition ----*/
/*.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}*/
</style>
