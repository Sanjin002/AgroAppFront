<template>
  <div>
   
        <h2>{{selected}}</h2>
    
    <graf class="graf"></graf>

  </div>
</template>

<script> 
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
    }
  },
    created(){
    bus.$on('podaciZaGraf', (data)=> {this.selected = data;
    })
  },
  mounted () {
    var vrijemeGrada = 'http://meteo.pointjupiter.co/'+this.selected;
    this.curr_selected = this.selected;
    axios
      .get('http://meteo.pointjupiter.co')
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
    var vrijemeGradaUD = 'http://meteo.pointjupiter.co/'+this.selected;
    axios
    .get(vrijemeGradaUD)
    .then(response => {(this.city = response.data);
                      (this.cityData = response.data.data[0].forecast);
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
</style>