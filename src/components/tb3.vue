<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="MC" label="泵站名称" width="180"></el-table-column>
      <el-table-column prop="WZ" label="泵站属性" width="180"></el-table-column>
      <el-table-column prop="WZ" label="所属污水治理厂" width="180"></el-table-column>
      <el-table-column prop="MC" label="初步设计概要（万元）" width="100"></el-table-column>
      <el-table-column prop="designer" label="设计人员" width="100"></el-table-column>
      <el-table-column prop="JJ" label="总任务占比分值-改造进度"></el-table-column>
      <el-table-column label="土建子项比例划分" align="center">
        <el-table-column label="流量计井" align="center">
          <el-table-column prop="JJ" label="5.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.LLJJBoolean"
                @change="function(val){handleChange(scope.row,val,'LLJJ','5')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="建筑主体" align="center">
          <el-table-column prop="JJ" label="20.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.JZZTBoolean"
                @change="function(val){handleChange(scope.row,val,'JZZT','20')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="配电间" align="center">
          <el-table-column prop="JJ" label="3.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.PDJBoolean"
                @change="function(val){handleChange(scope.row,val,'PDJ','3')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="生活用房" align="center">
          <el-table-column prop="JJ" label="4.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.SHYFBoolean"
                @change="function(val){handleChange(scope.row,val,'SHYF','4')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="围栏" align="center">
          <el-table-column prop="JJ" label="3.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.WLBoolean"
                @change="function(val){handleChange(scope.row,val,'WL','3')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="盖板" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.GBBoolean"
                @change="function(val){handleChange(scope.row,val,'GB','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="道路及绿化" align="center">
          <el-table-column prop="JJ" label="6.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.DLJLHBoolean"
                @change="function(val){handleChange(scope.row,val,'DLJLH','6')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="发电机/屋棚" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.FDJWPBoolean"
                @change="function(val){handleChange(scope.row,val,'FDJWP','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="照明" align="center">
          <el-table-column prop="JJ" label="3.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.ZMBoolean"
                @change="function(val){handleChange(scope.row,val,'ZM','3')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="水电线路" align="center">
          <el-table-column prop="JJ" label="3.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.SDXLBoolean"
                @change="function(val){handleChange(scope.row,val,'SDXL','3')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="卷帘门" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.JLMBoolean"
                @change="function(val){handleChange(scope.row,val,'JLM','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="楼梯" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.LTBoolean"
                @change="function(val){handleChange(scope.row,val,'LT','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="电缆沟" align="center">
          <el-table-column prop="JJ" label="1.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.DLGBoolean"
                @change="function(val){handleChange(scope.row,val,'DLG','1')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="安装" align="center">
        <el-table-column label="格栅" align="center">
          <el-table-column prop="JJ" label="3.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.GSBoolean"
                @change="function(val){handleChange(scope.row,val,'GS','3')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="除臭装置" align="center">
          <el-table-column prop="JJ" label="3.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.CCZZBoolean"
                @change="function(val){handleChange(scope.row,val,'CCZZ','3')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="进水闸门" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.JSZMBoolean"
                @change="function(val){handleChange(scope.row,val,'JSZM','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="流量计" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.LLJBoolean"
                @change="function(val){handleChange(scope.row,val,'LLJ','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="进水闸门前液位计" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.JSZMQYWJBoolean"
                @change="function(val){handleChange(scope.row,val,'JSZMQYWJ','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="水泵" align="center">
          <el-table-column prop="JJ" label="5.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.SBBoolean"
                @change="function(val){handleChange(scope.row,val,'SB','5')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="垃圾压榨机" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.LJYZJBoolean"
                @change="function(val){handleChange(scope.row,val,'LJYZJ','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="电葫芦" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.DHLBoolean"
                @change="function(val){handleChange(scope.row,val,'DHL','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="在线水质监测，优化排线" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.ZXSZJCYHPXBoolean"
                @change="function(val){handleChange(scope.row,val,'ZXSZJCYHPX','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="空调" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.KTBoolean"
                @change="function(val){handleChange(scope.row,val,'KT','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="出水管及阀门" align="center">
          <el-table-column prop="JJ" label="5.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.CSGJFMBoolean"
                @change="function(val){handleChange(scope.row,val,'CSGJFM','5')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="电气自控" align="center">
        <el-table-column label="控制柜" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.KZGBoolean"
                @change="function(val){handleChange(scope.row,val,'KZG','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="水泵变频" align="center">
          <el-table-column prop="JJ" label="1.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.SBBPBoolean"
                @change="function(val){handleChange(scope.row,val,'SBBP','1')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="电气自控" align="center">
          <el-table-column prop="JJ" label="6.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.DQZKBoolean"
                @change="function(val){handleChange(scope.row,val,'DQZK','6')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="监控" align="center">
          <el-table-column prop="JJ" label="3.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.JKBoolean"
                @change="function(val){handleChange(scope.row,val,'JK','3')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="门禁" align="center">
          <el-table-column prop="JJ" label="2.0%" width="80" align="center">
            <template slot-scope="scope">
              <el-checkbox
                :checked="scope.row.MJBoolean"
                @change="function(val){handleChange(scope.row,val,'MJ','2')}"
              ></el-checkbox>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="JJ" label="确认" width="80" align="center">
        <el-button size="small">确认</el-button>
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
        form: {
          LLJJ: false,
          JZZT: false,
          PDJ: false,
          SHYF: false,
          WL: false,
          GB: false,
          DLJLH: false,
          FDJWP: false,
          ZM: false,
          SDXL: false,
          JLM: false,
          LT: false,
          DLG: false,
          GS: false,
          CCZZ: false,
          JSZM: false,
          LLJ: false,
          JSZMQYWJ: false,
          SB: false,
          LJYZJ: false,
          DHL: false,
          ZXSZJCYHPX: false,
          KT: false,
          CSGJFM: false,
          KZG: false,
          SBBP: false,
          DQZK: false,
          JK: false,
          MJ: false,
        },
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
            LLJJBoolean: true,
            LLJJ: '5',
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
            LLJJBoolean: true,
            LLJJ: '5',
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
            LLJJBoolean: true,
            LLJJ: '5',
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
            LLJJBoolean: true,
            LLJJ: '5',
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
            LLJJBoolean: true,
            LLJJ: '5',
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
            LLJJBoolean: true,
            LLJJ: '5',
          },
        ],
      }
    },
    methods: {
      handleChange(row, bool, key, val) {
        console.log(row, bool, key, val)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
    },
  }
</script>
<style>
  .el-checkbox__inner {
    width: 40px !important;
    height: 40px !important;
    border: 1px solid transparent !important;
    background-color: transparent !important;
  }
  .el-checkbox__inner::after {
    width: 10px !important;
    height: 30px !important;
    left: 15px !important;
    top: 2px !important;
    border-color: #333 !important;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    border-color: transparent !important;
    background-color: transparent !important;
  }
</style>