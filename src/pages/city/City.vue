<template>
    <div>
        <city-header></city-header>
        <city-search 
        :cities="cities"
        ></city-search>
        <city-list :hot="hotCities" :cities="cities" :letter="letter"> </city-list>
        <city-alpahbet 
        :cities="cities"
        @change="hanleLetterChange"
        >
        </city-alpahbet>
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlpahbet from './components/Alphabet'
import axios from 'axios'
export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlpahbet
    },
    data () {
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/static/mock/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
          res = res.data
          if(res.ret && res.data){
              const data = res.data
              this.cities = data.cities
              this.hotCities = data.hotCities
          }
         console.log(this.hotCities)
        },
        hanleLetterChange(letter){
            this.letter = letter
        }
        
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
<style lang="stylus" scoped>

</style>
