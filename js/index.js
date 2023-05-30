import {Router} from "./router.js"
const homeButton = document.querySelector("#homeButton")
const router = new Router()
router.add("/", "/pages/home.html")
router.add("/theUniverse", "/pages/theUniverse.html")
router.add("/exploration", "/pages/exploration.html")
router.add("404", "/pages/404.html")

if(homeButton) {
    homeButton.addEventListener('click', function(){
      buttonexploration()
    })
}
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()