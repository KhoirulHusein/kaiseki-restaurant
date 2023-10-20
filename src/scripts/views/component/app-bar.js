class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav tabindex="0" id="drawer">
        <div class="navbar-nav">
          <a class="logo-image" href="/">
            <img class="logo" src="./images/logo.png" alt="Logo Website Kaisekai Restaurant">
          </a>
          <ul class="nav-list">
            <li class="nav-item"><a href="index.html">Home</a></li>
            <li class="nav-item"><a href="#/like">Favorite</a></li>
            <li class="nav-item"><a href="https://github.com/KhoirulHusein">About Us</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
