class Elem {
    onclick(func) {
        this.elem.addEventListener("click", func);
    }
    click() {
        this.elem.click()
    }
    hide() {
        this.elem.style.visibility = "hidden"
    }
    show() {
        this.elem.style.visibility = "visible"
    }
    constructor(elem) {
        this.elem = elem
    }
}

function $(elem) {
    if (typeof elem === "string") {
        // Selector
        let real_elem = document.querySelector(elem)
        if (real_elem === null) {return null}
        return new Elem(real_elem)
    }
}