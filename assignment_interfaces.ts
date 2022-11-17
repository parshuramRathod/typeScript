interface ILoanEnquiry {
enquiryPersonName: string,
enquiryPersonMobileNo:number,
bankName:string,
loanType:string,
loanAmount:number,
interestRate:number,
}
let loanEnquiry:ILoanEnquiry = {
    enquiryPersonName: "Ajay",
    enquiryPersonMobileNo:9975999389,
    bankName:"HDFC bank",
    loanType:"Home Loan",
    loanAmount:250000,
    interestRate:7.8
}
console.log(loanEnquiry);


interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj:IEmployee = {
    empCode:1,
    name:"Ajay",
    gender:"Male"
}
console.log(empObj);