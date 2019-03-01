import { LitElement, html, customElement } from '@polymer/lit-element';

@customElement('trade-page')
export class TradePage extends LitElement {
    render() {
        return html`
                <style>             
                   :host {  
                        display:flex; 
                        --headerColor: #FFFFFF;
                        flex-direction: column;
                    }   
                    .header{
                        padding:4em 2em; 
                        width:100%;
                        background:#001f3f;
                    }
                </style>

                ${TradePage.mainTemplate}
            `;
    }

    static get mainTemplate() {
        return html` 
        <div class="header">
            <header-bg>Welcome to xxxStockTraderxxx</header-bg>
        </div>
        <div class="trading-area">
            <orderbook-module></orderbook-module>
        </div>`;
    }
}