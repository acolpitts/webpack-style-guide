// Assets
import Logo from "../../assets/images/webpack.svg";

// Markup
const template = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"><img src="${Logo}" height="36px" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Atoms <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Molecules</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Organisms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Template</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Pages</a>
        </li>
      </ul>
    </div>
  </nav>
`;

// Example Component
class NavBar {
  name = "NavBar";
  version = "1.0.0";
  constructor() {
    return document.createRange().createContextualFragment(template);
  }
  toString() {
    return `${this.name} v${this.version}`;
  }
}

export default NavBar;
