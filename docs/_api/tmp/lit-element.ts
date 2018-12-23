import {TemplateResult} from 'lit-html';
import {render} from 'lit-html/lib/shady-render';

import {PropertyValues, UpdatingElement} from './lib/updating-element.js';

export * from './lib/updating-element.js';
export * from './lib/decorators.js';
export {html, svg} from 'lit-html/lit-html';

export class LitElement extends UpdatingElement {

  /**
   * Render method used to render the lit-html TemplateResult to the element's
   * DOM.
   * @param {TemplateResult} Template to render.
   * @param {Element|DocumentFragment} Node into which to render.
   * @param {String} Element name.
   */
  static render = render;

  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * * @param _changedProperties Map of changed properties with old values
   */
  protected update(changedProperties: PropertyValues) {
    super.update(changedProperties);
    const templateResult = this.render() as any;
    if (templateResult instanceof TemplateResult) {
      (this.constructor as typeof LitElement)
          .render(templateResult, this.renderRoot!,
                  {scopeName : this.localName!, eventContext : this});
    }
  }

  /**
   * Invoked on each update to perform rendering tasks. This method must return
   * a lit-html TemplateResult. Setting properties inside this method will *not*
   * trigger the element to update.
   */
  protected render(): TemplateResult|void {}
}
