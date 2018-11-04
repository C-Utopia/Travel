<template>
  <div>
    <detail-banner 
    :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="DetailList"></detail-list>
    </div>
  </div>
</template>
<script>
import FastClick from "fastclick";
import DetailBanner from "./components/banner";
import DetailHeader from "./components/header";
import DetailList from "./components/List"
import axios from 'axios'
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[]

    }
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/static/mock/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getInfoSucc);
    },
    getInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        console.log(data);
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.DetailList = data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  },
  activated () {
    this.getDetailInfo();
  }
};
</script>
<style lang="stylus" scoped>
.content
  height: 50rem;
</style>
