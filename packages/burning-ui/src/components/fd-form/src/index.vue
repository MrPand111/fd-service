<template>
    <div class="fd-form">
        <el-form :ref="formName" :label-width="formConfig.labelWidth" :model="formConfig.models">
            <el-form-item
                v-for="item in formConfig.fields"
                :key="item.prop" 
                :label="item.label"
                :prop="item.prop"  
            >
                <el-input
                    v-if="item.type === 'input'" 
                    v-model="formConfig.models[item.prop]" 
                    :placeholder="item.placeholder"
                    :style="item.style"
            />
                <el-select
                    v-else-if="item.type === 'select'"
                    v-model="formConfig.models[item.prop]" 
                    :placeholder="item.placeholder"
                    :style="item.style"
                >
                    <el-option
                        v-for="option in item.options" 
                        :key="typeof option === 'object' ? option.value : option"
                        :label="typeof option === 'object' ? option.label : option" 
                        :value="typeof option === 'object' ? option.value : option"
                    />
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { SelectType } from '../../fd-select/src/index.vue';
import FdSelect from '../../fd-select';

export interface FieldItem {
    // public
    label: string;
    prop: string;
    type: string;
    placeholder?: string;
    style?: Object;
    // select
    selectType?: SelectType;
    options?: any[];
}

export interface FormConfig {
    models: Object;
    labelWidth?: string;
    fields: FieldItem[];
}

const FdForm = Vue.extend({
    props: {
        formName: {
            type: String
        },
        formConfig: {
            type: Object as PropType<FormConfig>
        }
    },
    components: {
        FdSelect
    }
});
export default FdForm;
</script>
