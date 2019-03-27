<template>
  <div id="automatic" class="container-fluid">
      <div class="row">
          <div class="col-6"><div class="d-flex align-items-center justify-content-center">
              <router-link to="/about" class="3d">Промышленная автоматизация</router-link>
          </div></div>
          <div class="col-6"><div class="d-flex align-items-center justify-content-center">
              <router-link to="/about" class="3d">Охранная сигнализация</router-link>
          </div></div>
      </div>
</div>
</template>
<script>
export default {
  neme: 'Automatic'
}
</script>
<style>

    #automatic {
        background-color: rgba(128, 166, 173, 1);
        box-shadow:  0px  2px  4px rgba(0,0,0,0.5), 0px  -2px  4px rgba(0,0,0,0.5);
        position: relative;
        z-index: 1;
    }

    #automatic>div>div {
        position: relative;
        padding: 0.5vw 0.1vw 0.5vw 0.1vw;
    }

    #automatic>div>div>div {
        position: relative;
        height: 10vw;
        width: 100%;
        border: solid 0.1vw white;
        border-radius: none;
        z-index: 2;
        background-size: 20%;
        background-repeat: no-repeat;
        color: white!important;
        font-size: 2.5vw;
        padding-left: 10vw;
    }

    #automatic>div>div:nth-child(1)>div {
        background-image: url('/img/icon/proizvodstvo.png');
        background-position: 1vw 0.7vw;

    }

    #automatic>div>div:nth-child(2)>div {
        background-image: url('/img/icon/ajax-icon.png');
        background-position: 3vw -1vw;

    }

    #automatic>div>div>div a {
        transition: all ease 0.5s;
    }

    #automatic>div>div>div a:hover {
        transform: translateY(-3.5px) rotateX(-30deg);
        color: white!important;
        text-shadow: 0px   0px   0px  #ffffff,
                     0px   0.5px 1px  #dddddd,
                     0px   1px   1px  #bbbbbb,
                     0px   1.5px 1px  #aaaaaa,
                     0px   2px   1px  #999999,
                     0px   2.5px 1px  #888888,
                     0px   3px   1px  #777777,
                     0px   3.5px 1px  #666666,
                     0px   4px   1px  #444444,
                     0px   4.5px 1px  #222222,
                     0px   5px   1px  #000000;
    }

</style>
