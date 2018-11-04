<template>
    <div class="header">城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header 
    position: relative;
    height: 0.86rem;
    line-height: 0.86rem;
    font-size: 0.32rem;
    background-color: $bgColor;
    text-align: center;
    color: #fff;

    .header-back 
        position: absolute;
        top: 0;
        left: 0;
        width: 0.64rem;
        height: 0.64rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
    

</style>

