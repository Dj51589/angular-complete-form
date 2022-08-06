import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validation-messages',
  templateUrl: './form-validation-messages.component.html',
  styleUrls: ['./form-validation-messages.component.scss']
})
export class FormValidationMessagesComponent implements OnInit {
  @Input() inputControl: FormControl;
  @Output() parentFun ?= new EventEmitter();
  @Input() fieldName: string;
  constructor() { }

  ngOnInit(): void {
      
  }

}
