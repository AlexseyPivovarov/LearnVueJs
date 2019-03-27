<template>
  <div class="buttons">
    <ul id="flyouts">
      <li><a onclick="hideShow()"><i class="fa fa-phone"></i></a>
        <a  onclick="tohref('tel:+380989162780')"
            ontouchstart="tohref('tel:+380989162780')"
            id="call"
            data-toggle="tooltip"
            data-placement="left"
            data-html="true"
            tabindex="0"
            data-trigger="hover"
            title="<span class='info'><h5 style='white-space: nowrap;'>+38(098) 916-27-80</h5></span>"
        ><i class="fas fa-phone-volume"></i></a>
        <a  onclick="tohref('viber://chat?number=380989162780')"
            ontouchstart="tohref('viber://chat?number=380989162780')"
            id="viber"
            data-toggle="tooltip"
            data-placement="left"
            data-html="true"
            tabindex="0"
            data-trigger="hover"
            title="<span class='info'><h5 style='white-space: nowrap;'>380989162780</h5></span>"
        ><i class="fab fa-viber"></i></a>
        <a id="contacts"
           ontouchstart="showContacts()"
           title="Контакты"
           data-toggle="modal"
           data-target="#contactsModal"
        ><i class="fas fa-map-marked-alt"></i></a>
        <a id="circle" href="" style="opacity: 0;"></a>
      </li>
      <li><a href="#" onmouseover="totop()"></a> <a title="Умный дом" href="#house"></a></li>
      <li><a href="#lights" onmouseover="tolamp('lights')"></a> <a title="Освещение" href="#lights"></a></li>
      <li><a href="#lamp" onmouseover="tolamp('lamp')"></a> <a title="Лампы" href="#lamp"></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'homebuttons'
}
</script>
<style>
  .buttons {list-style: none; position: fixed; z-index: 10; bottom: 0; right: 5px; width: 50px; user-select: none;}

  #flyouts a {color: white!important;}

  #flyouts {list-style: none; position: relative; margin: 0;}

  #flyouts li {position: relative; display: block; right: 40px; width: 50px; margin: 0 0 5px 0;}

  #flyouts li a:nth-child(1) {
    background-color: rgba(128, 166, 173, 1);
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center center;
    /*box-shadow: 0px 0px 4px rgba(0,0,0,1);*/
    height: 50px;
    border-radius: 50%;
    position: relative;
    display: block;
    z-index: 11;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  #flyouts li:nth-child(1) a:nth-child(1) {box-shadow: 0px 0px 4px rgba(0,0,0,1);}

  #flyouts li:nth-child(1) a:nth-child(1) i {
    display: inline-block!important;
    position: relative;
    top: 11px;
    left: 10px;
    font-size: 30px;
    color: #f4ce42!important;
    z-index: 15;
  }

  #flyouts li:nth-child(1):hover a:nth-child(1):hover {animation: ring 0.5s linear;}

  #flyouts li:nth-child(2) a:nth-child(1) {background-image: url("/img/smartfon dark2.png");}
  #flyouts li:nth-child(3) a:nth-child(1) {background-image: url("/img/Lustra2 dark.ico");}
  #flyouts li:nth-child(4) a:nth-child(1) {background-image: url("/img/lampa black.ico");}

  #flyouts:hover li:nth-child(2):hover a:nth-child(1) {background-image: url("/img/smartfon light2.png");}
  #flyouts:hover li:nth-child(3):hover a:nth-child(1) {background-image: url("/img/lustra2 light.ico");}
  #flyouts:hover li:nth-child(4):hover a:nth-child(1) {background-image: url("/img/lampa light.ico");}

  #flyouts:hover li:nth-child(1):hover a:not(:nth-child(1)) {
    padding: 7px 0 0 7px;
    height: 85%; width: 85%;
    min-width: 20px!important;
    font-size: 27px;
    border-radius: 50%;
    opacity: 1;
  }

  #flyouts li:nth-child(1) a:not(:nth-child(1)) {
    padding: 7px 0 0 7px;
    height: 85%; width: 85%;
    min-width: 20px!important;
    font-size: 27px;
    border-radius: 50%;
    transform: translate(-5px, 5px);
    text-shadow: 0px 0px 4px rgba(255,255,255,0.7);
    opacity: 0;
  }

  #flyouts li:nth-child(1) a:nth-child(2) {padding: 0 0 0 11px!important;}
  #flyouts li:nth-child(1) a:nth-child(3) {padding: 0 0 0 8px!important;}
  #flyouts li:nth-child(1) a:nth-child(4) {padding: 0 0 0 7px!important;}

  #flyouts:hover li:nth-child(1):hover a:hover:not(:nth-child(1)) {
    color: #f4ce42!important;
  }

  #flyouts:hover li:nth-child(1):hover a::before {content: none;}

  #flyouts:hover li:nth-child(1):hover a:nth-child(2) {-webkit-transform: translate(-15px, -45px);}
  #flyouts:hover li:nth-child(1):hover a:nth-child(3) {-webkit-transform: translate(-50px, -15px);}
  #flyouts:hover li:nth-child(1):hover a:nth-child(4) {-webkit-transform: translate(-46px, 30px);}
  #flyouts:hover li:nth-child(1):hover a:nth-child(5) {-webkit-transform: translate(-50px, -15px) scale(3); z-index: 7;}

  #flyouts li a:not(:nth-child(1)) {
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 10;
    text-decoration: none;
    -webkit-transition: 0.2s ease;
    transition: 0.2s ease;
    min-width: 50px;
    background-color: rgba(128, 166, 173, 0.8);
    white-space: nowrap;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    font-size: 20px;
    box-shadow: 0px 0px 4px rgba(0,0,0,1);
  }

  #flyouts:hover li:hover a:not(:nth-child(1)) {color: white!important; padding: 10px 55px 0 20px; box-shadow: 0px 0px 4px rgba(0,0,0,1);}

  #flyouts:hover li:hover a::before {content: attr(title);}

  @keyframes ring {
    0%{transform: rotate(0deg);}
    25%{transform: rotate(20deg);}
    50%{transform: rotate(-20deg);}
    75%{transform: rotate(20deg);}
    100%{transform: rotate(0deg);}
  }
</style>
