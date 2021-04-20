<template>
    <div>
        <button>{{name}}</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
const FdButton = Vue.extend({
    props: {
        name: {
            type: String,
            default: '确定'
        }
    }
});
export default FdButton;
</script>
