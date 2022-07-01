<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="计划发布" align="center">
        <el-table-column prop="WZ" label="路段名称" width="120" align="center"></el-table-column>
        <el-table-column prop="MC" label="泵站名称" width="120" align="center"></el-table-column>
        <el-table-column prop="starttime" label="启动时间" width="150" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="设计阶段" align="center">
        <el-table-column prop="designer" label="设计人员" width="120" align="center"></el-table-column>
        <el-table-column prop="gettztime" label="收到图纸时间" width="120" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="审核阶段" align="center">
        <el-table-column prop="commenttime" label="意见上传时间" width="120" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="修改阶段" align="center">
        <el-table-column prop="modifier" label="修改人" width="120" align="center"></el-table-column>
        <el-table-column prop="guidangtime" label="修改完成并自动归档日期" width="120" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="施工阶段" align="center">
        <el-table-column prop="pretime" label="预计工期" width="120" align="center"></el-table-column>
        <el-table-column prop="realtime" label="实际工期" width="120" align="center"></el-table-column>
        <el-table-column prop="tianbaoer" label="填报人" width="120" align="center"></el-table-column>
        <el-table-column prop="exceed" label="施工超期天数" width="120" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="变更阶段" align="center">
        <el-table-column prop="bg" label="变更次数" width="120" align="center"></el-table-column>
        <el-table-column prop="bger" label="变更填报人" width="120" align="center"></el-table-column>
        <el-table-column prop="bgtime" label="变更完成时间" width="120" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="验收阶段" align="center">
        <el-table-column prop="checker" label="验收人员" width="120" align="center"></el-table-column>
        <el-table-column prop="checktime" label="验收日期" width="120" align="center"></el-table-column>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage1: 5,
        tableData: [
          {
            WZ: '堰新路西南侧',
            MC: '泵站1',
            designer: 'cc',
            starttime: '2021-07-27',
            gettztime: '2021-07-28',
            commenttime: '2021-07-29',
            modifier: '王小虎',
            guidangtime: '2021-07-30',
            pretime: '2021-07-30',
            realtime: '2021-07-30',
            tianbaoer: 'as ',
            exceed: '2',
            bg: '3',
            bger: '小红',
            bgtime: '2016-05-03',
            checker: '王小虎',
            checktime: '2016-05-03',
          },
          {
            WZ: '堰新路西南侧',
            MC: '泵站1',
            designer: 'cc',
            starttime: '2021-07-27',
            gettztime: '2021-07-28',
            commenttime: '2021-07-29',
            modifier: '王小虎',
            guidangtime: '2021-07-30',
            pretime: '2021-07-30',
            realtime: '2021-07-30',
            tianbaoer: 'as ',
            exceed: '2',
            bg: '3',
            bger: '小红',
            bgtime: '2016-05-03',
            checker: '王小虎',
            checktime: '2016-05-03',
          },
          {
            WZ: '堰新路西南侧',
            MC: '泵站1',
            designer: 'cc',
            starttime: '2021-07-27',
            gettztime: '2021-07-28',
            commenttime: '2021-07-29',
            modifier: '王小虎',
            guidangtime: '2021-07-30',
            pretime: '2021-07-30',
            realtime: '2021-07-30',
            tianbaoer: 'as ',
            exceed: '2',
            bg: '3',
            bger: '小红',
            bgtime: '2016-05-03',
            checker: '王小虎',
            checktime: '2016-05-03',
          },
          {
            WZ: '堰新路西南侧',
            MC: '泵站1',
            designer: 'cc',
            starttime: '2021-07-27',
            gettztime: '2021-07-28',
            commenttime: '2021-07-29',
            modifier: '王小虎',
            guidangtime: '2021-07-30',
            pretime: '2021-07-30',
            realtime: '2021-07-30',
            tianbaoer: 'as ',
            exceed: '2',
            bg: '3',
            bger: '小红',
            bgtime: '2016-05-03',
            checker: '王小虎',
            checktime: '2016-05-03',
          },
          {
            WZ: '堰新路西南侧',
            MC: '泵站1',
            designer: 'cc',
            starttime: '2021-07-27',
            gettztime: '2021-07-28',
            commenttime: '2021-07-29',
            modifier: '王小虎',
            guidangtime: '2021-07-30',
            pretime: '2021-07-30',
            realtime: '2021-07-30',
            tianbaoer: 'as ',
            exceed: '2',
            bg: '3',
            bger: '小红',
            bgtime: '2016-05-03',
            checker: '王小虎',
            checktime: '2016-05-03',
          },
          {
            WZ: '堰新路西南侧',
            MC: '泵站1',
            designer: 'cc',
            starttime: '2021-07-27',
            gettztime: '2021-07-28',
            commenttime: '2021-07-29',
            modifier: '王小虎',
            guidangtime: '2021-07-30',
            pretime: '2021-07-30',
            realtime: '2021-07-30',
            tianbaoer: 'as ',
            exceed: '2',
            bg: '3',
            bger: '小红',
            bgtime: '2016-05-03',
            checker: '王小虎',
            checktime: '2016-05-03',
          },
        ],
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
    },
  }
</script>