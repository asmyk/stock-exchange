import { LitElement, html, customElement } from '@polymer/lit-element';
import "./components/login";

import { authenticate } from "./auth.service";

@customElement('auth-module')
export class AuthModule extends LitElement {
    render() {
        return html`
                <style> 
                    ul {
                        list-style: none;
                    }
                
                </style>
                ${AuthModule.mainTemplate}
            `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('formSent', this.onFormSent);
    }

    disconnectedCallback() {
        this.removeEventListener('formSent', this.onFormSent);
    }

    onFormSent(e) {
        const login = e.detail.login;
        const pass = e.detail.pass;
        authenticate(login, pass).then((result) => {
            const { isAuthenticated } = result;
            const event = new CustomEvent('auth-changed', { bubbles: true, composed: true, detail: { isAuthenticated } });
            this.dispatchEvent(event);
        });
    }

    static get mainTemplate() {
        return html`<login-form />`;
    }
}