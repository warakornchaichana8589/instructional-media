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
      <!-- ข้อ5 -->
      <div class="flex mt-1  gap-0 lg:gap-2 w-[48%] flex-col justify-center items-center mx-auto">
        <div class="flex flex-col justify-center items-center gap-2 w-full">
          <div class="max-w-[200px] flex  justify-center items-center gap-2">
            <h3 class="text-[18px] lg:text-[30px] text-nowrap text-center">
              ข้อที่ ๕ :
            </h3>
            <img :src="qu05" alt="" class="w-full rounded-xl" />
          </div>
            <draggable
              class="flex gap-2 min-w-[100px] h-full max-w-full p-1 items-center"
              :list="listStore3.list5"
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
              :list="listStore3.answerList5"
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
  import { useListStore03 } from "@/stores/listStroe03";
  const listStore3 = useListStore03();
  import qu05 from "@/assets/images/qu05.png";
  const updateList5 = (event) => {
    const { to, from, newIndex, oldIndex } = event;
    if (from === to) {
      listStore3.updateList5([...listStore3.list5]);
    } else {
      listStore3.updateList5([...to]);
    }
  };
  
  const updateAnswerList5 = (event) => {
    const { to, from, newIndex, oldIndex } = event;
    if (from === to) {
      listStore3.updateAnswerList5([...listStore3.answerList5]);
    } else {
      listStore3.updateAnswerList5([...to]);
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
      