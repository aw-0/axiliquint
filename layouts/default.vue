<template>
  <div id="👋">
    <Navbar />
    <nuxt />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
.btn-primary {
  @apply px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600
}
.btn-secondary {
  @apply px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-50
}
.magical-gradient {
    color:transparent;
    -webkit-background-clip:text;
    background-clip:text;
    background-image:linear-gradient(to right,var(--gradient-color-stops));
    --gradient-from-color: #00D7FF;
    --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color, rgba(90, 103, 216, 0));
    --gradient-via-color: #0091ff;
    --gradient-color-stops: var(--gradient-from-color), var(--gradient-via-color), var(--gradient-to-color, rgba(213, 63, 140, 0));
    --gradient-to-color: #005AFF
}
</style>
