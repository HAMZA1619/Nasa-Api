<template>
<div class="Map">
    <h1>Location</h1>
    <p>{{coordinates.lat}}lat {{coordinates.lng}} lng</p>
  <GmapMap
      :center='coordinates'
      :zoom='16'
      style='width:80%;  height: 600px; margin:30px auto'
      ref="mapRef"
     
    >
     <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />

</GmapMap>
     
</div>
</template>

<script>

export default {
  name: 'Map',
   data () {
    return {
        coordinates:{
          lat: 32.2476343,
          lng: -8.5218203
           
     },
     markers:[]
}
},
created(){
this.$getLocation({})
  .then(coordinates => {
    this.coordinates =coordinates;
    this.markers = [
         {
         position:{  
          lat: 32.2476343,
          lng: -8.5218203   
     }
    },{
       position: 
     this.coordinates
         
    }]
  });},
methods:{
 
}

}
</script>