<template>
  <div id="hi there inspect-elementer" class="mx-8">
    <div class="w-full mx-auto text-left mt-10">
      <h1 class="text-4xl text-white font-extrabold">👋 Hi there, nice to meet you.</h1>
      <h2 class="text-3xl text-white font-semibold mt-4">I'm axiliquint, a <span class="font-extrabold magical-gradient">Full-Stack Developer and Video Editor</span>.</h2>
    </div>
    <div class="mb-4">
      <div class="h-px magical-bg mt-10"></div>
    </div>
    <div class="w-full mx-auto pb-2">
      <h1 class="text-2xl text-center text-white font-semibold">Tech</h1>
      <div class="md:flex items-center justify-center">
        <div class="mx-4 mt-4 bg-primary rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
            <p class="text-center"><i class="fab fa-vuejs text-white my-2 text-8xl"></i></p>
            <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">VueJS</h1>
            <p class="px-2 pt-2 text-white text-center m-auto">VueJS is my web framework of choice</p>
        </div>
        <div class="mx-4 mt-4 bg-primary rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
            <p class="text-center"><i class="fab fa-python text-white my-2 text-8xl"></i></p>
            <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">Python</h1>
            <p class="px-2 pt-2 text-white text-center m-auto">Fast and easy to write, Python is my favorite language</p>
        </div>
        <div class="mx-4 mt-4 bg-primary rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
            <p class="mx-auto"><img src="@/assets/firebase.svg" width="250px" height="100px" class="mx-auto object-fill" /></p>
            <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">Firebase</h1>
            <p class="px-2 pt-2 text-white text-center m-auto">The best PaaS and DBaaS, Firebase</p>
        </div>
        <div class="mx-4 mt-4 bg-primary rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
            <p class="text-center"><i class="fas fa-film text-white my-2 text-8xl"></i></p>
            <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">Final Cut Pro X</h1>
            <p class="px-2 pt-2 text-white text-center m-auto">Robust and powerful, Final Cut Pro X is the video editor I use</p>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <div class="h-px magical-bg mt-7"></div>
    </div>
    <div class="w-full mx-auto pb-2">
      <h1 class="text-2xl text-center text-white font-semibold">Trusted by 1,000,000+, built by 1</h1>
      <div class="sm:flex items-center justify-center">
        <a href="https://www.roblox.com/groups/3955051/Foxzies-Productions#!/about" target="_blank" class="sm:mx-auto lg:mx-4"><img src="@/assets/clients/foxzie.png" width="200px" height="150px" class="mt-4 px-4 py-2 mx-auto" /></a>
        <a href="https://koal.us" target="_blank" class="sm:mx-auto lg:mx-4"><img src="@/assets/clients/koal.svg" width="200px" height="150px" class="svg-white mt-4 px-4 py-2 mx-auto" /></a>
      </div>
    </div>
    <div class="mb-4">
      <div class="h-px magical-bg mt-5"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.bg-primary {
  background-color: #35C1EE;
}
.svg-white {
  filter: invert(92%) sepia(1%) saturate(4775%) hue-rotate(302deg) brightness(126%) contrast(99%);
}
.magical-gradient {
    color:transparent;
    -webkit-background-clip:text;
    background-clip:text;
    background-image:linear-gradient(to right,var(--gradient-color-stops));
    --gradient-from-color: #00D1F7;
    --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color, rgba(90, 103, 216, 0));
    --gradient-via-color: #0091ff;
    --gradient-color-stops: var(--gradient-from-color), var(--gradient-via-color), var(--gradient-to-color, rgba(213, 63, 140, 0));
    --gradient-to-color: #438DFC
}
.magical-bg {
  background-image: linear-gradient(94.75deg, #00D1F7 0%,#0091ff 100%);
}
</style>
