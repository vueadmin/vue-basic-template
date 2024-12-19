// 动态表单字段配置
export function useDataListInit() {
  const formFields = [
    {
      label: '商标名称',
      model: 'trademarkName',
      component: 'el-input',
      attrs: {
        clearable: true,
        placeholder: '请输入商标名称',
      },
    },
    {
      label: '商标号',
      model: 'logoNumber',
      component: 'el-input',
      attrs: {
        clearable: true,
        placeholder: '请输入商标号',
      },
    },
    {
      label: '申请日期',
      model: 'applicationDate',
      component: 'el-date-picker',
      attrs: {
        type: 'date',
        clearable: true,
        placeholder: '选择申请日期',
        style: 'width: 100%',
        format: 'YYYY/MM/DD', // 添加格式化配置
        valueFormat: 'YYYY-MM-DD', // 添加值格式化配置
      },
    },
    {
      label: '初审公告日',
      model: 'firstInstanceDate',
      component: 'el-date-picker',
      attrs: {
        type: 'date',
        clearable: true,
        placeholder: '选择初审公告日',
        style: 'width: 100%',
        format: 'YYYY/MM/DD', // 添加格式化配置
        valueFormat: 'YYYY-MM-DD', // 添加值格式化配置
      },
    },
    {
      label: '注册公告日',
      model: 'enrollmentDate',
      component: 'el-date-picker',
      attrs: {
        type: 'date',
        clearable: true,
        placeholder: '选择注册公告日',
        style: 'width: 100%',
        format: 'YYYY/MM/DD', // 添加格式化配置
        valueFormat: 'YYYY-MM-DD', // 添加值格式化配置
      },
    },
    {
      label: '专有权截至日',
      model: 'exclusiveRightsAsOf',
      component: 'el-date-picker',
      attrs: {
        type: 'date',
        clearable: true,
        placeholder: '选择专有权截至日',
        style: 'width: 100%',
        format: 'YYYY/MM/DD', // 添加格式化配置
        valueFormat: 'YYYY-MM-DD', // 添加值格式化配置
      },
    },
    {
      label: '权利人',
      model: 'rightHolder',
      component: 'el-input',
      attrs: {
        clearable: true,
        placeholder: '请输入权利人',
      },
    },
    {
      label: '驳回发文日',
      model: 'dateOfDismissal',
      component: 'el-date-picker',
      attrs: {
        type: 'date',
        clearable: true,
        style: 'width: 100%',
        placeholder: '选择驳回发文日',
        format: 'YYYY/MM/DD', // 添加格式化配置
        valueFormat: 'YYYY-MM-DD', // 添加值格式化配置
      },
    },
    {
      label: '代理机构',
      model: 'agent',
      component: 'el-input',
      attrs: {
        clearable: true,
        placeholder: '请输入代理机构',
      },
    },
    {
      label: '法律状态',
      model: 'legalStatus',
      component: 'el-select',
      attrs: {
        placeholder: '选择法律状态',
        clearable: true,
      },
    },
  ]
  return {
    formFields,
  }
}
