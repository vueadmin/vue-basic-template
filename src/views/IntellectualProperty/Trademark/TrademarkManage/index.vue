<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDataListInit } from './hooks/useData.hook'

const { formFields } = useDataListInit()
const formInline = reactive({
  trademarkName: '',
  logoNumber: '',
  applicationDate: '',
  firstInstanceDate: '',
  enrollmentDate: '',
  exclusiveRightsAsOf: '',
  rightHolder: '',
  country: [],
  dateOfDismissal: '',
  agent: '',
  trademarkCategorization: [],
  legalStatus: '',
  sortField: 'create_time',
  sortOrder: 'DESC',
})
// 获取当前路由
const route = useRoute()

const isCollapse = ref(true)

const currentPage = ref(1)
const pageSize = ref(5)
const totalItems = ref(0)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
function handleCurrentChange(val: number) {
  currentPage.value = val
}
function onCollapse() {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <div class="workspace">
    <div class="workspace-header">
      <div class="workspace-header-operate">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in route.matched" :key="item.path">
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-button-group>
          <el-button type="primary" @click="onCollapse">
            {{
              isCollapse ? "收起" : "展开"
            }}
          </el-button>
          <el-button type="primary">
            重置
          </el-button>
          <el-button type="primary">
            查询
          </el-button>
        </el-button-group>
      </div>
      <div class="workspace-header-transition">
        <el-collapse-transition>
          <el-form v-show="isCollapse" :model="formInline" label-position="left">
            <el-row :gutter="24">
              <el-col v-for="(field, index) in formFields" :key="index" :span="6">
                <el-form-item :label="field.label" label-width="120px">
                  <component
                    :is="field.component"
                    v-model="formInline[field.model as keyof typeof formInline]"
                    v-bind="field.attrs"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-transition>
      </div>
    </div>
    <div class="workspace-content">
      <div class="workspace-content-table">
        <div class="table-header">
          <div class="table-header-title">
            国内外商标申请列表
          </div>
          <div class="table-header-button">
            <el-button type="primary" size="small">
              字段控制
            </el-button>
            <el-button type="primary" text>
              新增商标申请
            </el-button>
          </div>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
      <div class="workspace-content-pagination">
        <el-pagination
          v-model:current-page="currentPage" v-model:page-size="pageSize"
          layout="prev, pager, next, jumper" :total="totalItems" @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 4.5rem;

.workspace {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5.5rem);

  .workspace-header {
    box-sizing: border-box;
    padding: 0px 1rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .workspace-header-operate {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .workspace-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-top: .5rem;
    background-color: #fff;

    .workspace-content-table {
      box-sizing: border-box;
      width: 100%;
      padding: .5rem;

      .table-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        margin-left: .5rem;

        .table-header-title {
          width: 200px;
          font-weight: 700;
          margin-right: .5rem;
        }

        .table-header-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }

    .workspace-content-pagination {
      width: 100%;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
