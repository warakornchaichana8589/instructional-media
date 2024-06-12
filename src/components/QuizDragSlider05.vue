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
        v-for="(item, index) in exercises"
        :key="index"
        class="exercise-item mt-[20px]"
      >
        <div class="flex gap-2 items-center">
          <p class="text-[22px]">ข้อที่ {{ index + 3 }}.</p>
          <div class="source-words">
            <label></label>
            <draggable
              v-model="item.words"
              group="shared"
              class="draggable-list flex gap-2 h-[40px] mb-[10px] rounded-lg min-w-[300px] px-3 bg-[#fff4e3b6]"
              itemKey="text"
            >
              <template #item="{ element }">
                <div
                  class="draggable-item h-full w-auto  pt-1 text-[18px] lg:text-[20px] flex justify-center items-center cursor-pointer hello leading-3"
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
              class="w-full bg-[#FFD699] leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ประธาน:</label
            >
            <draggable
              v-model="item.subjects"
              :group="'shared'+index"
              class="draggable-list flex h-[30px] bg-[#FFF4E3]"
              itemKey="text"
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
              class="w-full bg-[#FFD699] leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ขยายประธาน:</label
            >
            <draggable
              v-model="item.subjectModifiers"
              :group="'shared'+index"
              class="draggable-list flex h-[30px] bg-[#FFF4E3]"
              itemKey="text"
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
              class="w-full bg-[#FFD699] leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >กริยา:</label
            >
            <draggable
              v-model="item.verbs"
              :group="'shared'+index"
              class="draggable-list flex h-[30px] bg-[#FFF4E3]"
              itemKey="text"
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
              class="w-full bg-[#FFD699] leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ขยายกริยา:</label
            >
            <draggable
              v-model="item.verbModifiers"
              :group="'shared'+index"
              class="draggable-list flex h-[30px] bg-[#FFF4E3]"
              itemKey="text"
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
              class="w-full bg-[#FFD699] leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >กรรม:</label
            >
            <draggable
              v-model="item.objects"
              :group="'shared'+index"
              class="draggable-list flex h-[30px] bg-[#FFF4E3]"
              itemKey="text"
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
              class="w-full bg-[#FFD699] leading-3 flex justify-center items-center px-3 py-[15px] text-center text-[18px] lg:text-[20px]"
              >ขยายกรรม:</label
            >
            <draggable
              v-model="item.objectModifiers"
              :group="'shared'+index"
              class="draggable-list flex h-[30px] bg-[#FFF4E3]"
              itemKey="text"
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
        </div>
      </div>
    </form>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const exercises = ref([
  {
    sentence: "น้องร้องไห้เสียงดัง",
    subjects: [],
    subjectModifiers: [],
    verbs: [],
    verbModifiers: [],
    objects: [],
    objectModifiers: [],
    words: [
      { text: "น้อง" },
      { text: "ร้องไห้" },
      { text: "เสียง" },
      { text: "ดัง" },
    ],
  },
  {
    sentence: "มานีกินก๋วยเตี๋ยวไก่อย่างเอร็ดอร่อย",
    subjects: [],
    subjectModifiers: [],
    verbs: [],
    verbModifiers: [],
    objects: [],
    objectModifiers: [],
    words: [
      { text: "มานี" },
      { text: "กิน" },
      { text: "ก๋วยเตี๋ยว" },
      { text: "ไก่" },
      { text: "อย่าง" },
      { text: "เอร็ดอร่อย" },
    ],
  },
]);

const correctAnswers = [
  {
    subjects: [{ text: "น้อง" }],
    subjectModifiers: [],
    verbs: [{ text: "ร้องไห้" }],
    verbModifiers: [],
    objects: [{ text: "เสียง" }, { text: "ดัง" }],
    objectModifiers: [],
  },
  {
    subjects: [{ text: "มานี" }],
    subjectModifiers: [],
    verbs: [{ text: "กิน" }],
    verbModifiers: [],
    objects: [
      { text: "ก๋วยเตี๋ยว" },
      { text: "ไก่" },
      { text: "อย่าง" },
      { text: "เอร็ดอร่อย" },
    ],
    objectModifiers: [],
  },
];

const results = ref([]);

const checkAnswers = () => {
  results.value = exercises.value.map((exercise, index) => {
    const correct = correctAnswers[index];
    let result = "ถูกต้อง";
    for (const key in correct) {
      if (JSON.stringify(correct[key]) !== JSON.stringify(exercise[key])) {
        result = "ผิด";
        break;
      }
    }
    return result;
  });
};
</script>
  
  <style scoped>
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
  