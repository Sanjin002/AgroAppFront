<template>
  <div >
    <b-navbar class="crta" toggleable="lg" type="dark" >
      <!--<b-navbar-brand href="#">AGRO APP</b-navbar-brand>-->
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="lista">
          <b-nav-item  class="link" to="/">HELLO</b-nav-item>
          <b-nav-item class="link" to="/Forecast">FORECAST</b-nav-item>
          <b-nav-item  class="link" to="/Crops">CROPS</b-nav-item>

        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input list="gradovi" size="sm" class="mr-sm-2" type="text" placeholder="Search the city" v-model="selected" v-on:keyup.enter="submit"/>
            <button class="btn btn-dark" type="submit" v-on:click="submit" >{{ selected }}</button>
              <datalist id="gradovi">
                <option v-for="city in cities">{{city.name}}</option>
              </datalist>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { bus } from '../main'
export default { 
  name: 'navbar',
  props: ["cities"],
  data () {
    return {
      selected:"",
    }
  },
  components: {
  
  },
  methods: {
    submit: function(){
      this.$emit('noviSelected',this.selected);
      bus.$emit('podaciZaGraf', this.selected);
    }
  },
  computed: {
    filteredCities: function(){
      return this.cities.filter((city)=>{
        return city.name.match(this.selected);
      })
    }
  }
}
</script>

<style scoped>

.lista {
  font-size: 25px;
  color: white;
  font-family: sans-serif;
   
}
.lista .active .link {
  border: 1px solid white;
}
.lista .link:hover {
  
  border: 1px solid white;
  border-radius: 0px
  /*font-weight: bold;*/
   
}
.lista .link {
  padding: 3px 20px;
}
.crta {
  border-bottom:1px solid white;
  padding-bottom:5px;
  
}
.span {
  color: white;
}
span {
  color: white;
}
</style>