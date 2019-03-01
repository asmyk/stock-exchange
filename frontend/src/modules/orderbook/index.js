import { LitElement, html, customElement } from '@polymer/lit-element';
import "./components/instruments.item";
import './components/action-button';
import { InstrumentsService } from "./instruments.service";

@customElement('orderbook-module')
export class OrderBookModule extends LitElement {
    handleActionButtonClick(e) {
        console.log("action", e.detail);
    }

    constructor() {
        super();
        this.instrumentsService = new InstrumentsService();
    }

    render() {
        const items = this.renderInstruments(this.instrumentsService.getQuotes()); 
        
        return html`
                <style>             
                 :host{
                    border-right:1px solid #DDDDDD;
                 }
                 orderbook-instruments-item{
                    margin-top:5px;
                    max-width:500px;
                 }
                </style>
                
                ${items}
            `;
    }

    renderInstruments(data) {
        const items = [];
        for (let i = 0; i < data.length; i++) {
            items.push(html`
            <orderbook-instruments-item @actionClick="${this.handleActionButtonClick}">
                <div slot="name">${data[i].name}</div>
                <div slot="buy">$${data[i].buyPrice}</div>
                <div slot="sell">$${data[i].sellPrice}</div>
            </orderbook-instruments-item>`);
        }
        return items
    }

}