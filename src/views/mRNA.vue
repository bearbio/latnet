<template>
  <div style="font-size: 13px; text-align: left">
    <p>
      1. Enter your RNA sequence in the text box. Please note that each sequence
      should start with ">", followed by the sequence name, and then the
      sequence itself.
    </p>
    <p>
      2. Click the "Predict" button, and the system will start predicting your
      sequence.
    </p>
    <p>3. The prediction results will be displayed in the table below.</p>
    <p>
      4. If you have multiple sequences to predict, you can enter them all at
      once, separated by blank lines between each sequence.
    </p>
  </div>
  <div>
    <el-input
      type="textarea"
      v-model="mRNAinputValue"
      :rows="7"
      placeholder="Please enter content"
    ></el-input>
    <div style="text-align: left; margin-top: 2%">
      <el-button @click="predict" class="custom-button">Predict</el-button>
      <el-button @click="clear" class="custom-button">Clear</el-button>
      <el-button @click="example" class="custom-button">Example</el-button>
    </div>
    <div style="margin-top: 3%">
      <div v-if="isPredicting">PREDICTING...</div>
      <el-table v-if="predictionResult" :data="predictionResult" border stripe>
        <el-table-column prop="name" label="name"></el-table-column>
        <el-table-column prop="nucleus" label="nucleus"></el-table-column>
        <el-table-column prop="cytoplasm" label="cytoplasm"></el-table-column>
        <el-table-column prop="location" label="location"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  name: "mRNAComponent",
  data() {
    return {
      defaultInput: `>RAD52
TTCCCAGAGACGCTCGCGCACCCTTCCCATTCTCCTCTGCGCGGCCTCCATCTAAGATCTCTTCCCCTTGTCCATAGCCTAGATCGAGCTCCCTGTGTGCACCGCGCGCTGCCCGAGGCGCAGGTCAACCAGAATCAAGATGTCTGGGACTGAGGAAGCAATTCTTGGAGGACGTGACAGCCATCCTGCTGCTGGCGGCGGCTCAGTGTTATGCTTTGGACAGTGCCAGTACACAGCAGAAGAGTACCAGGCCATCCAGAAGGCCCTGAGGCAGAGGCTGGGCCCAGAATACATAAGTAGCCGCATGGCTGGCGGAGGCCAGAAGGTGTGCTACATTGAGGGTCATCGGGTAATTAATCTGGCCAATGAGATGTTTGGTTACAATGGCTGGGCACACTCCATCACGCAGCAGAATGTGGATTTTGTTGACCTCAACAATGGCAAGTTCTACGTGGGAGTCTGTGCATTTGTGAGGGTCCAGCTGAAGGATGGTTCATATCATGAAGATGTTGGTTATGGTGTTAGTGAGGGCCTCAAGTCCAAGGCTTTATCTTTGGAGAAGGCAAGGAAGGAGGCGGTGACAGACGGGCTGAAGCGAGCCCTCAGGAGTTTTGGGAATGCACTTGGAAACTGTATTCTGGACAAAGACTACCTGAGATCACTAAATAAGCTTCCACGCCAGTTGCCTCTTGAAGTGGATTTAACTAAAGCGAAGAGACAAGATCTTGAACCGTCTGTGGAGGAGGCAAGATACAACAGCTGCCGACCGAACATGGCCCTGGGACACCCACAGCTGCAGCAGGTGACCTCCCCTTCCAGACCCAGCCATGCTGTGATACCGGCGGACCAGGACTGCAGCTCCCGAAGCCTGAGCTCATCCGCCGTGGAGAGCGAGGCCACGCACCAGCGGAAGCTCCGGCAGAAGCAGCTGCAGCAGCAGTTCCGGGAGCGGATGGAGAAGCAGCAGGTTCGAGTCTCCACGCCGTCAGCTGAGAAGAGTGAGGCAGCGCCTCCGGCCCCTCCTGTGACGCACAGCACTCCTGTAACTGTCTCAGAACCACTCCTGGAGAAAGACTTCCTTGCAGGAGTGACTCAAGAATTAATCAAGACTCTTGAAGACAACTCTGAAAAGTGGGCTGTGACTCCCGATGCAGGGGATGGTGTGGTCAAGCCCTCGTCTAGAGCAGACCCAGCCCAGACCTCTGACACATTAGCCTTGAACAACCAGATGGTGACCCAGAACAGGACTCCACACAGCGTTTGCCACCAGAAACCACAAGCAAAATCTGGATCTTGGGACCTCCAAACTTATAGCGCTGACCAACGCACAACAGGAAACTGGGAATCTCATAGGAAGAGCCAGGACATGAAGAAAAGGAAATATGATCCATCTTAACTGAGGCTCAGGCCACATAATTGGACTCTGTCACAAAGGGACTTTGGAAAACTACTTTTTGGTCATGAAATTGTTCATCGCTGCTGGAGAATGAACGTCATTGCGATTTATCTTGCTTCATTCTGAACCTTATCAAGAGGATCTGACTGAGAGCCCACTGCAGTTAGAGCTGAGCACTTTTGAAAAGCTTGTCCATCACTCTAGTAGGGAGAGGCTCTGGACAGATGAATACCTTTTCTTCGGCTTGTGAGGCTTCCCACTATTTATTACTGAACTATTATGTTAATGAAGATGGACATTTTAGGAATCACCAATGGCTCCTTGCCCTCAAGCAATATAGGCCAGACTTGGTCCTAAGCACCTGCCTCAGCAATTGTCTACATTCAGTTGTTTTGCATAACGTCTGCCTTCTTTCCTTTACGGTCCATGCCTTTAATGTTGCCCACATTAAGCACTGTGGATCACGACAGGAAAAAGGTTGGAGCAGTGCTTTTCACTACTTTGTATCAATCCAGGCTACAATCTTCATTTAATATAAATAATTTATGGATTTATGACATTACAATCCTGCATTGTTTCAAGACTGACATTTTTTCCTAAGGAAGGAAATAATCATCTAAGACCACGAAAAAAGGCTGTTTTTTGTTTTTTTTTTTTTTTTTTTTTTTGAGACGGGGTCTGGCTGTGTTGCCCTGACTGGAGTTCAGTGGTGCAAACACAGCTCTCTCCACAACCTCTTGGGCCCAAGTGATACTCCCACCTCTGCCTTACAAAATACAGGGATTACTGGTGTGAGCCACTGTGTCTGGCCAGAAAAGGCATTTTTGAGAAAGCAAATCGTATACCTTATTAACAAAATAGAATATATATATATTGCTTATCTGAAATGCTTGAAACCAGAATTGTTTTGCATTTTTTGAATATTTGTATACACATAATGAGACCTTGGGGATGGGACCCAAGTCTGAACGTGGAATTCACCTGTGTTTCGTGTATATGCCTCATACACATAATTTTGTGCATGAAACAGAGTTTTTGTATAAGAAGATACACTGCAGCTGAAGAGGGCTGGGTTTTTTTTTCTCTTAGGGTCGCTGCATAAACTGTTGTATGCCTGGTGCTTTGCGACTTGTCACACGAGGTCACGTGTGGAATTTTCCACTTCTGGCATCACGTCAGTGCTCAGAAATTTTCTGATCTCAGAGCATTTCAATTAGGGATGCTCAAACGCAACTGTTTCTACTTCCCCATTTCAGGTGTGAGATGTAACCCACCTTGACCATAAATTGGCTTTTCATAGTGCTCAGATGTTTC`,
      mRNAinputValue: "",
      isPredicting: false,
      predictionResult: null,
    };
  },
  created() {
    this.mRNAinputValue = this.defaultInput;
  },
  methods: {
    async predict() {
      let isValid = true;
      // 拆分输入
      const sequences = this.mRNAinputValue
        .split(">")
        .filter(Boolean)
        .map((seq) => {
          const [name, ...lines] = seq.split("\n");
          let sequence = lines.join("").trim().toUpperCase();

          // 检查序列是否只包含 A, T, C, G, U
          if (!/^[ATCGU]*$/.test(sequence)) {
            ElMessage.error("The input sequence is invalid.");
            isValid = false;
            return;
          }
          // 将所有的 U 替换为 T
          sequence = sequence.replace(/U/g, "T");

          return { name: name.trim(), sequence };
        });
      if (!isValid) {
        return;
      }
      // 发送请求
      const response = await fetch(
        "https://latnet.wsleepybear.cn/mrna-predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sequences),
        }
      ); // 处理响应
      this.isPredicting = true;
      const result = await response.json();
      // console.log(result.result);
      this.predictionResult = result.result;
      this.isPredicting = false;
    },
    clear() {
      this.mRNAinputValue = "";
      this.predictionResult = null;
    },
    example() {
      this.mRNAinputValue = this.defaultInput;
    },
  },
};
</script>
