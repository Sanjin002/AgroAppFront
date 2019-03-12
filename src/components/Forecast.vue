<template>
  <div>
    <div class="row">
      <h5>{{selected}} </h5>
       <div class="col-10 weather">       
        <div class="row">
          <div class="tri col">
            <h4>{{city.curr_day.forecast[0].temperature}}</h4>
              <p> bla °C</p>
                <img class="slika" src="../assets/1.png">
               <p>bla</p>
          </div>
        </div>
    </div>
  </div>
        <!-- <img :src="getImgUrl(hour.weather)" v-bind:alt="hour"> -->
     <graf class="graf"></graf>
  </div>
</template>

<script> 
import axios from 'axios'
import { bus } from '../main'
import Graf from './Graf.vue';
export default {
  name: 'forecast',
  components: {
    Graf,
  },
  data () {
    return {
     cities: [],
     city: [],
     selected: '',
     curr_selected:'',
     cityData: [],
     cityTemp: [],
    }
  },
  methods: {
    
    },
     getImgUrl(png) {
    return require('../assets/'+png)
  },
    created(){
    bus.$on('podaciZaGraf', (data)=> {this.selected = data;
    })
  },
 mounted () {
    var vrijemeGrada = 'http://localhost:8000/weather/'+this.selected;
    this.curr_selected = this.selected;
    axios
      .get('http://localhost:8000/weather/')
      .then(response => {
        (this.cities = response.data.cities);
      });
      axios
      .get(vrijemeGrada)
      .then(response => {(this.city = response.data);
      });
  },
  updated() {
    if(this.selected !== this.curr_selected){
      this.curr_selected = this.selected;
    var vrijemeGradaUD = 'http://localhost:8000/weather/'+this.selected;
    axios
    .get(vrijemeGradaUD)
    .then(response => {(this.city = response.data);
                      (this.cityData = response.data.data);
      });
    }
  }
}
</script>

<style scoped>

/*.graf {
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}*/

#forecast {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container .table {
      
    width: 80%;
    height: 200px;
    color: white;
    padding: 25px;
  }
</style>