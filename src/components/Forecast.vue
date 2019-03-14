<template>
<div class="container" >
  <div >
    <div class="box">
      
      <h1>{{weekday}} {{date}}</h1>
      <h1>{{selected}}</h1>
      <h1>{{city.curr_day.forecast[1].hour}}</h1>
      <h1>{{city.curr_day.forecast[1].temperature}}°C</h1>
      <h3> <img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[1].weather" height="150" width="150" />
      <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[1].wind" height="100" width="100" /></p> 
</h3>

      <h5>Wind: 5 m/s  <br> Humidity: 32% <br> Precipitation: 10%</h5>
    </div>

    <div class="box">  
      <p>
        <!-- <img :src="getImgUrl(hour.weather)" v-bind:alt="hour"> -->
       
     </p>
  <div class="box weather">
     <div class="row">
        <div class="col tri ">
          <h3>{{city.curr_day.forecast[0].hour}}</h3>
          <p>{{city.curr_day.forecast[0].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[0].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[0].wind" height="42" width="42" /></p>
        </div> 

        <div class="col tri ">
          <h3>{{city.curr_day.forecast[1].hour}}</h3>
          <p>{{city.curr_day.forecast[1].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[1].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[1].wind" height="42" width="42" /></p>
        </div> 

        <div class="col tri ">
          <h3>{{city.curr_day.forecast[2].hour}}</h3>
          <p>{{city.curr_day.forecast[2].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[2].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[2].wind" height="42" width="42" /></p>
        </div> 

        <div class="col tri ">
          <h3>{{city.curr_day.forecast[3].hour}}</h3>
          <p>{{city.curr_day.forecast[3].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[3].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[3].wind" height="42" width="42" /></p>
        </div> 

        <div class="col tri ">
          <h3>{{city.curr_day.forecast[4].hour}}</h3>
          <p>{{city.curr_day.forecast[4].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[4].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[4].wind" height="42" width="42" /></p>
        </div>

        <div class="col tri ">
          <h3>{{city.curr_day.forecast[5].hour}}</h3>
          <p>{{city.curr_day.forecast[5].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[5].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[5].wind" height="42" width="42" /></p>
        </div>

        <div class="col tri ">
          <h3>{{city.curr_day.forecast[6].hour}}</h3>
          <p>{{city.curr_day.forecast[6].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[6].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[6].wind" height="42" width="42" /></p>
        </div>

        <div class="col tri ">
          <h3>{{city.curr_day.forecast[7].hour}}</h3>
          <p>{{city.curr_day.forecast[7].temperature}}°C</p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[7].weather" /></p>
          <p><img class="slika" v-bind:src="'../static/img/' + city.curr_day.forecast[7].wind" height="42" width="42" /></p>
        </div> 

     </div>
  </div>
  <graf class="graf"></graf>
    </div>
  </div>
</div>







  <!--<div>
    <div class="row">
      <h5>{{selected}} </h5>
       <div class="col-10 weather">       
        <div class="row">
          <div class="tri col">
            <h4>{{city.curr_day.forecast[0].temperature}}</h4>
              <p> bla °C</p>
                <img class="slika" :src="../assets/1.png">
               <p>bla</p>
          </div>
        </div>
    </div>-->
     
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
     date:'',
     weekday:'',
     forecast:[],
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
                      (this.date = response.data.curr_day.date);
                      (this.weekday = response.data.curr_day.weekday);
                      (this.forecast = response.data.curr_day);
      });
    }
  }
}
</script>

<style scoped>

.container {
  display: inline-flex;
  justify-content: center;
  padding: 0 100px;
  height: 100vh;

}
.row {
  display: flex;
}

.tri{
  padding: 20px;
  margin-top: 20px;
  /*width: 30%;*/
  height: 300px;
  

}
.weather {
  width: 90%;
  height: 600px;
  padding: 10px 20px;
  
  justify-content: center;
  display:  inline-flex;
}
.weather .tri {
  border: 1px solid white;
  padding: 10px;
  margin: 10px;
}
 

#forecast {
  font-family: /*'Avenir', Helvetica, Arial, */sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>