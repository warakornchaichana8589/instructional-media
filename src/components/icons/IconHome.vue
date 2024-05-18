<template>
    <div 
    class="shadow-md hover:shadow-2xl rounded-full lg:w-[60px] lg:h-[60px] w-[35px] h-[35px] flex justify-center items-center bg-[#FF5D18]"

    >
    <div
    @click="goHome"
      class="lg:w-[40px] w-[25px] button relative z-10 cursor-pointer flex justify-center items-center"
    >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home"><path fill="#ffff" d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z"></path></svg>

    </div>

    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goHome = () => {
    router.push("/");
}
</script>

<style lang="scss" scoped>

</style>