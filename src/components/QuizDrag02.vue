<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเรียงประโยค
    </h1>

    <div class="p-20 pt-10 lg:p-10 h-full flex flex-col justify-center gap-1 lg:gap-5 w-full max-w-[767px]">
      <!-- ข้อ1 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 4 : </h3>
          <span v-for="(item, index) in answerList4" :key="index" class="text-[18px] lg:text-[30px]">
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full" >
          <div class="flex justify-center items-center gap-2 h-full w-full">
           
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full  max-w-full p-1"
              :list="answerList4"
              group="people4"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button rounded-full">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed w-full h-full min-h-full max-w-full p-1"
              :list="list4"
              group="people4"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

         
        </div>

        <rawDisplayer class="" :value="list4" title="List 4" />
        <rawDisplayer class="" :value="answerList4" title="answerList4" />
      </div>
      <!-- ข้อ1 -->

      <!-- ข้อ2 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 5 : </h3>
          <span v-for="(item, index) in answerList5" :key="index" class="text-[18px] lg:text-[30px]">
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full" >
          <div class="flex justify-center items-center gap-2 h-full w-full">
           
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full  max-w-full p-1"
              :list="answerList5"
              group="people5"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button rounded-full">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed w-full h-full min-h-full max-w-full p-1"
              :list="list5"
              group="people5"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

         
        </div>

        <rawDisplayer class="" :value="list5" title="List 5" />
        <rawDisplayer class="" :value="answerList5" title="answerList5" />
      </div>
      <!-- ข้อ2 -->

      <!-- ข้อ3 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 6 : </h3>
          <span v-for="(item, index) in answerList6" :key="index" class="text-[18px] lg:text-[30px]">
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full" >
          <div class="flex justify-center items-center gap-2 h-full w-full">
           
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full  max-w-full p-1"
              :list="answerList6"
              group="people6"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button rounded-full">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed w-full h-full min-h-full max-w-full p-1"
              :list="list6"
              group="people6"
              @change="log"
              itemKey="name"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

         
        </div>

        <rawDisplayer class="" :value="list6" title="List 6" />
        <rawDisplayer class="" :value="answerList6" title="answerList6" />
      </div>
      <!-- ข้อ3 -->

      <!-- ข้อ4 -->
      <!-- ข้อ4 -->
    </div>

    
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const list4 = ref([
  { name: "ตะเพิด", id: 2 },
  { name: "แม่ไก่", id: 3 },
  { name: "อา", id: 1 },
]);
const answerList4 = ref([]);

const list5 = ref([
  { name: "ทุ่งนา", id: 3 },
  { name: "เดินไป", id: 2 },
  { name: "เดชา", id: 1 },
]);
const answerList5 = ref([]);

const list6 = ref([
  { name: "งอ'", id: 2 },
  { name: "ขา", id: 3 },
  { name: "แม่", id: 1 },
]);
const answerList6 = ref([]);

const log = (evt) => {
  window.console.log(evt);
};
</script>
  
<style scoped>

/* inspired form gumroad website */
.button {
  --bg: #fec76ef3;
  --hover-bg: #add769;
  --hover-text: #000;
  color: #020202;
  cursor: pointer;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.5em 1em;
  background: var(--bg);
  transition: 0.2s;
}

.button:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem, -0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bg);
}

.button:active {
  transform: translate(0);
  box-shadow: none;
}
</style>
  