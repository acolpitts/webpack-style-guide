

// Markup
const template = `
  <h1 class="mb-4">Alerts</h1>
  
  <section class="mb-4">
    <h2 class="mb-4">Dismissible</h2>
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
      This is a primary alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-secondary alert-dismissible fade show" role="alert">
      This is a secondary alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      This is a success alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      This is a danger alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      This is a warning alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-info alert-dismissible fade show" role="alert">
      This is a info alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-light alert-dismissible fade show" role="alert">
      This is a light alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="alert alert-dark alert-dismissible fade show" role="alert">
      This is a dark alert—check it out!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </section>




`;

// Alerts Component
class Alerts {
  name = "Alerts";
  version = "1.0.0";
  constructor() {
    return document.createRange().createContextualFragment(template);
  }
  toString() {
    return `${this.name} v${this.version}`;
  }
}

export default Alerts;
