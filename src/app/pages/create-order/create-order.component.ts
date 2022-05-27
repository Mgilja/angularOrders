import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OrdersService } from 'src/app/orders.service';
import { Order } from 'src/app/order-model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  enteredTitle="";
  enteredCustomer="";
  enteredPrice ="";
  enteredDate="";
  
  order:Order[];
  orderId:any;
  form:FormGroup;
  mode='create';
  submitted = false;
  isAddMode:boolean;
  status = true
  
  
  constructor(
    public orderService:OrdersService, 
    public router:Router, 
    public route:ActivatedRoute,
    private http:HttpClient
     ) {} 

 
 private createOrder() {
  this.orderService.addOrder(
    
    this.form.value.title, 
    this.form.value.customer,
    
    this.form.value.date,
    this.form.value.price,
    this.status,)
  .subscribe((order:Order)=> {
    
    this.router.navigate(["/"])
 })
}


 private updateOrder() {

      
   this.orderService.updateOrder(
     
        this.orderId,
        this.form.value.title, 
        this.form.value.customer,
        this.form.value.date,
        this.form.value.price,
        this.status
      ).subscribe(order => console.log(order))

 
    
 }
 
  onAddOrder() {
    if(this.form.invalid) {
      return
    }
   
       if(this.isAddMode) {
        return  this.createOrder()
         console.log('hello');
         
         
       }
       else {
         return  this.updateOrder()
       }
    
   
  
}    
  

  ngOnInit(): void {
    this.orderId = parseInt(this.route.snapshot.paramMap.get('orderId')!, 10);
    this.isAddMode = !this.orderId
//  this.route.snapshot.params['orderId'];

    this.form = new FormGroup( {
      title:new FormControl(null, {validators:[Validators.required,Validators.minLength(3)]}),
      customer:new FormControl(null, {validators:[Validators.required,Validators.minLength(3)]}),
      price:new FormControl(null, {validators:[Validators.required]}),
      date:new FormControl(null, {validators:[Validators.required]}),
    })

    if(!this.isAddMode){
      this.orderService.getOrder(this.orderId).pipe().subscribe(data => this.form.patchValue(data))
      
    }
  
  }
  
}

 
