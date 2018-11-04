<template>

   <ul class="list">
       <li class="item" 
        v-for="item in letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="hanleLetter"
        >
        {{item}}
       </li>
      
   </ul>
</template>
<script>
export default {
  name: "CityAlpahbet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters: function() {
      const letters = [];
      for (let item in this.cities) {
        letters.push(item);
      }
      return letters;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    hanleLetter(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.list
    display flex
    flex-direction column
    justify-content center
    width 0.4rem
    position absolute
    top 1.58rem
    right 0
    bottom 0
    .item
        color $bgColor
        line-height 0.4rem
        text-align center
</style>

