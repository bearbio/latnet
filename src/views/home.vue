<template>
  <!-- <div ref="homeTop" class="homeTop" id="homeTop">This is the top of home.vue</div> -->
  <el-card class="card-style" shadow="hover">
    <div class="container">
      <icon-info-circle-fill class="icon" />
      <p class="text">Introduction</p>
    </div>
    <p
      :style="{
        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: '0',
      }"
    >
      {{ subtitle }}
    </p>
    <div :style="{ fontSize: '18px', textAlign: 'left' }">
      <ul
        style="
          font-family: Georgia, 'Times New Roman', Times, serif;
          margin-left: 2%;
        "
      >
        <li
          v-for="(item, index) in list"
          :key="index"
          style="margin-bottom: 10px"
        >
          {{ item }}
        </li>
      </ul>
      <el-button
        plain
        size="small "
        v-for="(button, index) in buttons"
        :key="index"
        :style="{
          backgroundColor: button.color,
          color: 'black',
          fontWeight: 'bold',
        }"
        @click="handleClick(button.label)"
      >
        {{ button.label }}
      </el-button>
    </div>
  </el-card>
  <el-card class="card-style" shadow="hover">
    <div class="container">
      <icon-menu class="icon" />
      <p class="text">Guide</p>
    </div>
  </el-card>

  <el-card class="card-style" shadow="hover">
    <div class="container">
      <icon-bar-chart class="icon" />
      <p class="text">Architecture</p>
    </div>
    <el-image style="width: 100%" :src="require('@/assets/images/大论文框架图.png' )" :fit="fit" :preview-src-list="[require('@/assets/images/大论文框架图.png' )]" />
  </el-card>
</template>

<script>
import {
  IconInfoCircleFill,
  IconMenu,
  IconBarChart,
} from "@arco-design/web-vue/es/icon";
export default {
  components: { IconInfoCircleFill, IconMenu, IconBarChart },

  name: "HomeComponent",
  data() {
    return {
      title: "LATnet",
      subtitle:
        "RNA Subcellular Localization Prediction Based on Improved Transformer",
      list: [
        "A novel RNA subcellular localization prediction model termed LATnet.",
        "Enhanced feature extraction through five encoding strategies and a dual-path parallel structur.",
        "Significant outperformance of existing methods in predicting RNA localization.",
        "In-depth analysis using the Occlusion algorithm to identify key nucleotide combinations .",
      ],
      buttons: [
        { label: "Deep Learning", color: "#51cbce" },
        { label: "Attention Mechanism", color: "#6bd098" },
        { label: "Subcellular Localization", color: "#f5593d" },
        { label: "Bioinformatics", color: "#fbc658" },
      ],
    };
  },
  methods: {
    handleClick(label) {
      console.log(label);
    },
  },
};
</script>
<style scoped>
.card-style {
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 2%;
}
.container {
  display: flex;
  align-items: center;
  font: 1em sans-serif;
  margin-bottom: -10px;
}

.icon {
  font-size: 1.5em;
}

.text {
  font-size: 20px;
  font-weight: bold;
}
</style>
