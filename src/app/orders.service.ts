import { Injectable } from '@angular/core';
import { Order } from './order-model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable,of, } from 'rxjs';
import { catchError,map,tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

   form:FormGroup
  constructor(private http:HttpClient,private router:Router, public fb: FormBuilder,private route:ActivatedRoute) { }

  // order:Order;
  private ordersUrl = 'api/orders/'
  httpOptions = {
    headers: new HttpHeaders('PATCH')
  };

   private orders:Order[] = [];



  getOpenedOrders() {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
   map(ordersStatus => {
     let status = ordersStatus.filter(open => open.status === true);
     
     console.log(status);
     return status
   })
   
 )
}

getClosedOrders() {
   return this.http.get<Order[]>(this.ordersUrl).pipe(
  map(ordersStatus => {
    let status = ordersStatus.filter(open => open.status === false);
    
    console.log(status);
    return status
  })
 )
}
closeOrder(id:number,status:boolean) {
  return this.http.put<Order>(this.ordersUrl + id,{status}).pipe(tap(order=> {
    
    console.log(order);
    

    
  }))
}


getOrders() {
  // const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
 return this.http.get<Order[]>(this.ordersUrl).pipe(
  tap(orders => {
    console.log(orders);
    
    return orders
  })
  )
 }

  getOrder(id:number) {
    return this.http.get<Order>(this.ordersUrl + id)
  }
 
   
 
   addOrder(title:string, customer:string,date:string,price:string,status:boolean){
        
 
          return this.http.post<Order>(this.ordersUrl,{title,customer,date,price,status},this.httpOptions).
          pipe(tap(orders => console.log(orders)
          ))
     
         
         
        
         
       
   }    


  updateOrder(id:any,title:string,customer:string,date:number,price:number,status:boolean) {

    // title:string, customer:string,date:string,price:string
   
    return this.http.put<Order[]>(this.ordersUrl + id, {id,title,customer,date,price,status}).pipe(tap(update=> console.log(update)))
    
  }

  deleteOrder(id:number){
    return this.http.delete<Order>(this.ordersUrl + id)
    
   
  }
}
