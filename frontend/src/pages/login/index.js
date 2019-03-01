import { LitElement, html, customElement } from '@polymer/lit-element';

@customElement('login-page')
export class LoginPage extends LitElement {
    render() {
        return html`
                <style>             
                   :host {  
                        display:flex;
                        align-items:center;
                        flex-direction: column;
                    }   
                    .header {
                        color: #f9f9f9;
                    } 
                </style>

                ${LoginPage.mainTemplate}
            `;
    }

    static get mainTemplate() {
        return html` 
        <div class="header"> 
            <header-bg>Login to xxxStockTraderxxx</header-bg>
        </div>

        <div class="form">
            <auth-module class='auth-container'>
            </auth-module>
        </div>`;
    }
}