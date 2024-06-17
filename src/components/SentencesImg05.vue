<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนแต่งประโยคจากภาพ
    </h1>
    <div class="w-full h-full flex justify-center items-center">
      <div
        class="w-full h-auto max-w-[600px] flex flex-col gap-[12px] lg:gap-[24px]"
      >
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] min-w-[40px] flex justify-center items-center leading-none text-black"
            >
              ๑
            </div>
            <img :src="image97" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div class="flex gap-3">
              <div>
                <p>ใคร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz01.word1"
                  />
                </div>
              </div>
              <div>
                <p>ทำอะไร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz01.word2"
                  />
                </div>
              </div>
              <div>
                <p>ประโยค</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz01.sentence"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] min-w-[40px] flex justify-center items-center leading-none text-black"
            >
              ๒
            </div>
            <img :src="image98" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div class="flex gap-3">
              <div>
                <p>ใคร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz02.word1"
                  />
                </div>
              </div>
              <div>
                <p>ทำอะไร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz02.word2"
                  />
                </div>
              </div>
              <div>
                <p>ประโยค</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz02.sentence"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center lg:justify-start items-center w-full">
            <div
              class="rounded-full bg-gray-200 text-[20px] lg:text-[28px] w-[40px] h-[40px] min-w-[40px] flex justify-center items-center leading-none text-black"
            >
              ๓
            </div>
            <img :src="image99" alt="" class="max-w-[70px] lg:max-w-[120px]" />
            <div class="flex gap-3">
              <div>
                <p>ใคร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz03.word1"
                  />
                </div>
              </div>
              <div>
                <p>ทำอะไร</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz03.word2"
                  />
                </div>
              </div>
              <div>
                <p>ประโยค</p>
                <div
                  class="rounded-full px-3 pt-1 pb-1 bg-[#FBFCD2] overflow-hidden max-w-[200px] lg:max-w-[250px]"
                >
                  <input
                    type="text"
                    class="bg-transparent border-dotted border-b-4 border-[#797977] outline-none py-1"
                    v-model="useCheck.SentencesImg05.Quiz03.sentence"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script setup>
import image97 from "../assets/images/97.png";
import image98 from "../assets/images/98.png";
import image99 from "../assets/images/99.png";


import { useCheckStore } from "@/stores/checkStore";
const useCheck = useCheckStore();
import { ref } from "vue";



</script>
    
    <style lang="scss" scoped>
</style>