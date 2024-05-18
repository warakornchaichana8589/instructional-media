<template>
    <div @click="pauseSound" ref="offSound">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="volume-mute"><path :fill="fill" d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.91,12l1.8-1.79a1,1,0,0,0-1.42-1.42l-1.79,1.8-1.79-1.8a1,1,0,0,0-1.42,1.42L17.09,12l-1.8,1.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.79-1.8,1.79,1.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
    </div>
</template>
<script setup>
import { useAudioStore } from '@/stores/useAudio';

const { pause, audioPlay, isPlaying } = useAudioStore();
import { defineProps, ref } from 'vue';
const props = defineProps({
    fill: { type:String , default:'#FF7C7C'},
})
const offSound = ref(null)
const pauseSound = ()=>{
    if(isPlaying){
        pause()
        offSound.value.style.display = 'none'
    }
}


</script>