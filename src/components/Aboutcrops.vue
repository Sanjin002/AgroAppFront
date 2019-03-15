<template>
	<div>
		<h1>{{about.name}}</h1>
    <p>{{about.description}}</p>
	</div>
</template>

<script>
import axios from 'axios'
import { bus } from '../main'

export default {
  name: 'aboutcrops',
  props: ["submit"],
  components: {
    
  },
  data() {
    return {
      selected:'1',
      curr_selected:'1',
      about:'',
    };
  },
  created(){
    bus.$on('podaciZaKulture', (data)=> {this.selected = data;
    })
  },
mounted () {
    var kultura = 'http://127.0.0.1:8000/crops/crops_api/' + this.submit + '/?format=json';
    this.curr_selected = this.selected;
      axios
      .get(kultura)
      .then(response => {(this.about = response.data);
      });
  },
  updated() {
    if(this.selected !== this.curr_selected){
      this.curr_selected = this.selected;
    var kultura = 'http://127.0.0.1:8000/crops/crops_api/' + this.selected + '/?format=json';
    axios
      .get(kultura)
      .then(response => {(this.about = response.data);
      });
    }
}
}
</script>