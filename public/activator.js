$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' })
})

function showContacts() {$('#contactsModal').modal()}

function showPurchase() {$('#purchase').modal()}

function tohref(link) {window.location.href = link}

function tolamp(link) {document.getElementById(link).scrollIntoView()}

function totop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function hideShow() {
  let call = document.getElementById("call")
  let viber = document.getElementById("viber")
  let contacts = document.getElementById("contacts")
  if (getComputedStyle(call).opacity == '0') {
    call.style.cssText = "opacity: 1; transition: 1s; transform: translate(-15px, -45px);"
    viber.style.cssText = "opacity: 1; transition: 0.5s; transform: translate(-50px, -15px);"
    contacts.style.cssText = "opacity: 1; transition: 0.1s; transform: translate(-46px, 30px);"
  } else {
    call.style.cssText = "opacity: 0; transition: 0.1s; transform: translate(0, 0);"
    viber.style.cssText = "opacity: 0; transition: 0.5s; transform: translate(0, 0);"
    contacts.style.cssText = "opacity: 0; transition: 1s; transform: translate(0, 0);"
  }
}

$('.carousel').carousel()
