<template>
  <div id="lamp" class="container-fluid const mb-0 p-5 d-flex align-items-center justify-content-center">
    <div class="row d-flex flex-row-reverse" v-if="showed">
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
                    Лампы
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'lamp',
  data: function () {
    return {
      width: 275
    }
  },
  computed: {
    showed () {
      return this.$store.state.lamp
    },
    square () {
      return this.$store.state.objectList.filter(function (item) {
        return item.category === 0 && item.rotation === 3
      })
    },
    landscape () {
      return this.$store.state.objectList.filter(function (item) {
        return item.category === 0 && item.rotation === 2
      })
    },
    tablet () {
      return this.$store.state.objectList.filter(function (item) {
        return item.category === 0 && item.rotation === 1
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
