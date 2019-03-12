<template>
  <div>
  <div class="container">
    <chart :chart-data="datacollection"></chart>
  </div>
  <h1>Ja sam iz grafa: {{selected}}</h1>
  </div>
</template>
<script>
import axios from 'axios'
import { bus } from '../main'
import Chart from "./../Chart.js"
export default {
  name: 'graf',
  components: {
    Chart
  },
  data() {
    return {
      datacollection: null,
      selected: '',
      curr_selected: '',
      temp:'',
      perc:'',
    };
  },
  created(){
    bus.$on('podaciZaGraf', (data)=> {this.selected = data;
    })
  },
  mounted () {
    var vrijemeGrada = 'http://127.0.0.1:8000/weather/'+this.selected;
    this.curr_selected = this.selected;
      axios
      .get(vrijemeGrada)
      .then(response => {(this.temp = response.data.day_1.temp_arr);
                        (this.perc = response.data.day_1.perc_arr);
        this.fillData();
      });              
  },
  updated() {
    if(this.selected !== this.curr_selected){
      this.curr_selected = this.selected;
    var vrijemeGradaUD = 'http://localhost:8000/weather/'+this.selected;
    axios
      .get(vrijemeGradaUD)
      .then(response => {(this.temp = response.data.day_1.temp_arr);
                        (this.perc = response.data.day_1.perc_arr);
        this.fillData();
      });              
    }
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        // labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Temperatura",
            borderColor: "#f87979",
            data: this.getTemp()
          },
          {
            label: "Oborine",
            borderColor: "#A5CC82",
            data: this.getPerc()
          }
          // {
          //   label: "Data One",
          //   backgroundColor: "#f87d79",
          //   data: [this.getRandomInt(), this.getRandomInt()]
          // },
          // {
          //   label: "Data Two",
          //   backgroundColor: "#f87979",
          //   data: [this.getRandomInt(), this.getRandomInt()]
          // },
          // {
          //   label: "Data three",
          //   backgroundColor: "#f17979",
          //   data: [this.getRandomInt(), this.getRandomInt()]
          // }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    getTemp(){
      return   this.temp
    },
    getPerc(){
      return   this.perc
    }
  },
};
</script>

<style scoped>
.container {
  height: 500px;
  width: 700px;
}
@media screen and (max-width: 750px) {
  .cointainer {
    width: 80%;
    margin-left: 50px;
  }
}
</style>
