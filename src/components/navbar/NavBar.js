// Assets
import Logo from "../../assets/images/webpack.svg";

// Styles
import "./NavBar.scss";

// Markup
const template = `
  <nav class="navbar">
    <section class="flex container">
      <img src="${Logo}" height="36px" />
      <ul>
        <li class="active">Atoms</li>
        <li>Molecules</li>
        <li>Organsims</li>
        <li>Template</li>
        <li>Pages</li>
      </ul>
    </section>
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
    return `${this.name} v${this.version}`
  }
}

export default NavBar;

