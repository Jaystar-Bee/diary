<template>
  <div>
    <form>
      <div class="mx-auto w-11/12">
        <input type="date" @blur="getSearch" v-model="date" />
      </div>
    </form>
    <ul>
      <diary-item
        v-for="diary in searchDiary"
        :key="diary.id"
        :diary="diary"
      ></diary-item>
    </ul>
  </div>
</template>

<script>
import DiaryItem from "./DiaryItem.vue";
export default {
  data() {
    return {
      searchDiary: [],
      date: "",
    };
  },
  components: {
    DiaryItem,
  },
  methods: {
    getSearch() {
      this.$store.dispatch("data/searchOutput", { date: this.date });
      this.searchDiary = this.$store.getters["data/allSearch"];
    },
  },
};
</script>