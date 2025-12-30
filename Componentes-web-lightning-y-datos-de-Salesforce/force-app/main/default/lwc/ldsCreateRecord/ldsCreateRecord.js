import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUN_NAME_FIELD from '@salesforce/schema/Account.Name';
export default class LdsCreateRecord extends LightningElement {
    handleButtonClick(){
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields:{
                [ACCOUN_NAME_FIELD.fieldApiName] : 'ACME'
            }
        };
        createRecord(recordInput)
        .then(account =>{
            console.log('Account created with Id: ' + account.id);
        })
        .catch(error =>{
            console.error('Error creating account: ' + error.body.message);
        });
    }
}