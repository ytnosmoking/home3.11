<template>
  <div class="app-container">
    <el-table :data="list" row-key="id" border fit highlight-current-row v-loading.body="listLoading" style="width:100%;">
      <!-- ID -->
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <!-- DATE -->
      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{scope.row.timestamp | parseTime( '{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>

      <!-- Title -->
      <el-table-column min-width="300px" label="Title">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>

      <!-- Author -->
      <el-table-column width="100px" align="center" label="Author">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>

      <!-- Importance -->
      <el-table-column label="Importance" width="100">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" icon-class="star" class="icon-star" :key="n"></svg-icon>
        </template>
      </el-table-column>

      <!-- Readings -->
      <el-table-column align="center" label="Readings" width="95">
        <template slot-scope="scope">
          <span>{{scope.row.pageViews}}</span>
        </template>
      </el-table-column>

      <!-- Status -->
      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>

      <!-- Drag -->
      <el-table-column align="center" label="Drag" width="80">
        <template slot-scope="scope">
          <svg-icon class="drag-handler" icon-class="drag"></svg-icon>
        </template>
      </el-table-column>

    </el-table>

    <div class="show-d">dragTips1:&nbsp;{{oldList}}</div>
    <div class="show-d">dragTips2:&nbsp;{{newList}}</div>

  </div>
</template>
<script>
import { fetchList } from "@/api/article";
import Sortable from "sortablejs";
export default {
  name: "drag-table",
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      sortable: null,
      oldList: [],
      newList: []
    };
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;
        this.listLoading = false;
        this.oldList = this.list.map(v => v.id);
        this.newList = this.oldList.slice();
        this.$nextTick(() => {
          this.setSort();
        });
      });
    },
    setSort() {
      const el = document.querySelectorAll('.el-table__body-wrapper > table >tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData( dataTransfer ) {
          dataTransfer.setData('Text', '')
        },
        onEnd:(evt) => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          this.list.splice(evt.newIndex, 0, targetRow)

          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    }
  }
};
</script>
<style>
  .sortable-ghost {
    opacity: .8;
    color: #fff!important;
    background: #42b983!important;
  }

</style>

<style lang="less" scoped>
  
  .icon-star {
    margin-right: 2px;
  }
  .drag-handler {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .show-d {
    margin-top: 15px;
  }
</style>


