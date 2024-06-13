<template>
  <div class="flex justify-start items-center flex-col h-full">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ประโยคและส่วนประกอบของประโยค
    </h1>

    <form
      @input="checkAnswers"
      class="max-w-[767px] h-full flex flex-col items-center justify-center"
    >
      <div
        v-for="(item, index) in exercises.slice(0, 2)"
        :key="index"
        class="exercise-item mt-[20px]"
      >
        <div class="flex gap-2 items-center">
          <p class="text-[22px]">ข้อที่ {{ index + 1 }}.</p>
          <div class="source-words">
            <label></label>
            <draggable
              v-model="item.words"
              :group="'shared' + index"
              class="draggable-list flex gap-2 h-[40px] mb-[10px] rounded-lg min-w-[300px] px-3 bg-[#fff4e3b6]"
              itemKey="text"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item h-full w-auto pt-1 text-[18px] lg:text-[20px] flex justify-center items-center cursor-pointer hello leading-3"
                >
                  {{ element.text }}
                </div>
              </template>
            </draggable>
          </div>
        </div>

        <div class="dropzones flex gap-2">
          <div class="dropzone">
            <label
              class="w-full bg-[#FFD699] mb-2 leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ประธาน</label
            >
            <draggable
              v-model="item.subjects"
              :group="'shared' + index"
              class="draggable-list flex h-[40px] bg-[#FFF4E3]"
              itemKey="text"
              @update="updateSubjects(index)"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item bg-[#FFF4E3] w-full h-full p-2 px-3 text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
                >
                  {{ element.text }}
                </div>
              </template>
            </draggable>
          </div>
          <div class="dropzone">
            <label
              class="w-full bg-[#FFD699] mb-2 leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ขยายประธาน</label
            >
            <draggable
              v-model="item.subjectModifiers"
              :group="'shared' + index"
              class="draggable-list flex h-[40px] bg-[#FFF4E3]"
              itemKey="text"
              @update="updateSubjectModifiers(index)"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item bg-[#FFF4E3] w-full h-full p-2 px-3 text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
                >
                  {{ element.text }}
                </div>
              </template>
            </draggable>
          </div>
          <div class="dropzone">
            <label
              class="w-full bg-[#FFD699] mb-2 leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >กริยา</label
            >
            <draggable
              v-model="item.verbs"
              :group="'shared' + index"
              class="draggable-list flex h-[40px] bg-[#FFF4E3]"
              itemKey="text"
              @update="updateVerbs(index)"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item bg-[#FFF4E3] w-full h-full p-2 px-3 text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
                >
                  {{ element.text }}
                </div>
              </template>
            </draggable>
          </div>
          <div class="dropzone">
            <label
              class="w-full bg-[#FFD699] mb-2 leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ขยายกริยา</label
            >
            <draggable
              v-model="item.verbModifiers"
              :group="'shared' + index"
              class="draggable-list flex h-[40px] bg-[#FFF4E3]"
              itemKey="text"
              @update="updateVerbModifiers(index)"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item bg-[#FFF4E3] w-full h-full p-2 px-3 text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
                >
                  {{ element.text }}
                </div>
              </template>
            </draggable>
          </div>
          <div class="dropzone">
            <label
              class="w-full bg-[#FFD699] mb-2 leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >กรรม</label
            >
            <draggable
              v-model="item.objects"
              :group="'shared' + index"
              class="draggable-list flex h-[40px] bg-[#FFF4E3]"
              itemKey="text"
              @update="updateObjects(index)"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item bg-[#FFF4E3] w-full h-full p-2 px-3 text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
                >
                  {{ element.text }}
                </div>
              </template>
            </draggable>
          </div>
          <div class="dropzone">
            <label
              class="w-full bg-[#FFD699] mb-2 leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ขยายกรรม</label
            >
            <draggable
              v-model="item.objectModifiers"
              :group="'shared' + index"
              class="draggable-list flex h-[40px] bg-[#FFF4E3]"
              itemKey="text"
              @update="updateObjectModifiers(index)"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item bg-[#FFF4E3] w-full h-full p-2 px-3 text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
                >
                  {{ element.text }}
                </div>
              </template>
            </draggable>
          </div>
          <div class="dropzone">
            <label
              class="w-full bg-[#FFD699] mb-2 leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ชนิดของประโยค</label
            >
            <select
              v-model="item.sentenceType"
              class="w-full bg-[#FFF4E3] h-[40px] p-2 text-[16px] lg:text-[18px] cursor-pointer"
            >
              <option class="cursor-pointer" value="ประโยคบอกเล่า">ประโยคบอกเล่า</option>
              <option class="cursor-pointer" value="ประโยคปฏิเสธ">ประโยคปฏิเสธ</option>
              <option class="cursor-pointer" value="ประโยคคำถาม">ประโยคคำถาม</option>
              <option class="cursor-pointer" value="ประโยคขอร้อง">ประโยคขอร้อง</option>
              <option class="cursor-pointer" value="ประโยคคำสั่ง">ประโยคคำสั่ง</option>
              <option class="cursor-pointer" value="ประโยคแสดงความต้องการ">
                ประโยคแสดงความต้องการ
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
    
    <script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
import { useExerciseStore } from "@/stores/quiz99Store";
const exerciseStore = useExerciseStore();
const { exercises, results, checkAnswers } = exerciseStore;

const showResulst = ref([]);
const handleCheckAnswers = () => {
  checkAnswers();
  console.log(results); // Log the results to check if they are updating
};
const updateSubjects = (index) => {
  exerciseStore.exercises[index].subjects = [
    ...exerciseStore.exercises[index].subjects,
  ];
};

const updateSubjectModifiers = (index) => {
  exerciseStore.exercises[index].subjectModifiers = [
    ...exerciseStore.exercises[index].subjectModifiers,
  ];
};
const updateVerbs = (index) => {
  exerciseStore.exercises[index].verbs = [
    ...exerciseStore.exercises[index].verbs,
  ];
};
const updateVerbModifiers = (index) => {
  exerciseStore.exercises[index].verbModifiers = [
    ...exerciseStore.exercises[index].verbModifiers,
  ];
};
const updateObjects = (index) => {
  exerciseStore.exercises[index].objects = [
    ...exerciseStore.exercises[index].objects,
  ];
};
const updateObjectModifiers = (index) => {
  exerciseStore.exercises[index].objectModifiers = [
    ...exerciseStore.exercises[index].objectModifiers,
  ];
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
    