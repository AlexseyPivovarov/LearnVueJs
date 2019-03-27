<template>
  <div id="app">
      <div class="backfon"></div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light pt-0 pb-0">
        <router-link class="navbar-brand pr-0" to="/"><img src="/img/kvazar white.png" height="57px"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active pl-2 pr-2">
              <router-link class="nav-link" to="/smarthouse">Умный дом</router-link>
            </li>
            <li class="nav-item pl-2 pr-2">
              <router-link class="nav-link" to="/automatic">Автоматизация</router-link>
            </li>
            <li class="nav-item pl-2 pr-2">
              <router-link class="nav-link" to="/alarm">Сигнализация</router-link>
            </li>
            <li class="nav-item pl-2 pr-2">
              <router-link class="nav-link" to="/lights">Освещение</router-link>
            </li>
            <li class="nav-item pl-2 pr-2">
              <router-link class="nav-link" to="/lamp">Лампы</router-link>
            </li>
            <li class="nav-item pl-2 pr-2">
              <a href="" class="nav-link" data-toggle="modal" data-target="#contactsModal">Контакты</a>
            </li>
          </ul>
        </div>
      </nav>

    <router-view/>
  </div>
</template>

<style>
.nav-item {
    font-size: 1.2em;
}

.backfon {
    position: static;
    top: 0;
    background-color: rgba(128, 166, 173, 1);
    width: 100vw;
    height: 67px;
}

nav {
    background-color: rgba(128, 166, 173, 0.6);
}

nav a {
    color: rgba(255, 255, 255, 1)!important;
    text-shadow: 1px 1px 0.5px rgba(0, 0, 0, 1);
}

.navbar a img {
    transition: all 0.4s;
    position: relative;
    z-index:0;
}

.navbar a:hover img {
    transform: scale(1.07);
    z-index: 3;
}
</style>
