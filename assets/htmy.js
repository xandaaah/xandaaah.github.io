class CustomElement extends HTMLElement {
    connectedCallback() {
        let name = this.getAttribute('name')
        let template = this.innerHTML
        
        class ActualCustomElement extends HTMLElement {
            connectedCallback() {
                let innerHTML = template.replaceAll('{innerhtml}', this.innerHTML).replaceAll('{name}', name)
                for (const attrib of this.attributes) {
                    innerHTML = innerHTML.replaceAll(`(${attrib.name})`, attrib.value)
                    window.console.log(attrib.name, innerHTML)
                }
                this.innerHTML = innerHTML
            }
        }
        
        this.innerHTML = ""

        customElements.define(name, ActualCustomElement)
    }
}
class IncludeElement extends HTMLElement {
    connectedCallback() {
        fetch(this.getAttribute('src')).then((resp) => {
            resp.text().then((text) => {
                this.innerHTML = text
            })
        })
    }
}
class StyleElement extends HTMLElement {
    connectedCallback() {
        fetch(this.getAttribute('src')).then((resp) => {
            resp.text().then((text) => {
                this.innerHTML = `<style>${text}</style>`
            })
        })
    }
}
customElements.define('x-custom', CustomElement);
customElements.define('x-include', IncludeElement);
customElements.define('x-style', StyleElement);
