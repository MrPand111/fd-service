<template>
    <div class="fd-copy-button" @click="cutText">
        <slot><button>复制</button></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

const copyToClipboard = (str: string): boolean => {
    const el = document.createElement('input');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    const res = document.execCommand('copy');
    document.body.removeChild(el);
    return res;
};

const FdCopy = Vue.extend({
    props: {
        text: {
            type: String,
            default: ''
        },
        onOk: {
            type: Function,
            default: () => {}
        }
    },
    methods: {
        cutText() {
            try {
                const res = copyToClipboard(this.text);
                if(res && this.onOk) this.$message.success('复制成功', 1, this.onOk);
                else this.$message.warning('复制失败');
            } catch(err) {
                throw err;
            }
        }
    }
});
export default FdCopy;
</script>
