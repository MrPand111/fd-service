<template>
    <div>
        hello burning-ui
        <fd-button name="熊猫"></fd-button>
        <fd-select :options="options" :value="value" />
        <fd-copy text="this is copy info" @onOk="onOk">
            copy
        </fd-copy>
        <fd-form :formName="formName" :formConfig="formConfig" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FdCopy from './components/fd-copy';
import FdForm from './components/fd-form';
import { FormConfig } from './config';

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
            formName: 'testForm',
            models: {
                name: 'panda',
                age: 3
            },
            formConfig: FormConfig
        }
    },
    created() {
        this.formConfig.models = this.models;
    },
    methods: {
        onOk() {
            console.log('callback');
        }
    },
    components: {
        FdCopy,
        FdForm
    }
});
export default App;
</script>

<style lang="less">
</style>