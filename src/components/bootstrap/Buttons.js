// Markup
const template = `
  <h1 class="mb-4">Buttons</h1>
  
  <section class="mb-4">
    <h2 class="mb-4">Solid</h2>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
  </section>

  <section class="mb-4 card">
    <h2 class="mb-4">Outlined</h2>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>    
  </section>




`;

// Buttons Component
class Buttons {
  name = "Buttons";
  version = "1.0.0";
  constructor() {
    return document.createRange().createContextualFragment(template);
  }
  toString() {
    return `${this.name} v${this.version}`;
  }
}

export default Buttons;
