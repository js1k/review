<template>
<div class="hello">
    <div class="d1"
    draggable="true"
         id="d1"></div>
    <div class="d2"
         id="d2"></div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
        };
    },
    setup() {
        // console.log(1212);
        let offsetX = ref(0);
        let offsetY = ref(0);
        onMounted(() => {
            const dd = document.getElementById('d1') as any;
            dd.ondragstart = (e: any) => {
                console.log(e);
                offsetX = e.offsetX;
                offsetY = e.offsetY;
            };
            dd.ondrag = (e: any) => {
                const x = e.pageX;
                const y = e.pageY;
                console.log('e', e);
                console.log(x, y);
                // if (x == 0 && y == 0) {
                //     return;
                // }
                // x -= offsetX.value;
                // y -= offsetY.value;
                dd.style.left = x + 'px';
                dd.style.top = y + 'px';
            };
            dd.ondragend = (e: any) => {
                const x = e.pageX;
                const y = e.pageY;
                dd.style.left = x + 'px';
                dd.style.top = y + 'px';
            };
        });
        return {
            offsetX,
            offsetY
        };
    }
});
</script>

<style lang="scss" scoped>
.hello {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid #ececec;
    .d1 {
        width: 150px;
        height: 150px;
        background: blueviolet;
        left:0;
        top:0;
        position: absolute;
    }

    .d2 {
        width: 500px;
        height: 500px;
        background: cadetblue
    }
}
</style>
