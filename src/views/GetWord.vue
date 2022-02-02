<template>
  
  <h2> Consultar por ID </h2>
  <input type="text" v-model="id">
  <br>
  <br>
  <button @click="getById">Buscar</button>

  <div class="resp-data">
    <h3>Datos de salida </h3>
    <table align="center">
      <tr>
        <th>ID</th>
        <td>{{ word.id }}</td>
      </tr>
      <tr>
        <th>WORD</th>
        <td>{{ word.word }}</td>
      </tr>
      <tr>
        <th>ALLOW</th>
        <td>{{ word.allow }}</td>
      </tr>
      <tr>
        <th>DATECREATED</th>
        <td>{{ word.dateCreate }}</td>
      </tr>
      <tr>
        <th>LASTDATEUPDATED</th>
        <td>{{ word.lastDateUpdated }}</td>
      </tr>
    </table>
  </div>

  <div>
    <h3>Salida</h3>
    <textarea class="resp" type="text" v-model="respuesta" ></textarea>
  </div>

</template>

<script>
import getWord from '../helpers/getWords';
export default {
  data(){
    return {
      result: '',
      id: '',
      word: {},
      respuesta: ''
    }
  },
  methods: {
    async getById(){
       const resp = await getWord( this.id );
        this.word = resp;
        this.respuesta = JSON.stringify( resp, undefined, 5 )
    }
  }
}
</script>

<style scoped >
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

.resp-data{
  margin-top: 2em;
}

p {
  margin: 0em;
}

td {
  text-align: left;
}

th {
  text-align: right;
}

</style>