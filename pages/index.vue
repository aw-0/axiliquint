<template>
  <div id="hi there inspect-elementer">
    <div class="px-8">
      <div class="w-full mx-auto text-left mt-10">
        <h1 class="text-4xl text-white font-extrabold">👋 Hi there, nice to meet you.</h1>
        <h2 class="text-3xl text-white font-semibold mt-4">I'm axiliquint, a <span class="font-extrabold magical-gradient">Full-Stack Developer and Video Editor</span>.</h2>
      </div>
      <MagicalBar class="mb-4" />
      <div class="w-full mx-auto pb-2">
        <h1 class="text-2xl text-center text-white font-semibold">My Tools</h1>
        <div class="md:flex items-center justify-center">
          <div class="mx-4 mt-4 bg-blue-500 rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
              <a href="https://v3.vuejs.org" target="_blank"><p class="text-center"><i class="fab fa-vuejs text-white my-2 text-8xl"></i></p></a>
              <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">VueJS</h1>
              <p class="px-2 pt-2 text-white text-center m-auto">VueJS is my web framework of choice</p>
          </div>
          <div class="mx-4 mt-4 bg-blue-500 rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
              <a href="https://python.org" target="_blank"><p class="text-center"><i class="fab fa-python text-white my-2 text-8xl"></i></p></a>
              <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">Python</h1>
              <p class="px-2 pt-2 text-white text-center m-auto">Fast and easy to write, Python is my favorite language</p>
          </div>
          <div class="mx-4 mt-4 bg-blue-500 rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
              <a href="https://firebase.google.com" target="_blank"><p class="mx-auto"><img src="@/assets/images/firebase.svg" width="250px" height="100px" class="mx-auto object-fill" /></p></a>
              <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">Firebase</h1>
              <p class="px-2 pt-2 text-white text-center m-auto">The best PaaS and DBaaS, Firebase</p>
          </div>
          <div class="mx-4 mt-4 bg-blue-500 rounded sm:rounded-xl shadow hover:shadow-xl focus:outline-none px-4 py-2">
              <a href="https://www.apple.com/final-cut-pro/" target="_blank"><p class="text-center"><i class="fas fa-film text-white my-2 text-8xl"></i></p></a>
              <h1 class="px-2 pt-2 font-semibold text-white text-center m-auto">Final Cut Pro X</h1>
              <p class="px-2 pt-2 text-white text-center m-auto">Robust and powerful, Final Cut Pro X is the video editor I use</p>
          </div>
        </div>
      </div>
      <MagicalBar class="mb-4" />
      <div class="w-full mx-auto">
        <h1 class="text-2xl text-center text-white font-semibold">Trusted by 1,000,000+</h1>
        <div class="sm:flex items-center justify-center">
          <a href="https://www.roblox.com/groups/3955051/Foxzies-Productions#!/about" target="_blank" class="sm:mx-auto lg:mx-4"><img src="@/assets/clients/foxzie.png" width="200px" height="150px" class="mt-4 px-4 py-2 mx-auto text-white" alt="Foxzie's Productions"/></a>
          <a href="https://koal.us" target="_blank" class="sm:mx-auto lg:mx-4"><img src="@/assets/clients/koal.svg" width="200px" height="150px" class="svg-white mt-4 px-4 py-2 mx-auto text-white" alt="Koal"/></a>
        </div>
      </div>
      <MagicalBar class="mb-4" />
      <div class="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span class="block">Interested?</span>
          <span class="block magical-gradient">Let's talk!</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a href="/contact" class="inline-flex items-center justify-center btn-primary">
              Contact
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="/clients" class="inline-flex items-center justify-center btn-secondary">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <FooterWave />
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
.text-primary {
  color: #35C1EE
}
</style>
