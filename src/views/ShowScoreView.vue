<template>
    <div>
       <Layout bgImage="score.png" class="fadeIn">
         <div class="flex w-full h-full sm:p-[20px] p-1 relative flex-col justify-center items-center">
          

          <div class="flex flex-col h-full py-[10%] my-auto justify-around">
            <h1 class="text-[#FFA218] text-[30px] md:text-[50px] lg:text-[80px]">สรุปผลการสอบ</h1>
            <p class="flex justify-start items-end text-[20px] md:text-[30px] lg:text-[40px] leading-none">ผู้เรียน<span class="border-dotted border-b-4 border-[#313131] min-w-[50%]">: {{ inputNameValue }}</span></p>
            <p class="text-[30px] md:text-[50px] lg:text-[80px]">
              คะแนน : {{ answerStore.score }}/10
            </p>
          </div>
         </div>
         
       </Layout>
    </div>
   </template>
   
   <script setup>
   import Layout from '@/components/Layout.vue';
   import {useDataStore} from '../stores/dataStore';
   import { useAnswerStore } from "@/stores/answerStore";
   import { onMounted } from 'vue';
   const { inputNameValue } = useDataStore();
   const answerStore = useAnswerStore();
   onMounted(()=>{
    answerStore.checkAnswer()
   })
   
   </script>
   
   <style scoped>
   
   </style>