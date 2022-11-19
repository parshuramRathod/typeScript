class Check{
    static bankName : string = 'Bank Of India';
    customerName : string;
    accNo: number;
    display(){
        Check.bankName = 'BOB';
        console.log(Check.bankName);
        
    }
}
var objCheck = new Check();
objCheck.display();
