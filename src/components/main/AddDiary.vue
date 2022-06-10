<template>
  <div class="bg-white rounded-xl py-10 relative">
    <keep-alive>
      <form class="" @submit.prevent="postDiary">
        <div class="border-b-2 border-b-gray-300 mb-10">
          <label for="title" class="font-semibold ml-4">Title ✔</label>
          <input
            type="text"
            placeholder="Title..."
            class="
              w-full
              p-4
              bg-transparent
              font-bold
              text-xl
              border-0
              outline-none
            "
            v-model.trim="title"
          />
        </div>
        <div class="">
          <label for="body" class="font-semibold ml-4"
            >My Diary &nbsp; 💕</label
          >
          <textarea
            name="body"
            id="body"
            class="
              w-full
              h-70v
              resize-none
              bg-transparent
              p-6
              text-lg
              border-0
              outline-none
              leading-10
            "
            v-model.trim="description"
            placeholder="Type here...  🤔"
          ></textarea>
        </div>
        <div
          class="
            fixed
            bottom-12
            md:bottom-18
            xl:bottom-28
            right-4
            md:right-20
            lg:right-40
            xl:right-1/4
            2xl:right-1/3
          "
        >
          <button class="w-12 h-12 rounded-full bg-orange-700 text-white">
            ✔
          </button>
        </div>
      </form>
    </keep-alive>
    <teleport to="body">
      <loader-blink v-if="isLoading"></loader-blink>
      <message-notification
        :message="message"
        v-if="message"
      ></message-notification>
      <success-show v-if="success"></success-show>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      title: "",
      isLoading: false,
      message: null,
      success: false,
    };
  },
  methods: {
    async postDiary() {
      try {
        if (this.title === "" || this.description === "") {
          setTimeout(() => {
            this.message = "Please fill in both field!";
          }, 2000);
          setTimeout(() => {
            this.message = null;
          }, 4000);

          return;
        } else {
          this.isLoading = true;
          const year = new Date().getFullYear();
          const month = new Date().getMonth() + 1;
          const day = new Date().getDate();
          const date = `${year}-0${month}-${day}`;
          await this.$store.dispatch("data/postDiary", {
            title: this.title,
            description: this.description,
            date: date,
            isFavourite: false,
          });
          this.isLoading = false;
          setTimeout(() => {
            this.success = true;
          }, 1000);
          setTimeout(() => {
            this.success = false;
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
      this.title = "";
      this.description = "";
    },
  },
};
</script>

<style scoped>
textarea::-webkit-scrollbar {
  display: none;
}
textarea {
  scrollbar-width: none;
}
button {
  box-shadow: 0 4px 16px rgba(167, 45, 26, 0.577);
}
</style>