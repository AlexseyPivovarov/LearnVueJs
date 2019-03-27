<template>
  <div id="lights" class="container-fluid const mb-0 p-5 d-flex align-items-center justify-content-center">
    <div class="row" v-if="showed">
        <div v-for="(column, c_index) in section" :key="c_index" class="col-xl-3 p-0 col-md-6">
            <div v-for="(item, i_index) in column" :key="i_index" class="p-0 d-flex align-items-center justify-content-center">
                <div
                    v-if="item.url"
                    class="image m-1"
                    :style="{animation: item.animation,
                            height: item.height + 'px',
                            width: item.width + 'px',
                            backgroundImage: 'url(' + item.url + ')'}"
                ><div v-if="!item.isnew" class="wrapper-new"><div class="new">Новинка</div></div>
                <div v-if="!item.stock" class="wrapper-stock"><div class="stock">Акция</div></div>
                </div>
                <a
                    v-else
                    href="#"
                    class="d-flex align-items-center justify-content-center main-btn animation rounded-0 m-1"
                    :style="{width: item.width + 'px', height: item.height + 'px'}"
                >
                    Освещение
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'lights',
  data: function () {
    return {
      width: 275
    }
  },
  computed: {
    showed () {
      return this.$store.state.lights
    },
    square () {
      return this.$store.state.objectList.filter(function (item) {
        return item.category === 1 && item.rotation === 3
      })
    },
    landscape () {
      return this.$store.state.objectList.filter(function (item) {
        return item.category === 1 && item.rotation === 2
      })
    },
    tablet () {
      return this.$store.state.objectList.filter(function (item) {
        return item.category === 1 && item.rotation === 1
      })
    },
    section () {
      return [
        [
          this.getButton(116),
          this.getSquare(275, '0.5'),
          this.getSquare(275, '0.6'),
          this.getTablet(425, '0.7')
        ],
        [
          this.getTablet(425, '0.8'),
          this.getLandscape(200, '0.9'),
          this.getLandscape(200, '1'),
          this.getSquare(266, '1.1')
        ],
        [
          this.getSquare(275, '1.2'),
          this.getTablet(425, '1.3'),
          this.getLandscape(200, '1.4'),
          this.getLandscape(191, '1.5')
        ],
        [
          this.getTablet(425, '1.6'),
          this.getSquare(275, '1.7'),
          this.getTablet(400, '1.8')
        ]
      ]
    }
  },
  methods: {
    getButton: function (height) {
      return {
        'width': this.width,
        'height': height
      }
    },
    getSquare: function (height, params) {
      return this.getRandItem(this.square, height, params)
    },
    getLandscape: function (height, params) {
      return this.getRandItem(this.landscape, height, params)
    },
    getTablet: function (height, params) {
      return this.getRandItem(this.tablet, height, params)
    },
    getRandAnimation: function (params) {
      let list = ['fade-bottom', 'fade-upper', 'fade-right']
      return list[Math.floor(Math.random() * list.length)] + ' ' + params + 's linear'
    },
    getRandItem: function (list, height, params) {
      if (list.length) {
        let newList = list.filter(function (item) { return item.use })
        let ln = newList.length
        if (ln) {
          let randItem = newList[Math.floor(Math.random() * ln)]
          this.$store.commit('setMark', randItem.id)
          return {
            'url': 'http://www.kvazar-light.net' + randItem.image,
            'pk': randItem.id,
            'isnew': randItem.isnew,
            'stock': randItem.stock,
            'width': this.width,
            'height': height,
            'animation': this.getRandAnimation(params)
          }
        } else {
          return {
            'url': 'http://www.kvazar-light.net/media/No-image.jpg',
            'isnew': true,
            'stock': true,
            'width': this.width,
            'height': height,
            'animation': this.getRandAnimation(params)
          }
        }
      } else {
        return {
          'url': 'http://www.kvazar-light.net/media/No-image.jpg',
          'isnew': true,
          'stock': true,
          'width': this.width,
          'height': height,
          'animation': this.getRandAnimation(params)
        }
      }
    }
  }
}
</script>
<style>
  html {
      scroll-behavior: smooth;
  }

  .const {
      width: 100vw;
      height: 1170px;
      overflow: hidden;
  }

  @media screen and (max-width: 1200px) {
      .const {
          width: 635px;
          height: 2290px;
      }
  }

  @media screen and (max-width: 767px) {
      .const {
          width: 100vw;
          height: 4560px;
      }
  }

  .image {
      box-shadow: 0px 0px 4px rgba(0,0,0,1);
      transition: 0.4s;
      position: relative;
      z-index: 0;
      background-size: cover;
  }

  .image:hover {
      box-shadow: 0 0 0 3px white, 0 0 20px rgba(0,0,0,1);
      transform: scale(1.07);
      z-index: 3;
      background-color: white;
      cursor: pointer;
  }

  .main-btn,
  .main-btn:focus,
  .main-btn:visited {
      box-shadow: 0px 0px 4px rgba(0,0,0,1)!important;
      background-color: rgba(128, 166, 173, 1)!important;
      border: none!important;
      font-size: 3em;
      position: relative;
      transition: 0.4s;
  }

  .main-btn:hover {
      box-shadow: 0px 0px 10px rgba(0,0,0,1)!important;
      background-color: rgba(128, 166, 173, 0.8)!important;
      transform: scale(1.03);
      z-index: 2;
  }

  .main-btn:active {
      box-shadow: none!important;
      transform: scale(0.99);
  }

  a {
      color: white!important;
      text-decoration: none!important;
  }

  /*плавная загрузка страниц*/
  @keyframes fade-zoom {
      0% { opacity: 0; transform: scale(0.3) rotate(0);}
      85% {opacity: 1; transform: scale(1.03) rotate(0);}
      100% { opacity: 1; transform: scale(1) rotate(0);}
  }

  @keyframes fade-simple {
      0% {opacity: 0}
      30% {opacity: 0}
      100% {opacity: 1}
  }

  @keyframes fade-in {
      0% {opacity: 0; transform: translateY(600px) scale(0) rotate(360deg)}
      60% {opacity: 1; transform: translateY(-30px) scale(1) rotate(-10deg)}
      80% {opacity: 1; transform: translateY(15px) scale(1) rotate(5deg)}
      100% {opacity: 1; transform: translateY(0) scale(1) rotate(0)}
  }

  @keyframes fade-up {
      0% {opacity: 0; transform: translateX(600px) scale(0) rotate(360deg)}
      60% {opacity: 0.3; transform: translateX(0px) scale(0.3) rotate(0)}
      80% {opacity: 1; transform: translateX(0px) scale(1.03) rotate(0)}
      100% {opacity: 1; transform: translateX(0) scale(1) rotate(0)}
  }

  @keyframes fade-bottom {
      0% {opacity: 0; transform: translateY(600px)}
      60% {opacity: 0.3; transform: translateY(0px)}
      80% {opacity: 1; transform: translateY(0px)}
      100% {opacity: 1; transform: translateY(0)}
  }

  @keyframes fade-upper {
      0% {opacity: 0; transform: translateY(-600px)}
      60% {opacity: 0.3; transform: translateY(0px)}
      80% {opacity: 1; transform: translateY(0px)}
      100% {opacity: 1; transform: translateY(0)}
  }

  @keyframes fade-left {
      0% {opacity: 0; transform: translateX(600px)}
      60% {opacity: 0.3; transform: translateX(0px)}
      80% {opacity: 1; transform: translateX(0px)}
      100% {opacity: 1; transform: translateX(0)}
  }

  @keyframes fade-right {
      0% {opacity: 0; transform: translateX(-600px)}
      60% {opacity: 0.3; transform: translateX(0px)}
      80% {opacity: 1; transform: translateX(0px)}
      100% {opacity: 1; transform: translateX(0)}
  }

  .animation {
    animation: fade-simple 0.4s linear;
  }

  .wrapper-new {
      width: 100%;
      height: 150px;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
  }

  .new {
      width: 130px;
      height: 20px;
      line-height: 15px;
      position: absolute;
      top: 20px;
      left: -35px;
      z-index: 2;
      overflow: hidden;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border: 1px dashed;
      box-shadow:0 0 0 3px #f4ce42;
      background: #f4ce42;
      text-align: center;
      color: white!important;
  }

  .wrapper-stock {
      width: 100%;
      height: 150px;
      position: absolute;
      bottom: 0px;
      right: 0px;
      overflow: hidden;
  }

  .stock {
      width: 130px;
      height: 20px;
      line-height: 15px;
      position: absolute;
      bottom: 15px;
      right: -40px;
      z-index: 2;
      overflow: hidden;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border: 1px dashed;
      box-shadow:0 0 0 3px red;
      background: red;
      text-align: center;
      color: white!important;
  }
</style>
