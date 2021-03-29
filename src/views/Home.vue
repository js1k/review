<template>
<div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld
    },
    mounted() {
        // console.log(0);
        // alert(1);
    },
    methods: {

    }
});
</script>

<style lang="scss">
.home {
    width: 100%;
    height: 100%;
}
</style>
