<template>
  <div v-if="product.image2 != '/media/No-image.jpg' || product.image3 != '/media/No-image.jpg' || product.image4 != '/media/No-image.jpg' || product.image5 != '/media/No-image.jpg' || product.image6 != '/media/No-image.jpg'" :id="'carouselExampleIndicators-' + index" class="carousel slide container p-0 prev zindex bg" data-ride="carousel">
    <div v-if="!product.isnew" class="wrapper-new"><div class="new">Новинка</div></div>
    <div v-if="!product.stock" class="wrapper-stock"><div class="stock">Акция</div></div>
    <ol class="carousel-indicators">
      <li :data-target="'#carouselExampleIndicators-' + index" data-slide-to="0" class="active"></li>
        <li v-if="product.image2 != '/media/No-image.jpg'" :data-target="'#carouselExampleIndicators-' + index" :data-slide-to="generator.next().value"></li>
        <li v-if="product.image3 != '/media/No-image.jpg'" :data-target="'#carouselExampleIndicators-' + index" :data-slide-to="generator.next().value"></li>
        <li v-if="product.image4 != '/media/No-image.jpg'" :data-target="'#carouselExampleIndicators-' + index" :data-slide-to="generator.next().value"></li>
        <li v-if="product.image5 != '/media/No-image.jpg'" :data-target="'#carouselExampleIndicators-' + index" :data-slide-to="generator.next().value"></li>
        <li v-if="product.image6 != '/media/No-image.jpg'" :data-target="'#carouselExampleIndicators-' + index" :data-slide-to="generator.next().value"></li>
    </ol>
    <div class="carousel-inner" data-toggle="modal" :data-target="'#modal-' + index">
      <div class="carousel-item active">
        <div class="item" :style="{backgroundImage: 'url(http://www.kvazar-light.net' + product.image + ')'}"></div>
      </div>
      <div v-if="product.image2 != '/media/No-image.jpg'" class="carousel-item">
        <div class="item" :style="{backgroundImage: 'url(http://www.kvazar-light.net' + product.image2 + ')'}"></div>
      </div>
      <div v-if="product.image3 != '/media/No-image.jpg'" class="carousel-item">
        <div class="item" :style="{backgroundImage: 'url(http://www.kvazar-light.net' + product.image3 + ')'}"></div>
      </div>
      <div v-if="product.image4 != '/media/No-image.jpg'" class="carousel-item">
        <div class="item" :style="{backgroundImage: 'url(http://www.kvazar-light.net' + product.image4 + ')'}"></div>
      </div>
      <div v-if="product.image5 != '/media/No-image.jpg'" class="carousel-item">
        <div class="item" :style="{backgroundImage: 'url(http://www.kvazar-light.net' + product.image5 + ')'}"></div>
      </div>
      <div v-if="product.image6 != '/media/No-image.jpg'" class="carousel-item">
        <div class="item" :style="{backgroundImage: 'url(http://www.kvazar-light.net' + product.image6 + ')'}"></div>
      </div>
    </div>
    <a class="carousel-control-prev" :href="'#carouselExampleIndicators-' + index" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" :href="'#carouselExampleIndicators-' + index" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div v-else class="container p-0 prev" data-toggle="modal" :data-target="'#modal-' + index">
    <div class="item bg" :style="{backgroundImage: 'url(http://www.kvazar-light.net' + product.image + ')'}">
      <div v-if="product.isnew" class="wrapper-new"><div class="new">Новинка</div></div>
      <div v-if="product.stock" class="wrapper-stock"><div class="stock">Акция</div></div>
    </div>
  </div>
</template>
<script>
export default {
  props: [ 'product', 'index' ],
  data: function () {
    return {
      generator: this.gen()
    }
  },
  methods: {
    gen: function * () {
      for (let i = 1; i < 7; i++) { yield i }
    }
  }
}
</script>
<style>
  .zindex {
    position: relative;
    z-index: 0;
  }

  .prev {
    height: 100%;
    min-height: 300px;
    overflow: hidden;
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
    z-index: 1;
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
    z-index: 1;
    overflow: hidden;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border: 1px dashed;
    box-shadow:0 0 0 3px red;
    background: red;
    text-align: center;
    color: white!important;
  }

  .item {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 300px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .carousel-inner {
    position: relative;
    height: 100%
  }

  .carousel-item {
    position: relative;
    height: 100%;
  }

  .carousel-indicators li {
    background-color: rgba(128, 166, 173, 0.9);
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%238aa' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e")
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%238aa' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e")
  }
</style>
