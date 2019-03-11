<template>
  <div>
  <div class="container">
    <chart :chart-data="datacollection"></chart>
  </div>
  <h1>Ja sam iz grafa: {{selected}}</h1>
  </div>
</template>
<script>
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
    };
  },
  created(){
    bus.$on('podaciZaGraf', (data)=> {this.selected = data;
    })
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "00:00",
          "01:00",
          "02:00",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        // labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Temperatura",
            borderColor: "#f87979",
            data: [11, 12, 12, 13, 14, 14, 13, 12, 11, 10, 0, -5]
          },
          {
            label: "Vlažnost zraka",
            borderColor: "#A5CC82",
            data: [92, 50, 51, 60, 58, 40, 80, 30, 64, 54, 90, 20]
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
    }
  }
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
