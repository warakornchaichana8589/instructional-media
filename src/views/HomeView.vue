<template>
  <div>
    <Layout bgImage="bg-form.png">
      <div
        class="w-full h-full flex justify-center items-center flex-col zoomIn"
      >
        <h1 class="text-[#FFA218] text-[30px] md:text-[50px] lg:text-[80px] mt-auto">
          กรอก ชื่อ-นามสกุล
        </h1>
        <h3 class="text-[#FFA218] text-[20px] md:text-[30px] lg:text-[35px]">
         สวัสดี : {{ inputStore.inputNameValue }}
        </h3>
        <div class="flex justify-center items-center flex-col gap-5 md:gap-10">
          <div class="w-[200px] md:w-[300px] max-w-full">
            <InputSound />
          </div>
          <RouterLink to="/advice" class=" relative z-10">
  
            <button type="button"
            class="cursor-pointer flex justify-center items-center w-auto bg-[#F7BB66] custom-radius font-[500] text-center text-[20px] lg:text-[32px] shadow-lg hover:shadow-xl disabled:shadow-none"
            :class="inputStore.inputNameValue === '' ? 'px-5 py-2 lg:px-8 lg:py-2' : 'px-8 py-2 lg:px-7 lg:py-2'"
            :disabled="inputStore.inputNameValue === ''"
            >
            {{ inputStore.inputNameValue === '' ? 'ลงทะเบียน' : 'ลงทะเบียน' }}
          </button>
          </RouterLink>
        </div>
        <div class="box-btn mt-auto mb-2 md:mb-5">
          <ButtonGo
            text="ย้อนกลับ"
            classCustomFont="text-[14px] lg:text-[40px] leading-none"
            @click="goBack"
          />
        </div>
      </div>
    </Layout>
  </div>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
import InputSound from "@/components/InputSound.vue";
import { useDataStore } from "@/stores/dataStore";
import ButtonGo from "@/components/ButtonGo.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const inputStore = useDataStore();


const goBack = ()=>{
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
}
</script>

<style>
.custom-radius {
  border-radius: 35px;
}
button:disabled{
  background: #DDDDDD !important;
}
</style>