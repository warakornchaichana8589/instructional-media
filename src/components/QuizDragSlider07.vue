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
      <div class="flex mt-1 gap-0 lg:gap-2 w-[48%] flex-col justify-center items-center mx-auto">
        <div class="flex justify-center items-center gap-2 w-full">
          <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
            ข้อที่ 11 :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list11"
            group="people11"
            @change="log"
            itemKey="name"
            @update="updateList11"
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
            :list="listStore2.answerList11"
            group="people11"
            @change="log"
            itemKey="name"
            @update="updateAnswerList11"
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
            ข้อที่ 12 :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list12"
            group="people12"
            @change="log"
            itemKey="name"
            @update="updateList12"
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
            :list="listStore2.answerList12"
            group="people12"
            @change="log"
            itemKey="name"
            @update="updateAnswerList12"
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
            ข้อที่ 13 :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list13"
            group="people13"
            @change="log"
            itemKey="name"
            @update="updateList13"
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
            :list="listStore2.answerList13"
            group="people13"
            @change="log"
            itemKey="name"
            @update="updateAnswerList13"
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
            ข้อที่ 14 :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list14"
            group="people14"
            @change="log"
            itemKey="name"
            @update="updateList14"
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
            :list="listStore2.answerList14"
            group="people14"
            @change="log"
            itemKey="name"
            @update="updateAnswerList14"
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
            ข้อที่ 15 :
          </h3>
          <draggable
            class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
            :list="listStore2.list15"
            group="people15"
            @change="log"
            itemKey="name"
            @update="updateList15"
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
            :list="listStore2.answerList15"
            group="people15"
            @change="log"
            itemKey="name"
            @update="updateAnswerList15"
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

const updateList11 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList11([...listStore2.list11]);
  } else {
    listStore2.updateList11([...to]);
  }
};

const updateAnswerList11 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList11([...listStore2.answerList11]);
  } else {
    listStore2.updateAnswerList11([...to]);
  }
};
const updateList12 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList12([...listStore2.list12]);
  } else {
    listStore2.updateList12([...to]);
  }
};

const updateAnswerList12 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList12([...listStore2.answerList12]);
  } else {
    listStore2.updateAnswerList12([...to]);
  }
};
const updateList13 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList13([...listStore2.list13]);
  } else {
    listStore2.updateList13([...to]);
  }
};

const updateAnswerList13 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList13([...listStore2.answerList13]);
  } else {
    listStore2.updateAnswerList13([...to]);
  }
};

const updateList14 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList14([...listStore2.list14]);
  } else {
    listStore2.updateList14([...to]);
  }
};

const updateAnswerList14 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList14([...listStore2.answerList14]);
  } else {
    listStore2.updateAnswerList14([...to]);
  }
};

const updateList15 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateList15([...listStore2.list15]);
  } else {
    listStore2.updateList15([...to]);
  }
};

const updateAnswerList15 = (event) => {
  const { to, from, newIndex, oldIndex } = event;
  if (from === to) {
    listStore2.updateAnswerList15([...listStore2.answerList15]);
  } else {
    listStore2.updateAnswerList15([...to]);
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
    