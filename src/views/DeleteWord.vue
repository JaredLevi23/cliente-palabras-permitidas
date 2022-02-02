<template>
  <h2>Eliminar palabra lógicamente</h2>
  <p>Introduce el ID de la frase o palabra</p>
  <input type="text" v-model="id">
  <br>
  <br>
  <button @click="deleteWord">Eliminar</button>
  <div>
      <h3>Salida</h3>
      <textarea class="resp" type="text" v-model="respuesta" ></textarea>
  </div>



</template>

<script>
import deleteWord from "../helpers/deleteWord";

export default {

    data(){
        return {
            id:'',
            respuesta:''
        }
    },
    methods: {
        async deleteWord(){
            const { data } = await deleteWord( this.id );
            this.respuesta =  JSON.stringify( data, undefined, 5 )
            this.id = '';
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
</style>