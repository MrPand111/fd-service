<template>
    <div>
        hello burning-ui
        <fd-button name="熊猫"></fd-button>
        <fd-select :options="options" :value="value" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

const App = Vue.extend({
    data() {
        return {
            options: [
                {
                    label: 'panda',
                    value: 'panda',
                }
            ],
            value: 'panda',
        }
    }
});
export default App;
</script>

<style lang="less">
</style>