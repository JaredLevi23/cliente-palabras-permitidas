<template>
  <h2>Nueva palabra o frase</h2>
  <div>
     <p>Palabra o frase:</p>
     <input type="text" v-model="palabra">
  </div>
  
  <div >
    <span>Allow: </span>
    <select name="allow" v-model="allow">
      <option value="true">True</option>
      <option value="false">False</option>
    </select>
  </div>

  <button @click="saveWord">Almacenar</button>

  <div>
      <h3>Salida</h3>
      <textarea class="resp" type="text" v-model="respuesta" ></textarea>
  </div>
  
</template>

<script>

import postWord  from '../helpers/postWord'

export default {

    data(){
        return {
            palabra: '',
            allow: true,
            respuesta:''
        }
    },
    methods:{
        async saveWord(){
            if( this.palabra.length==0 ) return;
            const resp = await postWord( this.palabra, this.allow )
            this.respuesta = JSON.stringify( resp, undefined, 5 )
            this.palabra = ''
        }
    }

}
</script>

<style scoped>

div {
    margin: 1em
}

p {
    margin: 0em;
}

button {
    background-color: darkcyan;
    color: white;
    font-size: 1em;
    padding: 1%;
    border: none;
}

.resp{
    width: 75%;
    height: 10em;
}

h3{
    margin: 0em;
}

</style>