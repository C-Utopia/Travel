<template>
    <div>
        <div class="like-top"><span>周末去哪儿</span></div>


         <div class="like-list" v-for="item in list" :key="item.id"> 

             <div class="img-content">
                <img  class='like-list-img'  :src="item.imgUrl" alt="">  
            </div>

            <p class="list-title">{{item.title}}</p>
            <p class="list-desc">{{item.desc}}</p>


        </div>
 

           
   </div>
</template>

<script>
export default {
  name: "WeekendRecommend",
 props: {
     list:Array
 },
  
  methods:{
      getStore:function(rate){
          
      }
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
    .like-top
       height .8rem
       background #eee
       line-height .8rem
       padding-left .2rem
   
    .like-list      
       width 100%
       .img-content
         height 0
         padding-bottom 38.5%
        .like-list-img
         width 100%
       .list-title 
         line-height .48rem
         font-size .28rem
         margin-left .2rem
         color $darkTextColor
         overflow hidden
         ellipsis()
       .list-desc
         line-height .42rem
         font-size .24rem
         margin-left .2rem
         margin-bottom .2rem
         color #61616
         overflow hidden
         ellipsis()

</style>

