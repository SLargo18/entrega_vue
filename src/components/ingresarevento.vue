<template>
  <div>
    <h2>Ingresar Evento</h2>
    <form @submit.prevent="agregarEvento">
      <label>
        Fecha:
        <input type="date" v-model="fecha" required>
      </label>
      <label>
        Lugar:
        <input type="text" v-model="lugar" required>
      </label>
      <label>
        Nombre del evento:
        <input type="text" v-model="nombre" required>
      </label>
      <label>
        Tipo de evento:
        <select v-model="tipo" required>
          <option value="">Selecciona una opción</option>
          <option value="asesorias">Asesorías en tiendas de café</option>
          <option value="comercializacion">Comercialización de café</option>
          <option value="katering">Katering en eventos</option>
          <option value="sensoriales">Experiencias sensoriales</option>
          <option value="recorrido">Recorrido cafetero</option>
        </select>
      </label>
     <label>
        Descripción:
        <textarea rows="6" cols="60" v-model="descripcion" required placeholder="Escribe una descripción detallada" spellcheck="true"></textarea>
    </label>

      <button type="submit">Agregar Evento</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ingresarevento',
  data() {
    return {
      fecha: '',
      lugar: '',
      nombre: '',
      tipo: '',
      descripcion: ''
    }
  },
  methods: {
    agregarEvento() {
      const nuevoEvento = {
        fecha: this.fecha,
        lugar: this.lugar,
        nombre: this.nombre,
        tipo: this.tipo,
        descripcion: this.descripcion
      }
      this.$store.commit('agregarEvento', nuevoEvento)
      this.fecha = ''
      this.lugar = ''
      this.nombre = ''
      this.tipo = ''
      this.descripcion = ''
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-top: 10px;
}

input, select, textarea {
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #555;
}
</style>