<template>
  <div>
    <ul>
      <diary-item
        v-for="diary in allDiary"
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
    ...mapGetters("data", ["allDiary"]),
  },
  created() {
    this.$store.dispatch("data/getDiaries");
  },
  updated() {
    this.$store.dispatch("data/getDiaries");
  },
};
</script>

