<template>
  <footer id="footer" class="container-fluid">
      <div class="row">
          <div class="col-12 col-xl-2">
              <div class="d-flex align-items-center justify-content-center">
                  <ul class="socialIcons p-0 mt-3">
                        <li><a href="#footer" class="facebook m-2"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#footer" class="instagram m-2"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#footer" class="youtube m-2"><i class="fab fa-youtube"></i></a></li>
                  </ul>
              </div>
          </div>
          <div class="col-12 col-xl-3">
              <div class="d-flex align-items-center justify-content-center">
                  <ul class="footer-contact p-0 mt-3">
                      <li>
                          <a href="tel:+380989162780">
                              <!--ontouchstart="tohref('tel:+380989162780')"-->
                              <!--onclick="tohref('tel:+380989162780')"-->
                          +38(098) 916-27-80</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="col-12 col-xl-4">
              <div class="d-flex align-items-center justify-content-center">
                  <ul class="footer-contact p-0 mt-3">
                      <li><a href="mailto:deyelektro@gmail.com?subject=From site">
                              <!--ontouchstart="tohref('mailto:deyelektro@gmail.com?subject=From site')"-->
                              <!--onclick="tohref('mailto:deyelektro@gmail.com?subject=From site')"-->
                          deyelektro@gmail.com</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="col-12 col-xl-2">
              <div class="d-flex align-items-center justify-content-center">
                  <ul class="my-info p-0 mt-3">
                      <li>Разработал: Пивоваров А.С.</li>
                      <li><a href="mailto:a.peevovarov@gmail.com?subject=From site about smart house">a.peevovarov@gmail.com</a></li>
                  </ul>
              </div>
          </div>
          <div class="col-0 col-xl-1"></div>
      </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style>

    #footer {
        clear: both;
        margin-top: 0;
        background-color: rgba(128, 166, 173, 1);
        box-shadow: 0px  -2px  4px rgba(0,0,0,0.5);
        position: relative;
        bottom: 0;
        z-index: 4;
        overflow: hidden;

    }

    #footer>div>div {
        padding: 0.5vw 0.1vw 0.5vw 0.1vw;
    }

    #footer>div>div>div {
        position: relative;
        height: 4rem;
        width: 100%;
    }

    .socialIcons {
        list-style-type: none;
        display: inline-block;
        position: relative;
    }

    .socialIcons li {
        display: inline-block;
    }

    .socialIcons li a {
        display: inline-block;
        font-size: 3rem;
        /*color: rgba(128, 166, 173, 1)!important;*/
        transition: all ease 0.5s;
        /*text-shadow: 0px 0px 2px white,
                     0px 0px 2px white,
                     0px 0px 2px white,
                     0px 0px 2px white,
                     0px 0px 2px white,
                     0px 0px 2px white,
                     0px 0px 2px white,
                     0px 0px 2px white;*/
        transform: rotateX(-30deg);
    }

    .socialIcons li a:hover {
        transform: rotateX(-40deg) translateY(-10px);
    }

    .socialIcons li a.facebook {
        color: #365899!important;
    }

    .socialIcons li a.instagram {
        color: #C32AA3!important;
    }

    .socialIcons li a.youtube {
        color: #ff0000!important;
    }

    .socialIcons li a:hover.facebook {
        color: #365899!important;
        text-shadow: 0px 0px 0px #365899,
                     0px 1px 2px #2f4d86,
                     0px 2px 2px #294273,
                     0px 3px 2px #223760,
                     0px 4px 2px #1b2d4e,
                     0px 5px 2px #15223b,
                     0px 6px 2px #0e1728,
                     0px 7px 2px #070c15,
                     0px 8px 2px #010102,
                     0px 9px 2px black,
                     0px 10px 2px black;
    }

    .socialIcons li a:hover.instagram {
        color: #C32AA3!important;
        text-shadow: 0px 0px 0px #C32AA3,
                     0px 1px 2px #ae2591,
                     0px 2px 2px #992180,
                     0px 3px 2px #841c6e,
                     0px 4px 2px #6f185d,
                     0px 5px 2px #5a134b,
                     0px 6px 2px #450f3a,
                     0px 7px 2px #300a28,
                     0px 8px 2px #1b0617,
                     0px 9px 2px #060105,
                     0px 10px 2px black;
    }

    .socialIcons li a:hover.youtube {
        color: #FF0000!important;
        text-shadow: 0px 0px 0px #FF0000,
                     0px 1px 2px #e60000,
                     0px 2px 2px #cc0000,
                     0px 3px 2px #b30000,
                     0px 4px 2px #990000,
                     0px 5px 2px maroon,
                     0px 6px 2px #660000,
                     0px 7px 2px #4d0000,
                     0px 8px 2px #330000,
                     0px 9px 2px #1a0000,
                     0px 10px 2px black;
    }

    .footer-contact {
        list-style-type: none;
        display: inline-block;
        position: relative;
        overflow: hidden;
    }

    .footer-contact li a {
        display: inline-block;
        font-size: 1.8rem;
        color: white!important;
        /*text-shadow: 0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white,
                     0px 0px 1px white;*/
        transition: all ease 0.5s;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
        .footer-contact li a {
            font-size: 1.4rem;
        }

        #footer>div>div:nth-child(2)>div, #footer>div>div:nth-child(3)>div {
            height: 2rem;
        }
    }

    .footer-contact li a:hover {
        text-decoration: none!important;
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

    .my-info {
        list-style-type: none;
        display: inline-block;
        position: relative;
        overflow: hidden;
    }

    .my-info li {
        color: white!important;
        font-size: 1rem;
        /*text-shadow: 0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white,
                     0px 0px 0.5px white;*/
        transition: all ease 0.5s;
    }

    .my-info li a {
        color: white!important;
        display: inline-block;
        cursor: pointer;
        transition: all ease 0.5s;
    }

    .my-info li a:hover {
        text-decoration: none!important;
        transform: rotateX(-40deg);
        color: #FF0000!important;
        text-shadow: 0px   0px   0px  #FF0000,
                     0px   0.5px 1px  #e60000,
                     0px   1px   1px  #cc0000,
                     0px   1.5px 1px  #b30000,
                     0px   2px   1px  #990000,
                     0px   2.5px 1px  maroon,
                     0px   3px   1px  #660000,
                     0px   3.5px 1px  #4d0000,
                     0px   4px   1px  #330000,
                     0px   4.5px 1px  #1a0000,
                     0px   5px   1px  black;
    }
</style>
