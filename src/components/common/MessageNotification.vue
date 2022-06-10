<template>
  <div class="flash absolute max-w-sm">
    <p class="px-4 py-2 rounded-md shadow-md bg-white font-semibold">
      {{ message }}
    </p>
  </div>
</template>
<script>
export default {
  props: ["message"],
};
</script>

<style scoped>
.flash {
  bottom: 10rem;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: flash 2s ease-out;
  backface-visibility: hidden;
}
@keyframes flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>