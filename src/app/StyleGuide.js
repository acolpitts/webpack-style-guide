import NavBar from "../components/bootstrap/NavBar";
import Typography from "../components/bootstrap/Typography";
import Alerts from "../components/bootstrap/Alerts"
import Buttons from "../components/bootstrap/Buttons";

// Create a class property without a constructor
class StyleGuide {
  title = "Frontend Design System";
  base = "Bootstrap 4";

  render(root) {
    // Create NavBar component
    const nav = new NavBar();

    // Create main element
    const main = document.createElement("main");
    main.className = "container";

    // Create heading node
    const heading = document.createElement("h1");
    heading.textContent = this.title;
    heading.className = "mt-5 title";

    // Create paragraph node
    const p = document.createElement("p");
    p.textContent = `UI Style Guide based on ${this.base}.`;
    p.className = "mb-5";

    // Create bootstrap examples
    const typographyDemo = new Typography();
    const alertDemo = new Alerts();
    const buttonDemo = new Buttons();

    // Create footer node
    const footer = document.createElement("footer");
    footer.innerHTML = "<br/><br/><br/>"

    // Add content to main element
    main.append(heading, p, typographyDemo, alertDemo, buttonDemo, footer);

    // Append nodes to the DOM
    document.querySelector(root).append(nav, main);
  }
}

export default StyleGuide;
