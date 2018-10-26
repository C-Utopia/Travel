<template>
    <div>

        <div class="like-top"></div>
        <div class="like-group-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
           <span>猜你喜欢</span>
        </div>
        
         <div class="like-list" v-for="item in stores" :key="item.id">

            <img  class='like-list-img'  :src="item.imgUrl" alt="">  
           
            <div class="like-list-right">
                <p class="like-list-title">{{item.title}}</p>
                <span class="like-rate">{{item.rate}}</span>
                <p class="like-comment-num">{{item.commentNum}}条评论</p>
                <div class="like-price"> <span class="price-symbol">￥</span> {{item.price}} <span>起</span> </div>
                <span class="like-address">{{item.address}}</span>
            </div>
            
            <p class="like-bottom-desc">{{item.desc}}</p>
        </div>
 

           
      

   </div>
</template>

<script>
export default {
  name: "HomeRecommend",
props: {
list:Array
},
  computed:{

      stores () {
          const results = []
          this.list.forEach( (item,index) => {
            const rate =  parseInt(item.rate)
            item.rate = "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
            results.push(item)
            
         });
         return results;
      }
     
      
         
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
       height .2rem
       background #eee
    .like-group-title
        color $darkTextColor
        margin-top .4rem
        margin-bottom .4rem
      .like-group-title > img 
          display inline-block
          width .3rem
          height .3rem
          margin-left .2rem
          vertical-align top 
    .like-list      
       height 3rem
       position relative
       margin-bottom .2rem
     .like-list-img
         width 2rem
         height 2rem
         margin-left .3rem
         display inline-block
         vertical-align top 
     .like-list-right
         display inline-block
         margin-left .2rem
         height 2rem
         
        .like-list-title
            font-size .32rem
            margin-top .2rem
            color #212121
            line-height .44rem
        .like-rate
          color #ffb436
          display inline-block
        .like-comment-num
            color #616161
            font-size .24rem
            line-height .6rem
            text-align right 
            display inline-block
            margin-left .5rem
            margin-top .1rem
        .like-price
          color #ff8300
          font-size .3rem
          line-height .6rem
          .price-symbol
              font-size .1rem
              color #ff8300
          span 
           color #212121 
           font-size .2rem
        .like-address
          width 1.5rem
          position absolute
          right .24rem
          bottom 1rem
          font-size .1rem
          ellipsis()
        .like-bottom-desc
            height 1rem
            line-height 1rem
            font-size .24rem
            width 100%
            text-align center
            color #f55 
</style>

