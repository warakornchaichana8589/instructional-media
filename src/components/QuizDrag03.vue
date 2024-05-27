<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเรียงประโยค
    </h1>

    <div
      class="p-20 pt-10 lg:p-10 h-full flex flex-col justify-center gap-1 lg:gap-5 w-full max-w-[767px]"
    >
      <!-- ข้อ1 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 7 :</h3>
          <span
            v-for="(item, index) in listStore.answerList7"
            :key="index"
            class="text-[18px] lg:text-[30px]"
          >
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full">
          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full max-w-full p-1"
              :list="listStore.answerList7"
              group="people7"
              @change="log"
              itemKey="name"
              @update="updateAnswerList7"
            >
              <template #item="{ element }">
                <div
                  class="list-group-item text-[16px] lg:text-[18px] button rounded-full"
                >
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed w-full h-full min-h-full max-w-full p-1"
              :list="listStore.list7"
              group="people7"
              @change="log"
              itemKey="name"
              @update="updateList7"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
      <!-- ข้อ1 -->

      <!-- ข้อ2 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 8 :</h3>
          <span
            v-for="(item, index) in listStore.answerList8"
            :key="index"
            class="text-[18px] lg:text-[30px]"
          >
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full">
          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full max-w-full p-1"
              :list="listStore.answerList8"
              group="people8"
              @change="log"
              itemKey="name"
              @update="updateAnswerList8"
            >
              <template #item="{ element }">
                <div
                  class="list-group-item text-[16px] lg:text-[18px] button rounded-full"
                >
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed w-full h-full min-h-full max-w-full p-1"
              :list="listStore.list8"
              group="people8"
              @change="log"
              itemKey="name"
              @update="updateList8"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>
        </div>

      
      </div>
      <!-- ข้อ2 -->
      <!-- ข้อ3 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 9 :</h3>
          <span
            v-for="(item, index) in listStore.answerList9"
            :key="index"
            class="text-[18px] lg:text-[30px]"
          >
            {{ item.name }}
          </span>
        </div>
        <div class="flex gap-5 w-full">
          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed h-full w-full min-h-full max-w-full p-1"
              :list="listStore.answerList9"
              group="people9"
              @change="log"
              itemKey="name"
              @update="updateAnswerList9"
            >
              <template #item="{ element }">
                <div
                  class="list-group-item text-[16px] lg:text-[18px] button rounded-full"
                >
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

          <div class="flex justify-center items-center gap-2 h-full w-full">
            <draggable
              class="list-group flex gap-2 border-2 border-dashed w-full h-full min-h-full max-w-full p-1"
              :list="listStore.list9"
              group="people9"
              @change="log"
              itemKey="name"
              @update="updateList9"
            >
              <template #item="{ element }">
                <div class="list-group-item text-[16px] lg:text-[18px] button">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
      <!-- ข้อ3 -->
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { useListStore } from "@/stores/listStore";
const listStore = useListStore();


const updateList7 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateList7([...listStore.list7]);
      } else {
        listStore.updateList7([...to]);
      }
};

const updateAnswerList7 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateAnswerList7([...listStore.answerList7]);
      } else {
        listStore.updateAnswerList7([...to]);
      }
};
const updateList8 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateList8([...listStore.list8]);
      } else {
        listStore.updateList8([...to]);
      }
};

const updateAnswerList8 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateAnswerList8([...listStore.answerList8]);
      } else {
        listStore.updateAnswerList8([...to]);
      }
};
const updateList9 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateList9([...listStore.list9]);
      } else {
        listStore.updateList9([...to]);
      }
};

const updateAnswerList9 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateAnswerList9([...listStore.answerList9]);
      } else {
        listStore.updateAnswerList9([...to]);
      }
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
  