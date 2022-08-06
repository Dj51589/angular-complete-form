export class UserLoginInfo {
  user: string;
  token: string;
}

export class IUserLoginInfo {
  name: string;
  accountType: string;
  availBalance: number;
  loanAmount: number;
  acountNumber: string
}


export class IBenefiercyInfo {
  name: string;
  accountType: string;
  accountNumber: string;
}

export class IStatement {
  transDate: string;
  transId: string;
  amount: number;
  comment: string
}