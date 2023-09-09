<template>
  <header class="w-full text-sm">
    <div class="bg-white fixed left-0 top-0 h-16 w-full">
      <div
        class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a href="/" class="flex h-full items-center text-xl">{{ title }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      title: "Zef Design",
    };
  },
};
</script>
