<template>
  <router-link :to="`/main/${diary.id}`">
    <li
      class="
        flex
        items-center
        justify-between
        border-t-2 border-t-gray-200
        py-4
        px-2
        sm:px-20
        hover:bg-orange-50
      "
    >
      <div class="flex items-center space-x-6">
        <div>
          <img src="./../../assets/img/book-art.png" alt="" class="w-14" />
        </div>
        <div>
          <h3 class="font-bold text-orange-800 text-lg">{{ title }}</h3>
          <p>{{ body }}</p>
          <p
            class="
              bg-orange-100
              rounded-lg
              px-4
              py-2
              text-sm text-orange-700
              font-semibold
              w-32
              text-center
            "
          >
            {{ formatDate(diary.date) }}
          </p>
        </div>
      </div>
      <div>
        <img src="./../../assets/img/arrow-right.png" alt="" class="black" />
      </div>
    </li>
  </router-link>
</template>
<script>
export default {
  props: ["diary"],
  computed: {
    title() {
      if (this.diary.title.length > 15) {
        return this.diary.title.substring(0, 14) + "...";
      } else {
        return this.diary.title;
      }
    },
    body() {
      if (this.diary.description.length > 25) {
        return this.diary.description.substring(0, 24) + "...";
      } else {
        return this.diary.description;
      }
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        day: "2-digit",
        month: "short",
      });
    },
  },
};
</script>

<style scoped>
.black {
  filter: invert(100%) brightness(10%);
}
</style>