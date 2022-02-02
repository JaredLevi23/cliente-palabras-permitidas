<template>
  <div v-if="isLoad">
    <h1>Cargando informacion...</h1>    
  </div>
  <div v-else>
    <h2>Todas las palabras</h2>
    <table align="center" border="1px ">
      <tr>
        <th>id</th>
        <th>word</th>
        <th>allow</th>
        <th>dateCreate</th>
        <th>lastDateUpdated</th>
      </tr>
       <tr v-for="word in words" :key="word.id">
        <td>{{word.id}}</td>
        <td>{{word.word}}</td>
        <td>{{word.allow}}</td>
        <td>{{word.dateCreate}}</td>
        <td>{{word.lastDateUpdated}}</td>
      </tr>
     
    </table>

    <div>
      <h3>Salida</h3>
      <textarea class="resp" type="text" v-model="respuesta" ></textarea>
    </div>

  </div>
</template>

<script>

import searchWord from "../helpers/searchWord";

export default {
  data(){
    return {
      words: [],
      isLoad: true,
      respuesta :''
    }
  },
  methods:{
    async getAllWords(){
      const { data } = await searchWord();
      this.words = data;
      this.respuesta = JSON.stringify( data, undefined, 5 )
      this.isLoad = false;
      //console.log( this.words );
    }
  },
  mounted(){
    this.getAllWords();
  }
}
</script>

<style scoped>

tr {
  margin: 3;
}

.resp{
    width: 75%;
    height: 10em;
}

</style>