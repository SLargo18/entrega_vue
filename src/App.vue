<template>
    <div id="app">
      <header>
        <h1>Agenda tus eventos</h1>
      </header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/ingresar-evento">Ingresar Evento</router-link> |
        <router-link to="/ver-registro-de-eventos">Eventos registrados</router-link> |
      </nav>
      <main>
        <router-view/>
      </main>
      <footer>
        Copyright &#169; Santiago Largo
      </footer>
    </div>
  </template>
<style>

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

nav {
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: center;
}

nav a {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #ddd;
}

nav a.router-link-exact-active {
  background-color: #333;
  color: #fff;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
