<template>
  <div  id="up" class="search">
    <h2 >What Are You Looking For ?</h2>
    <form class="w-50 m-auto input-group mb-3" v-on:submit.prevent="getResult(query)">
      <input class="form-control" type="text" placeholder="Type in your search" v-model="query" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button class="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
    </form>
    <div class="">
    <div  v-if="results" class="row m-auto">
      <div class="col-md-4 " v-for="result in results" v-bind:key="result">
         <h6 class="mt-4">{{result.data[0].title}}</h6>
          <img class="w-100 m-auto " style="height:250px"  v-bind:src="result.links[0].href" /> 
           <small class="text-muted ">{{result.data[0].date_created }}</small>      
      </div>
    </div>
      <a href="#" class="btn btn-secondary position-fixed bottom-0 end-0 translate-middle"> Up </a>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Nasa',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: ''
    }
  },
  methods: {
  
      getResult(query) {
        axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then( response => {
            // console.log(response.data.collection.items[0].data[0]);
            this.title =response.data.collection
            this.results = response.data.collection.items;
        });
      }
  }
}
</script>

