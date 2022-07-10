<template>
  <div class="font-Poppins bg-orange-100 min-h-screen">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("autoLogin");
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input,
button {
  outline: none;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
