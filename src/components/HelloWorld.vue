<template>
<div class="drag-page">
    <div class="orgEl"
         id="orgEl"
         draggable="true"></div>
    <div class="tagEl"
         id="tagEl"></div>
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
        let offsetX = ref(0);
        let offsetY = ref(0);
        onMounted(() => {
            const orgEl = document.getElementById('orgEl') as any;
            orgEl.ondragstart = (e: any) => {
                // console.log(e);
                offsetX = e.pageX;
                offsetY = e.pageY;
                // orgEl.style.left = offsetX.value + 'px';
                // orgEl.style.top = offsetY.value + 'px';
            };
            orgEl.ondrag = (e: any) => {
                console.log(e);
                const x = e.pageX;
                const y = e.pageY;
                // // if (x == 0 && y == 0) {
                // //     return;
                // // }
                // // x -= offsetX.value;
                // // y -= offsetY.value;
                orgEl.style.left = x + 'px';
                orgEl.style.top = y + 'px';
            };
            orgEl.ondragend = (e: any) => {
                const x = e.pageX;
                const y = e.pageY;
                orgEl.style.left = x + 'px';
                orgEl.style.top = y + 'px';
                // console.log(offsetX.value, orgEl.style.left);
                // console.log(offsetY.value, orgEl.style.top);
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
.drag-page {
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid #ececec;

    .orgEl {
        width: 150px;
        height: 150px;
        background: blueviolet;
        position: absolute;
    }

    .tagEl {
        width: 500px;
        height: 500px;
        background: cadetblue
    }
}
</style>
