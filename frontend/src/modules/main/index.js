import { LitElement, html, customElement } from '@polymer/lit-element';
import "./components/app";

@customElement('main-module')
export class MainModule extends LitElement {
    static get properties() {
        return {
            isAuthenticated: { type: Boolean, value: false }
        };
    }

    constructor() {
        super();
        this.onAuthStateChanged = this.onAuthStateChanged.bind(this);
    }

    onAuthStateChanged(e) {
        this.setAttribute('isAuthenticated', e.detail.isAuthenticated);
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('auth-changed', this.onAuthStateChanged)
    }

    disconnectedCallback() {
        this.removeEventListener('auth-changed', this.onAuthStateChanged);
    }

    render() {
        return html`
                <style>
                    :host { 
			            color: #111111; 
                    }
                    ul {
                        list-style: none;
                    }
                
                </style>

        <main-app>
                ${this.isAuthenticated ? MainModule.tradingTemplate : MainModule.tradingTemplate}
                </main-app>
            `;
    }

    static get loginTemplate() {
        return html`<login-page></login-page>`;
    }
    static get tradingTemplate() {
        return html`<trade-page></trade-page>`;
    }
}