<template>
	<div class="userCenter">
		<h3>用户中心</h3>
		<a-table :columns="columns" :data-source="dataSource" bordered>
			<template v-for="col in ['name', 'age', 'address']" #[col]="{ text, record }" :key="col">
				<div>
					<a-input
						v-if="editableData[record.key]"
						v-model:value="editableData[record.key][col]"
						style="margin: -5px 0"
					/>
					<template v-else>
						{{ text }}
					</template>
				</div>
			</template>
			<template #operation="{ record }">
				<div class="editable-row-operations">
					<span v-if="editableData[record.key]">
						<a @click="save(record.key)">Save</a>
						<a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
							<a>Cancel</a>
						</a-popconfirm>
					</span>
					<span v-else>
						<a @click="edit(record.key)">Edit</a>
					</span>
				</div>
			</template>
		</a-table>
	</div>
  
</template>

<script lang="ts">
import { cloneDeep } from 'lodash-es';
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';

const columns = [
  {
    title: '员工ID',
    dataIndex: 'key',
    width: '10%',
    slots: { customRender: 'key' },
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: '10%',
    slots: { customRender: 'name' },
  },
  {
    title: '部门',
    dataIndex: 'department',
    width: '20%',
    slots: { customRender: 'department' },
  },
  {
    title: '状态',
    dataIndex: 'state',
    width: '10%',
    slots: { customRender: 'state' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    slots: { customRender: 'operation' },
  },
];
interface DataItem {
  key: string;
  name: string;
  department: string;
  state: string;
}
const data: DataItem[] = [];
for (let i = 1; i < 20; i++) {
  data.push({
    key: i.toString(),
    name: `赵${i}先生`,
    department: `财务${i}部`,
		state: '激活',
  });
}
export default defineComponent({
  setup() {
    const dataSource = ref(data);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };
    const save = (key: string) => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };
    const cancel = (key: string) => {
      delete editableData[key];
    };
    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
    };
  },
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>