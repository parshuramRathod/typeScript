var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = 'BOB';
        console.log(Check.bankName);
    };
    Check.bankName = 'Bank Of India';
    return Check;
}());
var objCheck = new Check();
objCheck.display();
