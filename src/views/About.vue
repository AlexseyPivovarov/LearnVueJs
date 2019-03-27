<template>
  <div class="about">
    <HomeButtons/>
    <div v-for="(product, index) in productList" :key="index" :id="product.id" class="test">
        <div class="container card text-center mb-3 shadow">
            <div class="row" v-bind:class="isReverse(index)">
                <div class="col-12 col-xl-3 p-0">
                  <Carousel :product="product" :index="index"/>
                </div>
                <div class="col-12 col-xl-9 p-0 card bg">
                    <div class="card-header"><h4 class="mt-2">{{product.name}}</h4></div>
                    <div class="card-body">
                        <pre class="card-text text-left">{{product.description}}</pre>
                    </div>
                    <div class="card-footer pt-0 pb-0 pl-3 pr-3 bg-transparent border-0">
                        <div class="row justify-content-between">
                            <div class="col-5 col-xl-3 p-0">
                                <div v-if="product.price" class="bg-full h5 p-2 m-0">{{product.price}} грн
                                    <div v-if="product.units != 'none'">{{product.units}}</div>
                                </div>
                            </div>
                            <div class="col-5 col-xl-2 bg-full p-2 h5 m-0 main-btn sell-btn"
                                 ontouchstart="showPurchase()"
                                 data-toggle="modal"
                                 data-target="#purchase"
                                 data-product="name"
                                 data-id="id"
                            >Заказать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {% include "components/modal.html" with product=product number=forloop.counter %} -->
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import HomeButtons from '@/components/HomeButtons.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  props: {
    category: {
      type: Number,
      default: 0
    }
  },
  computed: {
    productList () {
      const category = this.category
      return this.$store.state.objectList.filter(function (item) {
        return item.category === category
      })
    }
  },
  methods: {
    isReverse (index) {
      if (index % 2 === 1) {
        return {
          'd-flex': true,
          'flex-row-reverse': true
        }
      } else {
        return {
          'd-flex': false,
          'flex-row-reverse': false
        }
      }
    }
  },
  name: 'home',
  components: {
    Footer,
    HomeButtons,
    Carousel
  }
}
</script>
<style>
  .test {
    border-top: 84px solid transparent;
    margin-top: -84px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
  }

  .sell-btn {
    font-size: 1.5em!important;
  }

  .card-body {
    box-shadow: inner 0 0 4px black;
  }

  .card {
    border-radius: 0!important;
  }

  .bg {
    background-color: rgba(128, 166, 173, 0.2);
  }

  .bg-full {
    background-color: rgba(128, 166, 173, 1);
  }

  .card-header {
    background-color: rgba(128, 166, 173, 1);
    color: white!important;
    /*text-shadow: 0px   0px   0px  #ffffff,
                 0px   0.5px 1px  #dddddd,
                 0px   1px   1px  #bbbbbb,
                 0px   1.5px 1px  #aaaaaa,
                 0px   2px   1px  #999999,
                 0px   2.5px 1px  #888888,
                 0px   3px   1px  #777777,
                 0px   3.5px 1px  #666666,
                 0px   4px   1px  #444444,
                 0px   4.5px 1px  #222222,
                 0px   5px   1px  #000000;*/
  }

  .card-header:first-child {
    border-radius: 0!important;
  }

  .card-header h4 {
    /*transform: translateY(-3.5px) rotateX(-15deg);*/
  }

  .card-footer {
    color: white;
  }

  .main-btn,
  .main-btn:focus,
  .main-btn:visited {
    box-shadow: 0px 0px 4px rgba(0,0,0,1)!important;
    background-color: rgba(128, 166, 173, 1)!important;
    border: none!important;
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
</style>
