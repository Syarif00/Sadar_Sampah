class NavBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <nav>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/">Perpustakaan</a></li>
          <li><a href="/">Peta</a></li>
          <li><a href="/">Tentang kami</a></li>
        </ul>
      </nav>
      `;
    }
  }
   
  customElements.define('nav-bar', NavBar);