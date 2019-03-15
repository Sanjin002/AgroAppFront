<template>
  <div>
    <components v-bind:is="component"></components>

  </div>
</template>

<script>
import Listakultura from './Listakultura.vue';
import Aboutcrops from './Aboutcrops.vue';

export default {
  components: {
    'listakultura': Listakultura,
    'aboutcrops': Aboutcrops
  }
}
</script>