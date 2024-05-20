namespace demo.common;

using {sap,cuid,managed,temporal} from '@sap/cds/common';


//enumerator 
type Gender : String(1) enum {
  
  male = 'M';
  female = 'F';
  nonBinary = 'B';
  noDisclosure = 'D';
  selfDescribe = 'S';

};

//Amount - abstract entity - why?
abstract entity Amount {
    CURRENCY_CODE : String(4);
    GROSS_AMOUNT : AmountT;
    NET_AMOUNT : AmountT;
    TAX_AMOUNT : AmountT;
}

//amount - look - these appears to be different from others 
//see the simple brackets and @ and the commas
//that means those are annotations
type AmountT  : Decimal(15, 2)@(
Semantics.amount.currencyCode:'CURRENCY_CODE',
  sap.unit : 'CURRENCY_CODE'

);

//Phone number and email - with validations - annotations
type PhoneNumber : String(30)@assert.format : '((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))';
type Email: String(255)@assert.format : '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$';
