<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนเรียงประโยคให้ถูกต้อง
    </h1>
    <div
      class="p-20 pt-10 lg:p-10 flex flex-wrap justify-between items-center w-full max-w-[900px] my-auto"
    >
      <!-- ข้อ1 -->
      <div class="flex mt-1 gap-0 lg:gap-2 w-[48%] flex-col justify-center items-center mx-auto">
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ ๖ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list6"
            group="people6"
            @change="log"
            itemKey="name"
            @update="updateList6"
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
        <div
          class="pb-2 bg-[#FFF5DC] rounded-full overflow-hidden px-3 w-full shadow-custom"
        >
          <draggable
            class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
            :list="listStore2.answerList6"
            group="people6"
            @change="log"
            itemKey="name"
            @update="updateAnswerList6"
          >
            <template #item="{ element }">
              <div
                class="text-[16px] lg:text-[18px] flex items-center cursor-pointer hello leading-3"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <!-- ข้อ1 -->
      <!-- ข้อ2 -->
      <div class="flex mt-1  gap-0 lg:gap-2 w-[48%] flex-col justify-center items-center mx-auto">
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ ๗ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list7"
            group="people7"
            @change="log"
            itemKey="name"
            @update="updateList7"
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
        <div
          class="pb-2 bg-[#FFF5DC] rounded-full overflow-hidden px-3 w-full shadow-custom"
        >
          <draggable
            class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
            :list="listStore2.answerList7"
            group="people7"
            @change="log"
            itemKey="name"
            @update="updateAnswerList7"
          >
            <template #item="{ element }">
              <div
                class="text-[16px] lg:text-[18px] flex items-center cursor-pointer hello leading-3"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <!-- ข้อ2 -->
      <!-- ข้อ3 -->
      <div class="flex mt-1  gap-0 lg:gap-2 w-[48%] flex-col justify-center items-center mx-auto">
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ ๘ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list8"
            group="people8"
            @change="log"
            itemKey="name"
            @update="updateList8"
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
        <div
          class="pb-2 bg-[#FFF5DC] rounded-full overflow-hidden px-3 w-full shadow-custom"
        >
          <draggable
            class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
            :list="listStore2.answerList8"
            group="people8"
            @change="log"
            itemKey="name"
            @update="updateAnswerList8"
          >
            <template #item="{ element }">
              <div
                class="text-[16px] lg:text-[18px] flex items-center cursor-pointer hello leading-3"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <!-- ข้อ3 -->

      <!-- ข้อ4 -->
      <div class="flex mt-1  gap-0 lg:gap-2 w-[48%] flex-col justify-center items-center mx-auto">
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ ๙ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list9"
            group="people9"
            @change="log"
            itemKey="name"
            @update="updateList9"
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
        <div
          class="pb-2 bg-[#FFF5DC] rounded-full overflow-hidden px-3 w-full shadow-custom"
        >
          <draggable
            class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
            :list="listStore2.answerList9"
            group="people9"
            @change="log"
            itemKey="name"
            @update="updateAnswerList9"
          >
            <template #item="{ element }">
              <div
                class="text-[16px] lg:text-[18px] flex items-center cursor-pointer hello leading-3"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <!-- ข้อ4 -->
      <!-- ข้อ5 -->
      <div class="flex mt-1  gap-0 lg:gap-2 w-[48%] flex-col justify-center items-center mx-auto">
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ ๑๐ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list10"
            group="people10"
            @change="log"
            itemKey="name"
            @update="updateList10"
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
        <div
          class="pb-2 bg-[#FFF5DC] rounded-full overflow-hidden px-3 w-full shadow-custom"
        >
          <draggable
            class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
            :list="listStore2.answerList10"
            group="people10"
            @change="log"
            itemKey="name"
            @update="updateAnswerList10"
          >
            <template #item="{ element }">
              <div
                class="text-[16px] lg:text-[18px] flex items-center cursor-pointer hello leading-3"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
      <!-- ข้อ5 -->
    </div>
  </div>
</template>
    
    <script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { useListStore02 } from "@/stores/listStroe02";
const listStore2 = useListStore02();

const updateList6 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList6([...listStore2.list6]);
  } else {
    listStore2.updateList6([...to]);
  }
};

const updateAnswerList6 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList6([...listStore2.answerList6]);
  } else {
    listStore2.updateAnswerList6([...to]);
  }
};
const updateList7 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList7([...listStore2.list7]);
  } else {
    listStore2.updateList7([...to]);
  }
};

const updateAnswerList7 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList7([...listStore2.answerList7]);
  } else {
    listStore2.updateAnswerList7([...to]);
  }
};

const updateList8 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList8([...listStore2.list8]);
  } else {
    listStore2.updateList8([...to]);
  }
};

const updateAnswerList8 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList8([...listStore2.answerList8]);
  } else {
    listStore2.updateAnswerList8([...to]);
  }
};

const updateList9 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList9([...listStore2.list9]);
  } else {
    listStore2.updateList9([...to]);
  }
};

const updateAnswerList9 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList9([...listStore2.answerList9]);
  } else {
    listStore2.updateAnswerList9([...to]);
  }
};

const updateList10 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList10([...listStore2.list10]);
  } else {
    listStore2.updateList10([...to]);
  }
};

const updateAnswerList10 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList10([...listStore2.answerList10]);
  } else {
    listStore2.updateAnswerList10([...to]);
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
    