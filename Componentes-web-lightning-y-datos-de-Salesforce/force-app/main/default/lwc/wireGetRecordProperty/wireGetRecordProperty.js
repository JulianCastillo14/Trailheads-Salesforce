import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

export default class WireGetRecordProperty extends LightningElement {
    @api recordId;
    data;
    error;
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    wireAccount({ error, data }) {
        console.log('Ejecutar lógica cada vez que se recibe un nuevo valor');
        if (data) {
            this.data = data;
            this.error = undefined;
        }
        if (error) {
            this.error = error;
            this.data = undefined;
        }
    };
    get name() {
        return getFieldValue(this.data, ACCOUNT_NAME_FIELD);
    }
}

/**
 * Adaptador de red para una propiedad de registro
 * 
    import { LightningElement, api, wire } from 'lwc';
    import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
    import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

    export default class WireGetRecordProperty extends LightningElement {
        @api recordId;
        @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
        account;
        get name() {
            return getFieldValue(this.account.data, ACCOUNT_NAME_FIELD);
        }
    }
 */