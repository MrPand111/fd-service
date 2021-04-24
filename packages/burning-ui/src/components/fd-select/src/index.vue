<template>
    <el-select 
        :v-model="value" 
        :value="value"
        :placeholder="placeholder"
        :multiple="type === 'multiple' ? true : false"
    >
        <el-option 
            v-for="item in options" 
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
        >
        </el-option>
    </el-select>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type Type = "multiple" | "single";
interface IOptionsItem {
    label: string;
    value: any;
    disabled?: boolean;
}

const FdSelect = Vue.extend({
    props: {
        value: {
            required: true,
            type: [Number, String]
        },
        type: {
            required: false,
            type: String as PropType<Type>,
            default: "single"
        },
        placeholder: {
            required: false,
            type: String,
            default: '请输入'
        },
        options: {
            required: false,
            type: Array as PropType<IOptionsItem[]>,
            default: []
        }
    }
});
export default FdSelect;
</script>
