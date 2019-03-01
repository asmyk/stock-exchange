import { LitElement, html, customElement, property } from '@polymer/lit-element';

@customElement('instrument-action-button')
export class OrderBookInstrumentsItem extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            type: { type: String }
        }
    }

    submitHandler(e) {
        e.preventDefault();
        const quantity = this.shadowRoot.getElementById("quantity-input").value;
        const event = new CustomEvent("actionClick", { bubbles: true, composed: true, detail: { quantity, type: this.type } });
        this.dispatchEvent(event);
    }

    render() {
        return html`
                <style>             
                 button{
                     padding:10px;
                     border: 1px solid #111111;
                     background: transparent;
                     color: #fff;
                 }

                 input[type="number"] {
                    width: 60px;
                    height: 20px;
                    margin-left:10px;
                    padding-right: 50px;
                }

                input[type="submit"] {
                    margin-left: -50px;
                    height: 25px;
                    width: 50px;
                    background: var(--buttonBg);
                    color: white;
                    border: 0;
                    -webkit-appearance: none;
                }
                </style>

                <form @submit="${this.submitHandler}" >
                     <input type="number" min="1" max="10" id="quantity-input"><input id="submit-input" type="submit" value="${this.label}">
                 </form>
            `;
    }
}
