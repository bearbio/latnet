<template>
  <el-card
    shadow="never"
    style="
      margin-left: 8%;
      margin-right: 8%;
      margin-top: 2%;
      background-color: #333333;
    "
  >
    <h1 style="color: white; ">PREDICT</h1>
  </el-card>

  <el-tabs type="border-card" class="custom-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tab-label">LncRNA</span>
      </template>
      <LncRNAComponent />
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tab-label">mRNA</span>
      </template>
      <mRNAComponent />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import LncRNAComponent from "./LncRNA.vue";
import mRNAComponent from "./mRNA.vue";
export default {
  name: "PredictComponent",
  components: {
    LncRNAComponent,
    mRNAComponent,
  },
};
</script>
<style>
.custom-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.custom-tabs .el-tabs__item {
  border-radius: 3px;
}
.custom-tabs {
  border-radius: 10px;
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 2%;
}
.custom-tab-label {
  font-size: 18px; /* 你想要的字体大小 */
  color: #333333;
}
.custom-button {
  background-color: #333333;
  color: white;
  font-size: 18px;
}
</style>
