<template>
   <div class="flex justify-start items-center flex-col h-full">
    <h1
      class="px-4 py-2 lg:px10 lg:py-3 bg-[#FFF5DC] rounded-full mt-4 lg:mt-10 text-[14px] md:text-[18px] lg:text-[30px]"
    >
      ดูภาพ แล้วเลือกคำที่ที่กำหนดให้ และเรียงโปรโยคให้ถูกต้อง
    </h1>

    <draggable
      v-model="item.words"
      group="shared"
      class="draggable-list flex gap-2 h-[40px] mb-[10px] rounded-lg min-w-[300px] px-3 bg-[#fff4e3b6]"
      itemKey="text"
    >
      <template #item="{ element }">
        <div
          class="draggable-item h-full w-auto text-[16px] lg:text-[18px] flex justify-center items-center cursor-pointer hello leading-3"
        >
          {{ element.text }}
        </div>
      </template>
    </draggable>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

</script>
  
  <style scoped>
</style>
  