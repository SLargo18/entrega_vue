<template>
      <div>
        <h1>Bienvenido</h1>
      </div>
    </template>

    <script>
    import ingresarevento from '@/components/ingresarevento.vue'

    export default {
      name: 'ingresareventoview',
      components: {
        ingresarevento
      }
    }
    </script>
<style scoped>
h1 {
    text-align: center;
    color: rgb( 70, 85, 86 )
}
</style>