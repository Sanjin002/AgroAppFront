<!-- <template>
  <div class="row">
    <div v-for="sowingresult in sowingresult">
      <div class="col tri ">
        <p>{{sowingresult[0].sowing_precision}}</p>
        <p>{{sowingresult[1].sowing_precision}}</p>
        <p>{{sowingresult[2].sowing_precision}}</p>
        <p>{{sowingresult[3].sowing_precision}}</p>
        <p>{{sowingresult[4].sowing_precision}}</p>
      </div>
    </div>
  </div>
</template>
<script>
    import { bus } from '../main';
    import axios from 'axios';
    export default {
        name: "SowingCalendar",
      data: function() {
          return {
            sowingresult:[],
            selectedcrop:'',
            selectedCity:'',
            crops:[]
          }
      },
      created(){
    bus.$on('podaciZaGraf', (data)=> {this.selectedCity = data;
    })
  },
      components: {
         CalendarView,
        CalendarViewHeader,
      },
      methods: {
        setShowDate(d) {
          this.showDate = d;
        },
      },
      mounted() {
          //svi apiji koji ce ti ikad trebat, mos ih slobodno obrisat
          //proslijedi val
          sowing_api = 'http://localhost:8000/sjetveni/Rijeka/Parsley/';
          crops_api = 'http://localhost:8000/crops/crops_api';
          city_api = 'http://localhost:8000/weather/';
          axios
            .get(sowing_api)
            .then(result=>{
              this.sowingresult = result.data;
            });
          axios
            .get(crops_api)
            .then(result=>{
              this.crops = result.data;
            })
        },
      updated() {
          axios
            .get('http://localhost:8000/sjetveni/'+this.selectedcity+'/'+this.selectedcrop+'/')
            .then(result=>{
              this.sowingresult = result.data;
            });
      }
    }
</script>

<style scoped>
</style> -->
