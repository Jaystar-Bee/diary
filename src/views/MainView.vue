<template>
  <main class="pt-10 max-w-3xl mx-auto">
    <div
      class="
        flex
        justify-center
        font-bold
        space-x-14
        text-xl
        tracking-wider
        mb-10
        h-8
      "
    >
      <p
        :class="
          diaryOption === 'add-diary'
            ? 'border-b-4 border-b-white text-white'
            : ''
        "
        class="duration-500 cursor-pointer"
        @click="toAdd"
      >
        New Diary
      </p>
      <p
        :class="
          diaryOption === 'diary-view'
            ? 'border-b-4 border-b-white text-white'
            : ''
        "
        class="duration-500 cursor-pointer"
        @click="toDiary"
      >
        Your Diary
      </p>
      <div>
        <img
          src="@/assets/img/power.png"
          alt=""
          class="w-8 h-8 cursor-pointer"
          @click="logoutUser"
        />
      </div>
    </div>
    <keep-alive>
      <component :is="diaryOption"></component>
    </keep-alive>
  </main>
</template>

<script>
import AddDiary from "./../components/main/AddDiary.vue";
import DiaryView from "./../components/main/DiaryView.vue";
export default {
  components: {
    AddDiary,
    DiaryView,
  },
  data() {
    return {
      diaryOption: "diary-view",
    };
  },
  methods: {
    toAdd() {
      this.diaryOption = "add-diary";
    },
    toDiary() {
      this.diaryOption = "diary-view";
    },
    logoutUser() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
