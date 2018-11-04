<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide 
                v-for="(item,index) in imgs" 
                :key="index"
                >
                    <img
                        class="swiper-img"
                        :src="item"
                    />
                </swiper-slide>            
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: "Gallary",
  props:{
      imgs:Array,
      default (){
          return []
      }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow: inherit;
.container
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        .swiper-img
            width: 100%;
        .swiper-pagination
            color: #fff;
            bottom: -1rem;
            z-index: 99;
</style>
