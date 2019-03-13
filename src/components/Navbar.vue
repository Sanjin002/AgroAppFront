<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">Agro App</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Hello</b-nav-item>
          <b-nav-item to="/Forecast">Forecast</b-nav-item>
          <b-nav-item to="/Crops">Crops</b-nav-item>
          <b-nav-item to="/Calendar">Calendar</b-nav-item>
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

</style>