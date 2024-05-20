<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      คำชี้แจง : จงแต่ประโดยต่อไปนี้ให้ได้ใจความที่สมบรูรณ์
    </h1>
    <div class="w-full h-full grid grid-cols-2">
      <div class="flex flex-col justify-start items-center">
        <img :src="image01" alt="">
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import image01 from '../assets/images/01.jfif'

</script>

<style lang="scss" scoped>
</style>