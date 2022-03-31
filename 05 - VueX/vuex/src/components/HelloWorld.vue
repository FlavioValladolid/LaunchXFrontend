<template>
  <div class="hello">
    <h1>{{ $store.getters.mensaje }}</h1>
    <h3>{{ $store.getters.nombreCompleto }}</h3>
    <h2>Amigos</h2>
    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar Amigo</button>
    <ul>
      <li
      v-for="(amigo, index) in $store.state.amigos"
      :key="index">
      {{amigo}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      amigo:''
    } 
  },
  methods: {
    addAmigo() {
      this.$store.state.amigo = this.amigo;
      this.$store.dispatch('addAmigoAction');
      this.amigo = '';
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
