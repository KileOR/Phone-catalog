import ShoppingCart from './ShoppingCart.js';
import Filter from './Filter.js';
import PhonesCatalog from './PhonesCatalog.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.render();

    this.initComponent(PhonesCatalog);
    this.initComponent(ShoppingCart);
    this.initComponent(Filter);
  }

  initComponent(Constructor) {
    new Constructor(this.element.querySelector(`[data-component="${Constructor.name}"`));
  }

  render() {
   this.element.innerHTML = `
   <div class="row">

    <!--Sidebar-->
    <div class="col-md-2">
      <section>
        
      </section>
        <div data-component="Filter"></div>
      <section>
        <div data-component="ShoppingCart"></div>
      </section>
    </div>

    <!--Main content-->
    <div class="col-md-10">
      <div data-component="PhonesCatalog"></div>
    </div>
  </div>
   `;
  }
}