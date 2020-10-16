class Header extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
		<h1>This is my header</h1>
		`
	}
}


class Footer extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
		<h1>This is my footer</h1>
		`
	}
}

customElements.define('my-header', Header);
customElements.define('my-footer', Footer);