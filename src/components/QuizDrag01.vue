<template>
    <div class="row">
      <div class="flex">
        <h3>Draggable 1</h3>
        <draggable
          class="list-group flex gap-2 border-2 w-auto min-w-[40px] min-h-[40px]"
          :list="list1"
          group="people"
          @change="log"
          itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="list-group-item rounded-full p-3 bg-[#FEC66E] hover:bg-[#bd9350]">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>
  
      <div class="flex">
        <h3>Draggable 2</h3>
        <draggable
          class="list-group flex gap-2 border-2 w-auto min-w-[40px] min-h-[40px]"
          :list="list2"
          group="people"
          @change="log"
          itemKey="name"
        >
          <template #item="{ element, index }">
            <div class="list-group-item rounded-full p-3 bg-[#FEC66E] hover:bg-[#bd9350]">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>
      <rawDisplayer class="" :value="list1" title="List 1" />
      <rawDisplayer class="" :value="list2" title="List 2" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import draggable from 'vuedraggable';
  
  const list1 = ref([
    { name: "John", id: 1 },
    { name: "Joao", id: 2 },
    { name: "Jean", id: 3 },
    { name: "Gerard", id: 4 },
  ]);
  
  const list2 = ref([
    { name: "Juan", id: 5 },
    { name: "Edgard", id: 6 },
    { name: "Johnson", id: 7 },
  ]);
  
  const log = (evt) => {
    window.console.log(evt);
  };
  </script>
  
  <style>
  .draggable-item {
    padding: 10px;
    margin: 5px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    cursor: move;
    display: inline-block;
  }
  </style>
  