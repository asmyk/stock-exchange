import { LitElement, html, customElement } from '@polymer/lit-element';

@customElement('header-bg')
export class HeaderComponent extends LitElement {
    render() {
        return html`
                <style>             
                   :host {  
                        color: var(--headerColor, #0074D9);
                    } 
                </style>

                ${HeaderComponent.mainTemplate}
            `;
    }

    static get mainTemplate() {
        return html`<h2><slot></slot></h2>`;
    }
}