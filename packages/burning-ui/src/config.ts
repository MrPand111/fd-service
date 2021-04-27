export const FormConfig ={
    models: undefined,
    labelWidth: "80px",
    fields: [
        {
            label: '姓名',
            prop: 'name',
            type: 'input',
            style: { width: "120px" }
        },
        {
            label: '姓名2',
            prop: 'name2',
            type: 'input',
            style: { width: "120px" }
        },
        {
            label: '年龄',
            prop: 'age',
            type: 'select',
            options: [1,2,3,4,5,6]
        }
    ]
};