import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBenefiercyInfo, IUserLoginInfo } from 'src/app/constants/common-classes';
import { URI } from 'src/app/constants/uri';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { AppService } from 'src/app/services/app.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  loader = false;
  accountTransferForm: FormGroup;
  beneficiaryList: IBenefiercyInfo[];
  userInfo: IUserLoginInfo;
  formSubmitted = false;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private remote: ApiCallsService,
    private appSvc: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createFormInputs();
    this.fetchUserInfo();
    this.getBenefiercy();
  }

  fetchUserInfo = () => {
    this.remote
      .get(URI.userInfo)
      .subscribe((response: any) => {
        if (response) {
          this.userInfo = response;
          this.accountTransferForm.get('originAccount')?.setValue(this.userInfo.acountNumber);
          this.accountTransferForm.get('availBalance')?.setValue(this.userInfo.availBalance);
        }
      });
  }

  createFormInputs() {
    this.accountTransferForm = this.fb.group({
      originAccount: [null, Validators.required],
      availBalance: [null, Validators.required],
      destinationAccount: [null, [Validators.required]],
      transferAmount: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      comments: [null],
    });
  }

  getBenefiercy = () => {
    this.loader = true;
    this.remote
      .get(URI.fetchBenefiercy)
      .subscribe((response: any) => {
        this.loader = false;
        if (response) {
          this.beneficiaryList = response;
        }
      });
  }

  transferAmount = () => {
    this.formSubmitted = true;
    if (this.accountTransferForm.valid) {
      const availBalance = this.userInfo.availBalance;
      const transferAmount = Number(this.accountTransferForm.controls['transferAmount'].value);
      let isAmountValid = true;
      if (transferAmount <= 0) {
        this.toastr.error('Amount must be greater than 0');
        isAmountValid = false;
      } else if (transferAmount > availBalance) {
        this.toastr.error('You have less amount to transfer');
        isAmountValid = false;
      }

      if (isAmountValid) {
        const payload = {
          originAccountNo: this.accountTransferForm.controls['originAccount'].value,
          amount: Number(this.accountTransferForm.controls['transferAmount'].value),
          destinationAccount: this.accountTransferForm.controls['destinationAccount'].value,
          comments: this.accountTransferForm.controls['comments'].value
        }
        this.remote
          .send(URI.sendMoney, payload)
          .subscribe((response: any) => {
            if (response) {
              this.router.navigate(['/success']);
            }
          }, (err) => {
            this.router.navigate(['/error']);
          });
      }
    }
  }

  goHome = () => {
    this.router.navigate(['/home']);
  }
}
