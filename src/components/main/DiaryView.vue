<template>
  <div>
    <div class="flex justify-center">
      <img src="./../../assets/img/book-art.png" alt="" class="h-60" />
    </div>
    <div class="bg-white rounded-xl py-4">
      <div class="flex justify-around font-semibold mb-8">
        <p @click="viewAll" class="cursor-pointer">All</p>
        <p @click="viewFavourite" class="cursor-pointer">Favourites</p>
        <p @click="viewSearch" class="cursor-pointer">Search</p>
      </div>
      <keep-alive>
        <transition mode="out-in" name="diary">
          <component :is="activeComponent"></component>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AllDiary from "./AllDiary.vue";
import FavouriteDiary from "./FavouriteDiary.vue";
import SearchDiary from "./SearchDiary.vue";
export default {
  components: {
    AllDiary,
    FavouriteDiary,
    SearchDiary,
  },
  data() {
    return {
      activeComponent: "all-diary",
    };
  },
  methods: {
    viewAll() {
      this.activeComponent = "all-diary";
    },
    viewFavourite() {
      this.activeComponent = "favourite-diary";
    },
    viewSearch() {
      this.activeComponent = "search-diary";
    },
  },
};
</script>

<style scoped>
.diary-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.diary-enter-to,
.diary-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
.diary-enter-active,
.diary-leave-active {
  animation: all 1s ease-out;
}
.diary-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>