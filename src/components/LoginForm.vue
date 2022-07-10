<template>
  <div class="max-w-xl mx-auto bg-white rounded-xl py-14 text-lg">
    <div class="text-center mb-16">
      <h2 class="text-xl font-bold">Sign in/Sign up</h2>
    </div>
    <div class="container mx-auto">
      <h4 class="text-center mb-6">Sign in with google</h4>
      <div class="mx">
        <div
          class="
            mx-auto
            flex
            bg-gray-600
            text-white
            items-center
            justify-center
            w-48
            p-3
            cursor-pointer
            rounded-sm
          "
          @click="signIn"
        >
          <img src="./../assets/img/google.png" class="w-10" />&nbsp; | &nbsp;
          <p>Sign in</p>
        </div>
      </div>
    </div>
    <teleport to="body">
      <message-notification v-if="message" :message="message">
      </message-notification>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    };
  },
  methods: {
    async signIn() {
      try {
        await this.$store.dispatch("signIn");
      } catch (error) {
        console.log(error);
        this.message = error.message;
      }
    },
  },
};
</script>