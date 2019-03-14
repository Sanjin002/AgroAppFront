<template>
  <div>
  <div class="container">
    <p> {{ selected }}</p>
    <p>Ja sam dan iz grafa: {{ weekday }}</p>
    <p>Ja sam  datum iz grafa: {{ date }}</p>
    <chart :chart-data="datacollection"></chart>
  </div>
  
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
      date:'',
      weekday:'',
      temp1:'',
      perc1:'',
      temp2:'',
      perc2:'',
      temp3:'',
      perc3:'',
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
      .then(response => {(this.temp1 = response.data.day_1.temp_arr);
                        (this.perc1 = response.data.day_1.perc_arr);
                        (this.temp2 = response.data.day_2.temp_arr);
                        (this.perc2 = response.data.day_2.perc_arr);
                        (this.temp3 = response.data.day_3.temp_arr);
                        (this.perc3 = response.data.day_3.perc_arr);
        this.fillData();
      });              
  },
  updated() {
    if(this.selected !== this.curr_selected){
      this.curr_selected = this.selected;
    var vrijemeGradaUD = 'http://localhost:8000/weather/'+this.selected;
    axios
      .get(vrijemeGradaUD)
      .then(response => {(this.temp1 = response.data.day_1.temp_arr);
                        (this.perc1 = response.data.day_1.perc_arr);
                        (this.date = response.data.day_1.date);
                        (this.weekday = response.data.day_1.weekday);
                        (this.temp2 = response.data.day_2.temp_arr);
                        (this.perc2 = response.data.day_2.perc_arr);
                        (this.temp3 = response.data.day_3.temp_arr);
                        (this.perc3 = response.data.day_3.perc_arr);
        this.fillData();
      });              
    }
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
        // labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Temperatura",
            borderColor: "#f87979",
            data: this.getTemp3()
          },
          {
            label: "Oborine",
            backgroundColor: "#A5CC82",
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
    getTemp1(){
      return   this.temp1
    },
    getTemp2(){
      return   this.temp2
    },
     getTemp3(){
      return   this.temp3
    },
    getPerc(){
      return   this.perc1
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
