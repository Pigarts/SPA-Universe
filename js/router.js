export class Router {

    routes = {}

    add(routeName, link) {
        this.routes[routeName] = link
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
        window.history.pushState({}, "", event.target.href)
        this.handle()
        }
        
    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route).then(data => data.text()).then(html => document.querySelector("#app").innerHTML = html) 
        
        
        let background = document.querySelector(".background");
        let backgroundImg;
        
        if (pathname === "/") {
            backgroundImg = "url(https://i.imgur.com/fLUeXma.png)";
        } else if (pathname === "/oUniverso") {
            backgroundImg = "url(https://i.imgur.com/5TQC88y.png)";
        } else if (pathname === "/exploracao") {
            backgroundImg = "url(https://i.imgur.com/AkPgmoa.png)";
        } else {
            backgroundImg = "url(https://i.imgur.com/fLUeXma.png)";
        }

        background.style.backgroundImage = backgroundImg;
        
        let nav1 = document.querySelector("#nav1")
        let nav2 = document.querySelector("#nav2")
        let nav3 = document.querySelector("#nav3")
   

        if (pathname === "/") {
           nav1.classList.add("selected")
           nav2.classList.remove("selected")
           nav3.classList.remove("selected");
        } else if (pathname === "/oUniverso") {
            nav1.classList.remove("selected")
            nav2.classList.add("selected")
            nav3.classList.remove("selected");
        } else if (pathname === "/exploracao") {
            nav1.classList.remove("selected")
            nav2.classList.remove("selected")
            nav3.classList.add("selected");
        } else {
            backgroundImg = "url(https://i.imgur.com/fLUeXma.png)";
        }
        
    }
    
       
        
}


