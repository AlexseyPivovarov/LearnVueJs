<template>
<div class="smarthouse">
<div id="house" class="container-fluid m-0 base p-0">
  <div id="outdoor" class="outdoor m-0 p-0" :style="{ opacity: elem1 }"></div>
  <div id="indoor" class="indoor m-0 p-0" :style="{ opacity: elem2 }"></div>
  <div id="content" class="row m-0 p-0">
      <div class="col-2">
          <div class="row ">
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/light.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Освещение</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/potop.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Увлажнение воздуха</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/temp.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Терморегуляция</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/vent.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Вентиляция, с рекуперацией</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/snow.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5 style='white-space: nowrap;'>Кондиционирование</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/energiya.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Энергозбережение 30 – 40%</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/graf.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="right"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Графики использования ресурсов</h5></span>"
              ></span>
          </div>
      </div>
      <div class="col-8">
          <div class="row">
              <span class="col-12 allOff" v-on:mouseover="allOff()">
                  <div class="borderglass">
                      <div class="glass">
                          <div class="innerglass">

                          </div>
                      </div>
                  </div>
                  <div class="text">
                      СИСТЕМЫ УМНОГО ДОМА
                  </div>
              </span>
              <span class="col-12 insideOnly" v-on:mouseover="insideOnly()"></span>
              <span class="col-12 allOn" v-on:mouseover="allOn()"></span>
          </div>
      </div>
      <div class="col-2">
          <div class="row">
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/ogon.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="left"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Пожарная сигнализация</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/kamera.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="left"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Камеры видеонаблюдения</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/security.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="left"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Охранная система</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/zatopl.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="left"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Система антизатопления</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/smart.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="left"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Управление со смартфона</h5></span>"
              ></span>
              <span class="col-12 smartItem d-flex justify-content-center"><div class="innerItem"><img
                      src="/img/icon/vorota.png"
                      class="vorota"
                      data-toggle="tooltip"
                      data-placement="left"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h5>Автоматические ворота, роллеты, жалюзи, карнизы</h5></span>"
              ></div></span>
              <span class="col-12 smartItem d-flex justify-content-center"><img
                      src="/img/icon/warranty.png"
                      class="innerItem"
                      data-toggle="tooltip"
                      data-placement="left"
                      data-html="true"
                      tabindex="0"
                      data-trigger="click hover focus"
                      title="<span class='info'><h4>Гарантия 5 лет</h4></span>"
              ></span>
          </div>
      </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'smarthouse',
  data: function () {
    return {
      elem1: 1,
      elem2: 1
    }
  },
  methods: {
    allOff: function () {
      this.elem1 = 1
      this.elem2 = 1
    },
    allOn: function () {
      this.elem1 = 0
      this.elem2 = 1
    },
    insideOnly: function () {
      this.elem1 = 1
      this.elem2 = 0
    }
  }
}
</script>
<style>
  .tooltip-inner {
      background: radial-gradient(at center, rgba(128, 166, 173, 0.7), rgba(128, 166, 173, 0));
      box-shadow: 0px 0px 20px rgba(128, 166, 173, 0.4);
      border-radius: 50%;
      text-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
  }
  .tooltip .arrow:before {
      border-right-color: rgba(128, 166, 173, 0.4)!important;
      border-left-color: rgba(128, 166, 173, 0.4)!important;
  }
  .innerItem {
      position: relative;
      top: 1.5vw;
      width: 5vw;
      height: 5vw;
      border: 0.3vw solid white;
      border-radius: 50%;
      opacity: 0.9;
      transition: transform 0.4s;
      background: radial-gradient(at center, rgba(128, 166, 173, 0.7), rgba(128, 166, 173, 0.2));
      box-shadow: 0px 0px 20px rgba(128, 166, 173, 0.7);
      outline: none!important;
  }
  .vorota {
      position: relative;
      top: 1vw;
      left: 0.9vw;
      width: 2.7vw;
  }
  .innerItem:hover {
      transform: scale(1.1);
  }
  #content {
      position: relative;
      /*top: -94vw;*/
  }
  .base {
      position: relative;
      overflow: visible;
      z-index: 1;
      box-shadow: inset 0px 2px 4px rgba(0,0,0,0.5);
      background-image: url('/img/light on.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-origin: content-box;
      width: 100vw!important;
      height: 47vw;
  }
  .indoor {
      position: relative;
      top: 0;
      margin-bottom: -47vw!important;
      /*top : -47vw;*/
      right: 0.5px;
      background-image: url('/img/indoor light off2.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-origin: border-box;
      width: 100vw;
      height: 47vw;
      -webkit-transition: opacity 1s;
      -moz-transition: opacity 1s;
      -o-transition: opacity 1s;
      transition: opacity 1s;
      opacity: 1;
  }
  .outdoor {
      position: relative;
      top: 0;
      right: 0.5px;
      background-image: url('/img/outdoor light off2.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-origin: border-box;
      width: 100vw;
      height: 47vw;
      -webkit-transition: opacity 1s;
      -moz-transition: opacity 1s;
      -o-transition: opacity 1s;
      transition: opacity 1s;
      opacity: opacity 1s;
      margin-bottom: -47vw!important;
  }
  .smartItem {
      height: 6.5vw;
      outline: none!important;
  }
  .allOff {
      color: white!important;
      height: 15vw;
      font-size: 2.5vw;
  }
  .borderglass {
      position: relative;
      margin-bottom: -8%!important;
      height: 40%;
      width: 80%;
      margin: 0 auto 0 auto;
      overflow: hidden;
      border-radius: 0 0 60px 60px;
      box-shadow: 0px   0.2vw 0.4vw rgba(0,0,0,0.1),
                  0.2vw 0     0.4vw rgba(0,0,0,0.1),
                 -0.2vw 0     0.4vw rgba(0,0,0,0.1);
  }
  .glass {
      background-image: url('/img/outdoor light off2.png'), url('/img/light on.png');
      background-repeat: no-repeat;
      background-position: center 0;
      background-size: 100vw;
      background-origin: content-box;
      filter: blur(2px);
      position: relative;
      height: 150%;
      width: 102%;
      left: -1.2%;
  }
  .innerglass {
      position: relative;
      height: 100%;
      width: 100%;
      background-color: rgba(128, 166, 173,0.2);
  }
  .text {
      position :relative;
      text-align: center;
      transform: rotateX(-20deg);
      color: white!important;
      text-shadow: 0px     0px   0px  #ffffff,
                   0px   0.5px   2px  #dddddd,
                   0px     1px   2px  #bbbbbb,
                   0px   1.5px   2px  #aaaaaa,
                   0px     2px   2px  #999999,
                   0px   2.5px   2px  #888888,
                   0px     3px   2px  #777777,
                   0px   3.5px   2px  #666666,
                   0px     4px   2px  #444444,
                   0px   4.5px   2px  #222222,
                   0px     5px   2px  #000000;
      font-size: 2.5vw;
      font-weight: bold;
  }
  .insideOnly {
      height: 22vw;
  }
  .allOn {
      height: 10vw;
  }
</style>
