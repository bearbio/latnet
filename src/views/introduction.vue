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
    <h1 style="color: white">ANALYSIS</h1>
  </el-card>
  <div class="card-container">
    <el-card shadow="hover" style="margin-right: 2%">
      <el-image
        style="width: 113%; margin: -5%; margin-top: -10%"
        :src="images.lncRNA_AUROC"
        :fit="fit"
        :preview-src-list="[images.lncRNA_AUROC]"
        lazy
      />
    </el-card>
    <el-card shadow="hover">
      <el-image
        style="width: 113%; margin: -5%; margin-top: -10%"
        :src="images.mRNA_AUROC"
        :fit="fit"
        :preview-src-list="[images.mRNA_AUROC]"
        lazy
      />
    </el-card>
  </div>
  <div class="card-container">
    <el-card shadow="hover" style="margin-right: 2%">
      <el-image
        style="width: 100%"
        :src="images.lncRNA_barplot"
        :fit="fit"
        :preview-src-list="[images.lncRNA_barplot]"
        lazy
      />
    </el-card>
    <el-card shadow="hover">
      <el-image
        style="width: 100%"
        :src="images.mRNA_barplot"
        :fit="fit"
        :preview-src-list="[images.mRNA_barplot]"
        lazy
      />
    </el-card>
  </div>
  <div style="margin-left: 8%; margin-right: 8%; margin-top: 2%">
    <el-card shadow="hover">
      <el-image
        style="width: 100%"
        :src="images.combined_heatmaps_with_colorbar"
        :fit="fit"
        :preview-src-list="[images.combined_heatmaps_with_colorbar]"
        lazy
      />
    </el-card>
    <el-card shadow="hover" style="margin-top: 2%">
      <el-image
        style="width: 100%"
        :src="images.mRNA_combined_heatmaps_with_colorbar"
        :fit="fit"
        :preview-src-list="[images.mRNA_combined_heatmaps_with_colorbar]"
        lazy
      />
    </el-card>
  </div>
  <div class="card-container">
    <el-card>
      <el-image
        style="width: 100%"
        :src="images.circRNAs"
        :fit="fit"
        :preview-src-list="[images.circRNAs]"
        lazy
      />
    </el-card>
    <el-card>
      <el-image
        style="width: 100%"
        :src="images.ciRNAs"
        :fit="fit"
        :preview-src-list="[images.ciRNAs]"
        lazy
      />
    </el-card>
    <el-card>
      <el-image
        style="width: 100%"
        :src="images.lncRNAs"
        :fit="fit"
        :preview-src-list="[images.lncRNAs]"
        lazy
      />
    </el-card>
  </div>
  <div class="card-container">
    <el-card>
      <el-image
        style="width: 100%"
        :src="images.snoRNAs"
        :fit="fit"
        :preview-src-list="[images.snoRNAs]"
        lazy
      />
    </el-card>
    <el-card>
      <el-image
        style="width: 100%"
        :src="images.snRNAs"
        :fit="fit"
        :preview-src-list="[images.snRNAs]"
        lazy
      />
    </el-card>
    <el-card>
      <el-image
        style="width: 100%"
        :src="images.mRNAs"
        :fit="fit"
        :preview-src-list="[images.mRNAs]"
        lazy
      />
    </el-card>
  </div>

</template>
<script>
export default {
  name: "IntroductionComponent",
  data() {
    return {
      images: {
        lncRNA_AUROC: require("@/assets/images/AUROC/lncRNA_AUROC.png"),
        mRNA_AUROC: require("@/assets/images/AUROC/mRNA_AUROC.png"),
        lncRNA_barplot: require("@/assets/images/barplot/lncRNA_barplot.png"),
        mRNA_barplot: require("@/assets/images/barplot/mRNA_barplot.png"),
        combined_heatmaps_with_colorbar: require("@/assets/images/heatmap/combined_heatmaps_with_colorbar.png"),
        mRNA_combined_heatmaps_with_colorbar: require("@/assets/images/heatmap/mRNA_combined_heatmaps_with_colorbar.png"),
        circRNAs: require("@/assets/images/other_RNA_KDE/circRNAs.png"),
        mRNAs: require("@/assets/images/other_RNA_KDE/mRNAs.png"),
        lncRNAs: require("@/assets/images/other_RNA_KDE/lncRNAs.png"),
        ciRNAs: require("@/assets/images/other_RNA_KDE/ciRNAs.png"),
        snoRNAs: require("@/assets/images/other_RNA_KDE/snoRNAs.png"),
        snRNAs: require("@/assets/images/other_RNA_KDE/snRNAs.png"),
        lncRNA_kmer_attribution: require("@/assets/images/k-mer/lncRNA_kmer_attribution.png"),
        mRNA_kmer_attribution: require("@/assets/images/k-mer/mRNA_kmer_attribution.png"),
        lncRNA_cytoplasm_kmer: require("@/assets/images/k-mer/lncRNA_cytoplasm_k-mer.png"),
        mRNA_cytoplasm_kmer: require("@/assets/images/k-mer/mRNA_cytoplasm_k-mer.png"),
        lncRNA_nucleus_kmer: require("@/assets/images/k-mer/lncRNA_nucleus_k-mer.png"),
        mRNA_nucleus_kmer: require("@/assets/images/k-mer/mRNA_nucleus_k-mer.png"),
      },
    };
  },
};
</script>
<style scoped>
.card-container {
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
}
</style>
