<template>
      <div>
        <h2>Listado de Eventos</h2>
        <div>
          <label>Filtrar por tipo de evento:</label>
          <select v-model="filtroTipo">
            <option value="">Todos</option>
            <option value="asesorias">Asesorías en tiendas de café</option>
            <option value="comercializacion">Comercialización de café</option>
            <option value="katering">Katering en eventos</option>
            <option value="sensoriales">Experiencias sensoriales</option>
            <option value="recorrido">Recorrido cafetero</option>
          </select>
        </div>
        <ul>
          <li v-for="evento in eventosFiltrados" :key="evento.fecha">
            <p>Fecha: {{ evento.fecha }}</p> 
            <p>Lugar: {{ evento.lugar }}</p>
            <p>Nombre del evento: {{ evento.nombre }}</p>
            <p>Tipo de evento: {{ tipoEventoTexto(evento.tipo) }}</p>
            <p>Descripción: {{ evento.descripcion }}</p>
          </li>
        </ul>
      </div>
    </template>

    <script>
    export default {
      name: 'HomeView',
      computed: {
        eventosFiltrados() {
          if (this.filtroTipo === '') {
            return this.$store.getters.eventosOrdenados
          } else {
            return this.$store.getters.eventosOrdenados.filter(evento => evento.tipo === this.filtroTipo)
          }
        }
      },
      data() {
        return {
          filtroTipo: ''
        }
      },
      methods: {
        tipoEventoTexto(tipo) {
          switch (tipo) {
            case 'asesorias':
              return 'Asesorías en tiendas de café'
            case 'comercializacion':
              return 'Comercialización de café'
            case 'katering':
              return 'Katering en eventos'
            case 'sensoriales':
              return 'Experiencias sensoriales'
            case 'recorrido':
              return 'Recorrido cafetero'
            default:
              return ''
          }
        }
      }
    }
    </script>
    <style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  li {
    padding: 5px;
  }
}
    </style>