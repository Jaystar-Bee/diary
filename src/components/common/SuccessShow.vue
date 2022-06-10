<template>
  <div
    class="fixed h-full top-0 w-full bg-black bg-opacity-50 backdrop-blur-lg"
  ></div>
  <div
    class="
      flex
      items-center
      flex-col
      justify-center
      bg-white
      rounded-md
      px-10
      space-x-2
      absolute
      top-1/2
      left-1/2
    "
  >
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        class="path circle"
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        class="path check"
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </svg>
    <p class="success">Post Added 😎</p>
  </div>
</template>

<style lang="scss" scoped>
svg {
  width: 100px;
  display: block;
  margin: 40px auto 0;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  &.circle {
    -webkit-animation: dash 0.9s ease-in-out;
    animation: dash 0.9s ease-in-out;
  }
  &.line {
    stroke-dashoffset: 1000;
    -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
    animation: dash 0.9s 0.35s ease-in-out forwards;
  }
  &.check {
    stroke-dashoffset: -100;
    -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
    animation: dash-check 0.9s 0.35s ease-in-out forwards;
  }
}

p {
  text-align: center;
  display: block;
  margin: 20px 0 60px;
  font-size: 1.25em;
  &.success {
    color: #73af55;
  }
  &.error {
    color: #d06079;
  }
}

@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}

@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
</style>