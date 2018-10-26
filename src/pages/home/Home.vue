<template>
<div>
 <home-header :city="city"></home-header>
 <home-swiper :list="swiperList"></home-swiper>
 <home-icon :list="iconList"></home-icon>
 <home-recommend :list="recommendList"></home-recommend>
 <weekend-recommend :list="weekendList"></weekend-recommend>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommend from './components/Recommend'
import WeekendRecommend from './components/WeekendRecommend'
import axios from 'axios'
export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        WeekendRecommend       
    },
    data () {
        return {
            swiperList:[],
            iconList: [],
            recommendList:[],
            weekendList:[], 
            city:''          
        }
    },
    methods: {
         getHomeInfo () {
          axios.get('/static/mock/index.json')
               .then(this.getHomeInfoSucc)
      }, 
      getHomeInfoSucc (res) {
          res = res.data
          if(res.ret && res.data){
              const data = res.data
              this.city = data.city,
              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekendList = data.weekendList
          }         
      }
    },
    mounted () {
     this.getHomeInfo()
    
    }
}

</script>
<style>

</style>
