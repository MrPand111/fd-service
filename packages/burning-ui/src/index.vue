<template>
    <div>
        hello burning-ui
        <fd-button name="熊猫"></fd-button>
        <fd-select :options="options" :value="value" />
        <fd-copy text="this is copy info" @onOk="onOk">
            <!-- copy -->
        </fd-copy>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FdCopy from './components/fd-copy';

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
    },
    methods: {
        onOk() {
            console.log('callback');
        }
    },
    components: {
        FdCopy
    }
});
export default App;
</script>

<style lang="less">
</style>