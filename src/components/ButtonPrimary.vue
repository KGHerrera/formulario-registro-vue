<script setup>
defineProps({
  btnText: String,
})
</script>

<template>
  <button data-ripple-light="true"
    class="mt-6 block w-full select-none rounded-lg bg-yellow-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button">
    {{ btnText }}
  </button>
</template>