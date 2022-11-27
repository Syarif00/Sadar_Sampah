class FootBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      
      `;
    }
  }
   
  customElements.define('foot-bar', FootBar);