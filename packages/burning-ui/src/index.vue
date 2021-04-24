<template>
    <div>
        hello burning-ui
        <fd-button name="熊猫"></fd-button>
        <button @click="openDrawer">oepn</button>
        <fd-select :options="options" :value="value" />
        <fd-drawer 
            :visible="drawerVisible"
            :width="400" 
            :onCancel="closeDrawer"
            title="测试抽屉"
        >
            <p>I am panda</p>
        </fd-drawer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FdDrawer from './components/fd-drawer';

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
            drawerVisible: false
        }
    },
    methods: {
        openDrawer() {
            this.drawerVisible = true;
        },
        closeDrawer() {
            this.drawerVisible = false;
        }
    },
    components: {
        FdDrawer
    }
});
export default App;
</script>

<style lang="less">
</style>