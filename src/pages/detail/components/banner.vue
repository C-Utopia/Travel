<template>
  <div>
    <div class="banner" @click="handleClickBanner">
      <img
        class="banner-img"
        :src="this.bannerImg"
      >
      <div class="banner-info">
        <div class="banner-tittle">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary v-show="showGallary" @close="handleGallaryClose" :imgs="gallaryImgs"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1707/a5/a5de086a566eac29a3.img.jpg_r_800x800_fefd5af8.jpg",
        "http://img1.qunarzz.com/sight/p0/1707/af/af34e5c78941f84a3.img.jpg_r_800x800_62800bac.jpg"
      ]
    };
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleClickBanner() {
      this.showGallary = true;
      console.log("open");
    },
    handleGallaryClose() {
      this.showGallary = false;
      console.log("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img
    width: 100%;

  .banner-info
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-tittle
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;

    .banner-number
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon
        font-size: 0.24rem;
</style>

