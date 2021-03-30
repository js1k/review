<template>
<div class="drag-page">
    <div class="orgEl"
         id="orgEl"
         draggable="true"></div>
    <!-- <div class="tagEl"
         id="tagEl"></div> -->
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
                offsetX = e.offsetX;
                offsetY = e.offsetY;
            };
            orgEl.ondrag = (e: any) => {
                let x = e.pageX;
                let y = e.pageY;
                if (x == 0 && y == 0) {
                    return;
                }
                x -= offsetX.value;
                y -= offsetY.value;
                orgEl.style.left = x + 'px';
                orgEl.style.top = y + 'px';
            };
            orgEl.ondragend = (e: any) => {
                const x = e.pageX;
                const y = e.pageY;
                orgEl.style.left = x + 'px';
                orgEl.style.top = y + 'px';
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
        left: 0;
        top: 0;
        position: absolute;
    }

    .tagEl {
        width: 500px;
        height: 500px;
        background: cadetblue
    }
}
</style>
