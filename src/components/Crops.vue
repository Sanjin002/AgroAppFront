<template>
<div class="all">
	<div class="container">
    <div v-for="crops in crops">
    <div class="box">
      <div class="content">
        <h2>{{crops.id}}</h2>
        <h3>{{crops.name}}</h3>
        <p>{{crops.description}}</p>
        <a href="#">Read More</a>
      </div>
    </div>
    </div>
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Crop Two</h3>
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <a href="#">Read More</a>
      </div>
    </div>

    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Crop Three</h3>
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <a href="#">Read More</a>
      </div>
    </div>

    <div class="box">
      <div class="content">
        <h2>04</h2>
        <h3>Crop Four</h3>
        <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        <a href="#">Read More</a>
      </div>
    </div>

	</div>
</div>	
</template>

<script>
import axios from 'axios'
export default {
  name: 'crops',
  data () {
    return {
      crops: '',
    }
  },
   mounted () {
    axios
      .get('http://127.0.0.1:8000/crops/crops_api/?format=json')
      .then(response => {
        (this.crops = response.data);
      });
  },
}
</script>

<style scoped>

.all {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /*background: #060c21;*/
  font-family: sans-serif;
}
.container {
  position: relative;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px,1fr));
  grid-template-rows: auto;
  grid-gap:0 40px;
}
.container .box{
  position: relative;
  height: 400px;
  background: black/*#060c21*/;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  /*z-index: -1;*/
}
.container .box:before {
  content: '';
  position:absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: skew(2deg, 2deg);
  background: #000;
}

.container .box:nth-child(1):before{
  background: linear-gradient(315deg,#ff0057, #e64a19);

}
.container .box:after{
  content: '';
  position:absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255,255,255,0.05);
  position-events: none;

}
.content {
  position: relative;
  padding: 20px;
  transform: translateY(40px);
}

.box .content h2 {
  position: absolute;
  top: -60px;
  right: 20px;
  margin: 0;
  padding: 0;
  font-size: 10em;
  color: rgb(255,255,255,0.05);
  transition: 0.5s;
}
.box:hover .content h2 {
   top: -140px;
}
.box .content h3 {
  margin: 0 0 10px;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
}
.box .content p {
   margin: 0;
   padding: 0;
   color: #fff;
   font-weight: 16px;
}
.box .content a {
  position: relative;
  margin: 20px 0 0;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid #fff;
  display: inline-block;
  color: #fff;
  transition: 0.5s;
  transform: translateY(-40px);
  opacity: 0;
  visibility: hidden;
}
.box:hover .content a{
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
.box .content a:hover {
  color: #000;
  background: #fff;

}

</style>