<template>
  <div
    class="fixed h-full top-0 w-full bg-black bg-opacity-50 backdrop-blur-lg"
  ></div>
  <div
    class="flex items-center justify-center space-x-2 absolute top-1/2 left-1/2"
  >
    <div
      class="
        spinner-grow
        inline-block
        w-12
        h-12
        md:w-20 md:h-20
        bg-orange-900
        rounded-full
      "
      role="status"
    >
      <span class="visually-hidden"></span>
    </div>
  </div>
</template>

<style scoped>
.spinner-grow {
  animation: blink 0.8s infinite;
}
@keyframes blink {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
</style>