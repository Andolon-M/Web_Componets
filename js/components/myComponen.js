class H7 extends HTMLElement{
    size = "1.3rem";
    #font_family = "cursive";
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = /*html*/ `
        <div> hola desde jsñ</div>
        ` ;
    }
}

customElements.define("my-h7", H7)