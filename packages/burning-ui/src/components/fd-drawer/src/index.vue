<template>
    <div class="fd-drawer">
        <div class="fd-drawer-container" :style="defaultStyle">
            <div class="fd-drawer-header">
                <div>{{title}}</div>
                <div class="fd-drawer-header-cancel" @click="onCancel">X</div>
            </div>
            <div class="fd-drawer-content">
                <slot />
            </div>
        </div>
        <div class="fd-drawer-mask" @click="onCancel" v-if="visible"></div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
const FdDrawer = Vue.extend({
    props: {
        title: {
            required: false,
            type: String,
            default: ''
        },
        visible: {
            required: true,
            type: Boolean
        },
        width: {
            required: true,
            type: Number
        },
        onCancel: {
            required: true,
            type: Function as PropType<() => void>
        }
    },
    computed: {
        defaultStyle() {
            const Right: string = this.visible ? "0" : (-this.width + 'px');
            return {
                width: this.width + 'px',
                right: Right
            };
        }
    }
});
export default FdDrawer;
</script>

<style lang="less" scoped>
.fd-drawer {
    .fd-drawer-container {
        position: absolute;
        top: 0;
        background: white;
        z-index: 9999;
        height: 100vh;
        transition: 0.25s;

        .fd-drawer-header {
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #f0f0f0;
            border-radius: 4px 4px 0 0;
        }

        .fd-drawer-header-cancel {
            color: gray;
            cursor: pointer;
        }
    }

    .fd-drawer-mask {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.45);
        z-index: 1024;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>