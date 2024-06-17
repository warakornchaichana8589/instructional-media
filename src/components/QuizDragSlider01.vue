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
            ข้อที่ ๑ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list1"
            group="people"
            @change="log"
            itemKey="name"
            @update="updateList1"
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
            :list="listStore2.answerList1"
            group="people"
            @change="log"
            itemKey="name"
            @update="updateAnswerList1"
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
            ข้อที่ ๒ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list2"
            group="people2"
            @change="log"
            itemKey="name"
            @update="updateList2"
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
            :list="listStore2.answerList2"
            group="people2"
            @change="log"
            itemKey="name"
            @update="updateAnswerList2"
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
            ข้อที่ ๓ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list3"
            group="people3"
            @change="log"
            itemKey="name"
            @update="updateList3"
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
            :list="listStore2.answerList3"
            group="people3"
            @change="log"
            itemKey="name"
            @update="updateAnswerList3"
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
            ข้อที่ ๔ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list4"
            group="people4"
            @change="log"
            itemKey="name"
            @update="updateList4"
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
            :list="listStore2.answerList4"
            group="people4"
            @change="log"
            itemKey="name"
            @update="updateAnswerList4"
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
            ข้อที่ ๕ :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list5"
            group="people5"
            @change="log"
            itemKey="name"
            @update="updateList5"
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
            :list="listStore2.answerList5"
            group="people5"
            @change="log"
            itemKey="name"
            @update="updateAnswerList5"
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

const updateList1 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList1([...listStore2.list1]);
  } else {
    listStore2.updateList1([...to]);
  }
};

const updateAnswerList1 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList1([...listStore2.answerList1]);
  } else {
    listStore2.updateAnswerList1([...to]);
  }
};
const updateList2 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList2([...listStore2.list2]);
  } else {
    listStore2.updateList2([...to]);
  }
};

const updateAnswerList2 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList2([...listStore2.answerList2]);
  } else {
    listStore2.updateAnswerList2([...to]);
  }
};
const updateList3 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList3([...listStore2.list3]);
  } else {
    listStore2.updateList3([...to]);
  }
};

const updateAnswerList3 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList3([...listStore2.answerList3]);
  } else {
    listStore2.updateAnswerList3([...to]);
  }
};
const updateList4 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList4([...listStore2.list4]);
  } else {
    listStore2.updateList4([...to]);
  }
};

const updateAnswerList4 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList4([...listStore2.answerList4]);
  } else {
    listStore2.updateAnswerList4([...to]);
  }
};
const updateList5 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList5([...listStore2.list5]);
  } else {
    listStore2.updateList5([...to]);
  }
};

const updateAnswerList5 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList5([...listStore2.answerList5]);
  } else {
    listStore2.updateAnswerList5([...to]);
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
    