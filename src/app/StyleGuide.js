import NavBar from "../components/navbar/NavBar";

// Create a class property without a constructor
class StyleGuide {
  title = "Webpack Design System";
  base = "Bootstrap 4, Sass, and PostCSS";
  render(root) {
    // Create a NavBar component
    const nav = new NavBar();

    // Create heading node
    const heading = document.createElement("h1");
    heading.textContent = this.title;
    heading.classList.add("red");

    // Create paragraph node
    const p = document.createElement("p");
    p.textContent = `UI Style Guide based on ${this.base}.`;

    // Create a flexbox container
    const main = document.createElement("main");
    main.className = "flex col container"

    main.append(heading, p)

    // Append nodes to the DOM
    document.querySelector(root)
     .append(nav, main);
  }
}

export default StyleGuide;
