<template>
  <h2>Actualizar palabra</h2>
  <div>
    <p>Ingrese su ID</p>
    <input type="text" v-model="id">
  </div>

  <div>
     <p>Palabra o frase nueva:</p>
     <input type="text" v-model="palabra">
  </div>
  
  <div >
    <span>Allow: </span>
    <select name="allow" v-model="allow">
      <option value="true">True</option>
      <option value="false">False</option>
    </select>
  </div>
   <button @click="updateWord">Actualizar</button>

   <div>
      <h3>Salida</h3>
      <textarea class="resp" type="text" v-model="respuesta" ></textarea>
  </div>

</template>

<script>

import putWord from "../helpers/putWord";
export default {
  data(){
    return {
      id:'',
      palabra: '',
      allow: '',
      respuesta: ''
    }
  },
  methods:{
    async updateWord(){
      if(this.palabra.length == 0) this.palabra = undefined;
      if(this.allow !== "true" && this.allow !== "false") this.palabra = undefined;

      const {data} = await putWord({ id: this.id, word: this.palabra, allow: this.allow  });
      this.respuesta = JSON.stringify( data, undefined, 5 )
    }
  }
}
</script>

<style scoped>
.resp{
    width: 75%;
    height: 10em;
}

button {
    background-color: darkcyan;
    color: white;
    font-size: 1em;
    padding: 1%;
    border: none;
}

p {
  margin: 0;
}

div{
  margin: 1em;
}
</style>