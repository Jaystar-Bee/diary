<template>
  <main class="mx-auto w-full">
    <div>
      <login-form></login-form>
    </div>
  </main>
</template>


<script>
import LoginForm from "./../components/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>