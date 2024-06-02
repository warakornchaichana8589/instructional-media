<template>
  <div class="w-full h-full flex flex-col justify-start items-center">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ให้นักเรียนนำคำมาเขียนให้เป็นประโยคสมบูรณ์
    </h1>
    <div
      class="p-20 pt-10 lg:p-10 flex flex-wrap justify-between items-center w-full max-w-[900px] my-auto"
    >
      <!-- ข้อ1 -->
      <div
        class="flex mt-1 gap-0 lg:gap-4 w-full justify-center items-center mx-auto"
      >
        <div class="subjectVerbObjectSentence w-full border border-slate-400 py-5 px-3 rounded-2xl">
          <div class="flex items-center">
            1.
            <draggable
              class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
              :list="listStore2.subjectVerbObjectSentenceNum01"
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
          <div class="flex items-center">
            2.
            <draggable
              class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
              :list="listStore2.subjectVerbObjectSentenceNum02"
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
          <div class="flex items-center">
            3.
            <draggable
              class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
              :list="listStore2.subjectVerbObjectSentenceNum03"
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
          <div class="flex items-center">
            4.
            <draggable
              class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
              :list="listStore2.subjectVerbObjectSentenceNum04"
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
          <div class="flex items-center">
            5.
            <draggable
              class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
              :list="listStore2.subjectVerbObjectSentenceNum05"
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
          <div class="flex items-center">
            6.
            <draggable
              class="list-group flex border-b-4 border-dotted w-full min-h-[30px] lg:min-h-[40px] max-w-full px-3 pt-1 hover:gap-2 items-center"
              :list="listStore2.subjectVerbObjectSentenceNum06"
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

        <div class="word w-full flex flex-col gap-2">
          <div class="border border-slate-400 flex justify-start w-full p-2 rounded-2xl">
            <div class="relative flex flex-col justify-center items-center">
              <img :src="imageSubject" alt="" class="w-[80px] lg:w-[100px]" />
              <div
                class="text-[14px] lg:text-[18px] leading-3 text-center flex justify-center items-center bg-[#FFD833] px-3 py-2 rounded-3xl -mt-[25px]"
              >
                ประธาน
              </div>
            </div>
            <div class="flex justify-start items-center">
              <draggable
                class="flex justify-start gap-2 min-w-[100px] h-full max-w-full p-1 items-center flex-wrap leading-3"
                :list="listStore2.subjectList"
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
          </div>
          <div class="border border-slate-400 flex justify-start w-full p-2 rounded-2xl">
            <div class="relative flex flex-col justify-center items-center">
              <img :src="imageVerb" alt="" class="w-[80px] lg:w-[100px]" />
              <div
                class="text-[14px] lg:text-[18px] leading-3 text-center flex justify-center items-center bg-[#FFD833] px-3 py-2 rounded-3xl -mt-[25px]"
              >
                กริยา
              </div>
            </div>
            <div class="flex justify-start items-center">
              <draggable
                class="flex justify-start gap-2 min-w-[100px] h-full max-w-full p-1 items-center flex-wrap leading-3"
                :list="listStore2.verbList"
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
          </div>
          <div class="border border-slate-400 flex justify-start w-full p-2 rounded-2xl">
            <div class="relative flex flex-col justify-center items-center">
              <img :src="imageObject" alt="" class="w-[80px] lg:w-[100px]" />
              <div
                class="text-[14px] lg:text-[18px] leading-3 text-center flex justify-center items-center bg-[#FFD833] px-3 py-2 rounded-3xl -mt-[25px]"
              >
                กรรม
              </div>
            </div>
            <div class="flex justify-start items-center">
              <draggable
                class="flex justify-start gap-2 min-w-[100px] h-full max-w-full p-1 items-center flex-wrap leading-3"
                :list="listStore2.objectList"
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
          </div>
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
import imageSubject from "@/assets/images/119.png";
import imageVerb from "@/assets/images/118.png";
import imageObject from "@/assets/images/117.png";

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
      