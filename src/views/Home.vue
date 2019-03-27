<template>
  <div class="home">
    <HomeButtons/>
    <SmartHouse/>
    <Automatic/>
    <Lights/>
    <Lamp/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import SmartHouse from '@/components/SmartHouse.vue'
import Automatic from '@/components/Automatic.vue'
import Footer from '@/components/Footer.vue'
import Lights from '@/components/Lights.vue'
import Lamp from '@/components/Lamp.vue'
import HomeButtons from '@/components/HomeButtons.vue'

export default {
  name: 'home',
  components: {
    SmartHouse,
    Automatic,
    Lights,
    Lamp,
    Footer,
    HomeButtons
  },
  beforeMount: function () {
    this.$store.commit('unMark')
    if (document.documentElement.clientWidth < 1025) {
      this.$store.commit('showLights')
      this.$store.commit('showLamp')
    }
    this.scroll(this.$store)
  },
  methods: {
    scroll (store) {
      window.onscroll = function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let houseHeight = getComputedStyle(document.getElementById('house')).height.slice(0, -2)
        let bottomOfHouse = scrollTop + window.innerHeight > +houseHeight + 350
        let lightsHeight = getComputedStyle(document.getElementById('lights')).height.slice(0, -2)
        let bottomOfLights = scrollTop + window.innerHeight > +houseHeight + 250 + +lightsHeight
        if (bottomOfHouse) { store.commit('showLights') }
        if (bottomOfLights || (document.documentElement.clientWidth < 1025)) {
          store.commit('showLamp')
        }
      }
    }
  }
}
</script>
