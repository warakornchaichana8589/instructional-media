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
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 7 : </h3>
          <span v-for="(item, index) in answerList7" :key="index" class="text-[18px] lg:text-[30px]">
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full" >
          <div class="flex justify-center items-center gap-2 h-full w-full">
           
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full  max-w-full p-1"
              :list="answerList7"
              group="people7"
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
              :list="list7"
              group="people7"
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

        <rawDisplayer class="" :value="list7" title="List 7" />
        <rawDisplayer class="" :value="answerList7" title="answerList7" />
      </div>
      <!-- ข้อ1 -->

      <!-- ข้อ2 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 8 : </h3>
          <span v-for="(item, index) in answerList8" :key="index" class="text-[18px] lg:text-[30px]">
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full" >
          <div class="flex justify-center items-center gap-2 h-full w-full">
           
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full  max-w-full p-1"
              :list="answerList8"
              group="people8"
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
              :list="list8"
              group="people8"
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

        <rawDisplayer class="" :value="list8" title="List 8" />
        <rawDisplayer class="" :value="answerList8" title="answerList8" />
      </div>
      <!-- ข้อ2 -->

      <!-- ข้อ3 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 9 : </h3>
          <span v-for="(item, index) in answerList9" :key="index" class="text-[18px] lg:text-[30px]">
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full" >
          <div class="flex justify-center items-center gap-2 h-full w-full">
           
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full  max-w-full p-1"
              :list="answerList9"
              group="people9"
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
              :list="list9"
              group="people9"
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

        <rawDisplayer class="" :value="list9" title="List 9" />
        <rawDisplayer class="" :value="answerList9" title="answerList9" />
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

const list7 = ref([
  { name: "ไฟ", id: 3 },
  { name: "ก่อ", id: 2 },
  { name: "พ่อ", id: 1 },
]);
const answerList7 = ref([]);

const list8 = ref([
  { name: "มี", id: 2 },
  { name: "มะละกอ", id: 3 },
  { name: "อา", id: 1 },
]);
const answerList8 = ref([]);

const list9 = ref([
  { name: "ท่อน้ำ", id: 3 },
  { name: "ทำ", id: 2 },
  { name: "น้า", id: 1 },
]);
const answerList9 = ref([]);

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
  