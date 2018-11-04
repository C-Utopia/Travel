<template>
  <div>
    
    <div 
    class="header-fixed" 
    v-show="!showHeader"
    :style="opacityStyle"
    >
      <router-link tag="div" to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>      
      </router-link>
       景点详情
    </div>
    <router-link tag="div" to="/" class="header-abs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data () {
    return {
      showHeader:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll () {
      const top = document.documentElement.scrollTop
    console.log(top)
      if( top>43 ) {
       
        let opacity = top/140
        opacity = opacity >1 ? 1:opacity
        this.opacityStyle={opacity}
         this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    // 需要解除全局绑定
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll',this.handleScroll)
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header-fixed
  line-height: .86rem 
  display flex
  z-index 2
  position fixed
  top 0
  left 0
  background $bgColor
  color #ffffff
  width 100%
  justify-content center
  .header-fixed-back
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    left: 0.2rem;
.header-abs-back
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: .06rem;
  left: 0.2rem;
  text-align: center;
  line-height: 0.8rem;
</style>

