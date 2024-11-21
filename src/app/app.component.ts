import { Component } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive_forms';
  invoice_userForm:FormGroup;
  editingIndex:number|null = null;
  invoiceItem:any[]=[];
  constructor(){
    this.invoice_userForm = new FormGroup({
      "prod_name": new FormControl("",Validators.required),
      "quantity":new FormControl("",Validators.required),
      "price":new FormControl("",Validators.required),
      "cgst":new FormControl("",Validators.required),
      "sgst":new FormControl("",Validators.required),
      "total":new FormControl("",Validators.required),
      "mobile":new FormControl("",Validators.required),
      "date":new FormControl("",Validators.required)
    })
  }

  addItem(){
    if(this.invoice_userForm.valid){
      if(this.editingIndex !== null){
        this.invoiceItem[this.editingIndex]=this.invoice_userForm.value
        this.editingIndex=null
      }else{
        this.invoiceItem.push(this.invoice_userForm.value);
      }
      this.invoice_userForm.reset();
    }
  }

  editItem(value:number){
    this.editingIndex=value
    this.invoice_userForm.patchValue(this.invoiceItem[value]);

  }

  deleteItem(index:any){
    this.invoiceItem.splice(index,1)

  }
}
