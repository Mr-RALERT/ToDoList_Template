
let box = document.querySelector(".box");
let input = document.querySelector("input");
let addButton = document.querySelector(".add-box button");
let div = document.querySelector("body > div");


let counter = 0;



if (div.length >= 10) {
    div.style.cssText = "height : fit-content;"
}


addButton.onclick = function () {
    if (input.value != "") {
        let sp = document.createElement("span");
        sp.innerHTML = input.value;
        sp.setAttribute("id",`${Math.random()}`)
        let del = document.createElement("button");
        del.innerHTML = "Delete"
        window.localStorage.setItem(sp.getAttribute("id"),sp.innerHTML)
        sp.appendChild(del)
        box.appendChild(sp)
        del.addEventListener("click",(e) => {
            e.currentTarget.parentElement.remove()
            window.localStorage.removeItem(e.currentTarget.parentElement.id)
        })
    }
    input.value = ""
}

window.onload = function () {
    if (window.localStorage.length != "") {
        for (let i = 0 ; i < window.localStorage.length ; i++) {
            window.localStorage.getItem(window.localStorage.key(i))
            let sp = document.createElement("span");
            sp.innerHTML = window.localStorage.getItem(window.localStorage.key(i));
            sp.setAttribute("id",window.localStorage.key(i));
            let del = document.createElement("button");
            del.innerHTML = "Delete"
            sp.appendChild(del)
            box.appendChild(sp)
            del.addEventListener("click",(e) => {
                e.currentTarget.parentElement.remove()
                window.localStorage.removeItem(e.currentTarget.parentElement.id)
            })

        }
    }
}

// window.localStorage.clear()

if (window.localStorage.length >= 8) {
    div.style.cssText = "height : fit-content;"
}else {
    div.style.cssText = "height : 700px;"

}
