<template>
  <div class="max-w-xl container mx-auto pt-10">
    <div class="flex justify-between items-center px-2 mb-10">
      <div>
        <router-link to="/main">
          <img src="./../assets/img/homes.png" alt="" class="h-6 xs:h-8" />
        </router-link>
      </div>
      <div class="flex items-center space-x-6 xs:space-x-8">
        <img
          src="./../assets/img/icons8-pen-96.png"
          alt=""
          class="h-6 xs:h-8"
          @click="changeEdit"
        />
        <img
          src="./../assets/img/trash.png"
          alt=""
          class="h-6 xs:h-8"
          @click="deleteDiary"
        />
        <div>
          <img
            src="./../assets/img/bookmarks.png"
            alt=""
            class="h-6 xs:h-8"
            @click="toggleFavourite"
            v-if="favStatus"
          />
          <img
            src="./../assets/img/bookmarks_empty.png"
            class="h-6 xs:h-8"
            @click="toggleFavourite"
            v-else
          />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl w-full">
      <div class="border-b-2 border-gray-300 flex justify-between items-center">
        <p class="px-4 py-6">{{ date }}</p>
        <img
          src="./../assets/img/favorites.png"
          alt=""
          class="w-6 mr-10 yellow"
          v-if="favStatus"
        />
      </div>
      <form class="mt-6" @submit.prevent="editDiary">
        <div>
          <input
            type="text"
            class="
              font-bold
              text-xl
              p-4
              text-gray-700
              outline-none
              disabled:bg-inherit
            "
            v-model="title"
            :disabled="!editDetail"
          />
        </div>
        <textarea
          v-model="description"
          class="w-full h-70v px-4 mt-6 outline-none bg-transparent resize-none"
          :disabled="!editDetail"
          :autofocus="editDetail"
        ></textarea>
        <div class="flex justify-center duration-300" v-if="editDetail">
          <button class="px-6 py-2 bg-orange-700 text-white rounded-md mb-4">
            edit
          </button>
        </div>
      </form>
    </div>
    <teleport to="body">
      <message-notification
        v-if="message"
        :message="message"
      ></message-notification>
    </teleport>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      date: "",
      favStatus: null,
      editDetail: false,
      message: null,
    };
  },
  methods: {
    changeEdit() {
      this.editDetail = !this.editDetail;
    },
    async toggleFavourite() {
      let favStatus = !this.favStatus;
      await this.$store.dispatch("data/toggleFavourite", {
        favStatus,
        id: this.$route.params.id,
      });
      setTimeout(() => {
        this.message = "Favourite changed successfully!!";
      }, 2000);
      setTimeout(() => {
        this.message = null;
      }, 4000);
      this.getDetail();
    },
    async deleteDiary() {
      const id = this.$route.params.id;
      const canDelete = confirm("Are you sure about this delete action?");
      if (canDelete) {
        try {
          await this.$store.dispatch("data/deleteDetail", { id });
          this.$router.replace("/main");
        } catch (error) {
          console.log(error);
        }
      }
    },
    async editDiary() {
      const id = this.$route.params.id;
      try {
        await this.$store.dispatch("data/editDetail", {
          id,
          title: this.title,
          description: this.description,
        });
        setTimeout(() => {
          this.message = "Diary Edited!";
        }, 2000);
        setTimeout(() => {
          this.message = null;
        }, 4000);
      } catch (error) {
        console.log(error);
      }
      this.editDetail = false;
    },
    async getDetail() {
      const id = this.$route.params.id;
      const userId = this.$store.getters["userId"];
      const token = this.$store.getters["token"];
      const response = await this.axios.get(
        `https://diary-a00aa-default-rtdb.firebaseio.com/diary/${userId}/${id}.json?auth=${token}`
      );

      this.description = response.data.description;
      this.title = response.data.title;
      this.favStatus = response.data.isFavourite;
      this.date = response.data.date;
    },
  },
  async created() {
    this.getDetail();
  },
};
</script>

<style scoped>
.yellow {
  filter: invert(80%) saturate(1000%) hue-rotate(0deg) sepia();
}
</style>