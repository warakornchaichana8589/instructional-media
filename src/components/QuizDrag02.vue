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
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ ๔ :</h3>
          <span
            v-for="(item, index) in listStore.answerList4"
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
              :list="listStore.answerList4"
              group="people4"
              @change="log"
              itemKey="name"
              @update="updateAnswerList4"
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
              :list="listStore.list4"
              group="people4"
              @change="log"
              itemKey="name"
              @update="updateList4"
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
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ ๕ :</h3>
          <span
            v-for="(item, index) in listStore.answerList5"
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
              :list="listStore.answerList5"
              group="people5"
              @change="log"
              itemKey="name"
              @update="updateAnswerList5"
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
              :list="listStore.list5"
              group="people5"
              @change="log"
              itemKey="name"
              @update="updateList5"
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
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ ๖ :</h3>
          <span
            v-for="(item, index) in listStore.answerList6"
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
              :list="listStore.answerList6"
              group="people6"
              @change="log"
              itemKey="name"
              @update="updateAnswerList6"
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
              :list="listStore.list6"
              group="people6"
              @change="log"
              itemKey="name"
              @update="updateList6"
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

import draggable from "vuedraggable";
import { useListStore } from "@/stores/listStore";

const listStore = useListStore();

const updateList4 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateList4([...listStore.list4]);
      } else {
        listStore.updateList4([...to]);
      }
};

const updateAnswerList4 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateAnswerList4([...listStore.answerList4]);
      } else {
        listStore.updateAnswerList4([...to]);
      }
};
const updateList5 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateList5([...listStore.list5]);
      } else {
        listStore.updateList5([...to]);
      }
};

const updateAnswerList5 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateAnswerList5([...listStore.answerList5]);
      } else {
        listStore.updateAnswerList5([...to]);
      }
};
const updateList6 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateList6([...listStore.list6]);
      } else {
        listStore.updateList6([...to]);
      }
};

const updateAnswerList6 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
        listStore.updateAnswerList6([...listStore.answerList6]);
      } else {
        listStore.updateAnswerList6([...to]);
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
  