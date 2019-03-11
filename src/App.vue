<template>
  <div id="app">
    <header>
      <Navbar v-bind:cities="cities" v-on:noviSelected="noviGrad($event)"></Navbar>
    </header>
    <main>

    <h5>city{{city}}</h5>
    <h5>selected{{selected}}</h5>
    <h5>curr_selected{{curr_selected}}</h5>
    <h5>cityData{{cityData}}</h5>
    <h5>cityTemp{{cityTemp}}</h5>
      <router-view></router-view>
    
    
    </main>
    </div>
  </div>
</template>

<script>
import { bus } from './main'
import axios from 'axios'
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
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
    noviGrad: function(selected){
      this.selected = selected;
    },
    zaGraf: function(){
      bus.$on('podaciZaGraf', this.cityData);
    }
  },
  components: {
  Navbar
  },
  mounted () {
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
    var vrijemeGrada = 'http://localhost:8000/weather/'+this.selected;
    axios
    .get(vrijemeGrada)
    .then(response => {(this.city = response.curr_day);
                      (this.cityData = response.data.data[0].forecast);
      });
    }
  }
}

</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
body {
 background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url("./assets/background.png");
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
  background-attachment: fixed;
}

main {
  text-align: center;
  margin-top: 40px;
}

/*header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}*/
</style>
