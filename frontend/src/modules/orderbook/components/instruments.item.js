import { LitElement, html, customElement } from '@polymer/lit-element';

@customElement('orderbook-instruments-item')
export class OrderBookInstrumentsItem extends LitElement {
    render() {
        return html`
                <style>             
                 :host{
                     padding:10px;
                     border: 1px solid #111111;
                     display: flex;
                     flex-direction: row;
                    align-items: center;
                 }
                 .name{
                     width:100px;
                 }
                 .price{
                     display: flex;
                     flex-direction: row;
                     align-items: center; 
                     padding:4px 0;
                 }
                 .price + .price{
                     margin-left:10px;
                 }
                 instrument-action-button {
                     margin-right:10px;
                     --buttonBg: #FF4136;
                 }
                 instrument-action-button.buy{
                     --buttonBg: #2ECC40;
                 }
                </style>

        <div class="name">
            <slot name="name"></slot>
        </div>
        <div class="price sell">   
            <slot name="sell"></slot>
            <instrument-action-button label="Sell" type="sell" ></instrument-action-button>
        </div> 

        <div class="price buy">
        <slot name="buy"></slot>
            <instrument-action-button class="buy" label="Buy" type="buy" ></instrument-action-button>
        </div>
            `;
    }
}