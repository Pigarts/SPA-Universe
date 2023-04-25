import {Router} from "./router.js"
const homeButton = document.querySelector("#homeButton")
const router = new Router()
router.add("/", "/pages/home.html")
router.add("/oUniverso", "/pages/oUniverso.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add("404", "/pages/404.html")

if(homeButton) {
    homeButton.addEventListener('click', function(){
      buttonExploracao()
    })
}
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()