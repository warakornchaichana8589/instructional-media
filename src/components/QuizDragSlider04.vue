<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ประโยคและส่วนประกอบของประโยค
    </h1>
    <div
      class="p-20 pt-10 lg:p-10 flex flex-wrap justify-between items-center w-full max-w-[900px] my-auto"
    >
      <!-- ข้อ1 -->
      <div
        class="flex mt-1 gap-0 lg:gap-2 w-full flex-col justify-center items-center mx-auto"
      >
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ 1 :
          </h3>
          <draggable
            class="flex min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list16"
            group="people16"
            @change="log"
            itemKey="name"
            @update="updateList16"
          >
            <template #item="{ element }">
              <div
                class="rounded-full cursor-pointer hello text-[16px] lg:text-[24px]"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
        <div class="overflow-hidden w-full">
          <div
            class="grid grid-cols-7 gap-2 w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1"
          >
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center py-2 text-center"
            >
              ประธาน
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center py-2 text-center"
            >
              ขยายประธาน
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center py-2 text-center"
            >
              กริยา
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center py-2 text-center"
            >
            ขยายกริยา
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center py-2 text-center"
            >
              กรรม
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center py-2 text-center"
            >
            ขยายกรรม
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center py-2 text-center"
            >
              ชนิดของประโยค
            </div>
          </div>
          <draggable
            class="list-group grid grid-cols-7 bg-[#fff4e354] mt-2 pb-1 gap-2 w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
            :list="listStore2.answerList16"
            group="people16"
            @change="log"
            itemKey="name"
            @update="updateAnswerList16"
          >
            <template #item="{ element }">
              <div
                class="bg-[#FFF4E3] h-full text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <!-- ข้อ1 -->
       <!-- ข้อ2 -->
      <div
        class="flex mt-5 lg:mt-10 gap-0 lg:gap-2 w-full flex-col justify-center items-center mx-auto"
      >
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ 2 :
          </h3>
          <draggable
            class="flex min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list17"
            group="people17"
            @change="log"
            itemKey="name"
            @update="updateList17"
          >
            <template #item="{ element }">
              <div
                class="rounded-full cursor-pointer hello text-[16px] lg:text-[24px] text"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
        <div class="overflow-hidden w-full">
          <div
            class="grid grid-cols-7 gap-2 w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1"
          >
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center text-center py-2"
            >
              ประธาน
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center text-center py-2"
            >
              ขยายประธาน
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center text-center py-2"
            >
              กริยา
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center text-center py-2"
            >
            ขยายกริยา
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center text-center py-2"
            >
              กรรม
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center text-center py-2"
            >
            ขยายกรรม
            </div>
            <div
              class="w-full bg-[#FFD699] h-full leading-3 flex justify-center items-center text-center py-2"
            >
              ชนิดของประโยค
            </div>
          </div>
          <draggable
            class="list-group grid grid-cols-7 bg-[#fff4e354] mt-2 pb-1 gap-2 w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
            :list="listStore2.answerList17"
            group="people17"
            @change="log"
            itemKey="name"
            @update="updateAnswerList17"
          >
            <template #item="{ element }">
              <div
                class="bg-[#FFF4E3] h-full w-full  text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <!-- ข้อ1 -->
    </div>
  </div>
</template>
    
    <script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { useListStore02 } from "@/stores/listStroe02";
const listStore2 = useListStore02();

const updateList16 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList16([...listStore2.list16]);
  } else {
    listStore2.updateList16([...to]);
  }
};

const updateAnswerList16 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList16([...listStore2.answerList16]);
  } else {
    listStore2.updateAnswerList16([...to]);
  }
};

const updateList17 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList17([...listStore2.list17]);
  } else {
    listStore2.updateList17([...to]);
  }
};

const updateAnswerList17 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList17([...listStore2.answerList17]);
  } else {
    listStore2.updateAnswerList17([...to]);
  }
};
</script>
    
    <style lang="scss"  scoped>
.shadow-custom {
  box-shadow: 0px 0px 10px 0px #bebebe;
}
.shadow-custom:hover {
  box-shadow: 0px 0px 10px 0px #f8c077;
}
.hello:hover {
  color: #f8c077;
  text-shadow: 1px -1px 5px #cfcfcfde, -2px 4px 5px #c0c0c0d8,
    -3px 6px 5px #ffffff56;
}
</style>
    