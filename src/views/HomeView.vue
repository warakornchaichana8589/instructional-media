<template>
  <div>
    <Layout bgImage="2.png">
      <div class="w-full h-full flex justify-center items-center flex-col zoomIn">
        <h1 class="text-[#FFA218] text-[30px] md:text-[80px]">กรอก ชื่อ-นามสกุล</h1>
        <div class="w-[200px] md:w-[300px] max-w-full">
          <InputSound />
        </div>
        <RouterLink to="/" class="w-auto px-5 py-2 md:px-10 md:py-5 bg-[#F7BB66] rounded-full font-bold text-center text-[18px] md:text-[32px] shadow-lg hover:shadow-xl">
          ลงทะเบียน
        </RouterLink>
        {{ inputStore.inputNameValue }}
      </div>
      
    </Layout>
  </div>
</template>

<script setup>
import Layout from '@/components/Layout.vue';
import InputSound from '@/components/InputSound.vue';
import { useDataStore } from "@/stores/dataStore";

const inputStore = useDataStore()
</script>

<style scoped>

</style>