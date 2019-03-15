<template>
  <div class="hello">
    <main>
      <img class="img" src="@/assets/logo.png" alt="Agro App">
    </main>
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to your Agro App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

@media screen and (max-width: 750px) {
  .img {
    width: 80%;
    margin-left: 50px;
  }
}
</style>
