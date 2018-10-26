<template>

    <div class="wrap">
    <swiper :options="swiperOption" v-if="list.length">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="图片走丢了~">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">
    </div>
   
  </swiper>
 
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
      list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrap >>> .swiper-pagination-bullet-active {
    background: #fff !important;
}

.wrap {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #ccc;
}

.swiper-img {
    width: 100%;
}
</style>


  
</style>
