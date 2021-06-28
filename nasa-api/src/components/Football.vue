<template>
  <div  id="up" class="Football">
    <h2 >FootBall</h2>
      <button class="btn btn-outline-primary" v-on:click="getResult()" type="submit" id="button-addon2">Search</button>  
    <div  v-if="resul">
      <div v-for="result in resul" v-bind:key="result">
        <h4 >{{result.formation}}</h4>
          <img class="w-25 m-auto mt-3"  v-bind:src="result.team.logo" />  
    
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'Football',
  data () {
    return {
      msg: 'Search',
      query: '',
      resul: ''
    }
  },
  methods: {
  getResult() {
  
axios.request({
  method: 'GET',
  url: 'https://api-football-beta.p.rapidapi.com/fixtures/lineups',
  params: {fixture: '37899'},
  headers: {
    'x-rapidapi-key': '8699c6e8f1msh4d819cd28249129p11badajsn6aa3599447c3',
    'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
  }}).then( response => {
	console.log(response.data.response[0]);
     this.resul=response.data.response[0];
}).catch(function (error) {
	console.error(error);

});
} }
}
</script>

