<template>
  <div>
    <div
      v-if="favouriteDiary.length === 0"
      class="mt-10 text-center text-lg font-semibold"
    >
      You have no Favourites yet
      <p class="text-base text-gray-500 mt-4">start adding now</p>
    </div>
    <ul>
      <diary-item
        v-for="diary in favouriteDiary"
        :key="diary.id"
        :diary="diary"
      ></diary-item>
    </ul>
  </div>
</template>
<script>
import DiaryItem from "./DiaryItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    DiaryItem,
  },
  computed: {
    ...mapGetters("data", ["favouriteDiary"]),
  },
};
</script>

