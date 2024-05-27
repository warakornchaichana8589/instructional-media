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
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 1 :</h3>
          <span
            v-for="(item, index) in listStore.answerList1"
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
              :list="listStore.answerList1"
              group="people"
              @change="log"
              itemKey="name"
              @update="updateAnswerList1"
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
              :list="listStore.list1"
              group="people"
              @change="log"
              itemKey="name"
              @update="updateList1"
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
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 2 :</h3>
          <span
            v-for="(item, index) in listStore.answerList2"
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
              :list="listStore.answerList2"
              group="people2"
              @change="updateAnswerList2"
              itemKey="name"
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
              :list="listStore.list2"
              group="people2"
              @change="updateList2"
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
      </div>
      <!-- ข้อ2 -->
      <!-- ข้อ3 -->
      <div class="flex flex-col">
        <div class="flex">
          <h3 class="text-[18px] lg:text-[30px]">ข้อที่ 3 :</h3>
          <span
            v-for="(item, index) in listStore.answerList3"
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
              :list="listStore.answerList3"
              group="people3"
              @change="updateAnswerList3"
              itemKey="name"
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
              :list="listStore.list3"
              group="people3"
              @change="updateList3"
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

const updateList1 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore.updateList1([...listStore.list1]);
  } else {
    listStore.updateList1([...to]);
  }
};

const updateAnswerList1 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore.updateAnswerList1([...listStore.answerList1]);
  } else {
    listStore.updateAnswerList1([...to]);
  }
};
const updateList2 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore.updateList2([...listStore.list2]);
  } else {
    listStore.updateList2([...to]);
  }
};

const updateAnswerList2 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore.updateAnswerList2([...listStore.answerList2]);
  } else {
    listStore.updateAnswerList2([...to]);
  }
};
const updateList3 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore.updateList3([...listStore.list3]);
  } else {
    listStore.updateList3([...to]);
  }
};

const updateAnswerList3 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore.updateAnswerList3([...listStore.answerList3]);
  } else {
    listStore.updateAnswerList3([...to]);
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
  