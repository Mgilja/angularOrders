import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from './order-model';
import { AuthData } from './auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
   

  createDb() {
    const orders = [
      {
        id:1,
        title:'Liqour order',
        customer:'Mr. James',
        status:true,
        date:'23.4 2018',
        price:30.99,
    },
    {
        id:2,
        title:'Beer order',
        customer:'Pub crawl',
        status:true,
        date:'4.4 2014',
        price:35.99,
    },
    
    {
        id:3,
        title:'Orange juice order',
        customer:'Tapas Bar',
        status:true,
        date:'1.6 2020',
        price:18.99,
    },
    {
        id:4,
        title:'Tea and honey',
        customer:'Mr. Hubert',
        status:true,
        date:'1.3 2021',
        price:7.99,
    },
    {
        id:5,
        title:'Coffee and milk',
        customer:'Mrs.Johnson',
        status:true,
        date:'1.1 2002',
        price:9.99,
    },
    {
        id:6,
        title:'Monthly dog food suply',
        customer:'Pet-Vet',
        status:true,
        date:'11.2 2022',
        price:129.99,
    },
    {
        id:7,
        title:'Monthly burger suply',
        customer:'Carling Pub',
        status:true,
        date:'13.4 2012',
        price:99.99,
    },
    {
        id:8,
        title:'Fish and chips',
        customer:'Fast Food',
        status:true,
        date:'12.4 2022',
        price:23.50,
    },
    {
        id:9,
        title:'Toast and butter',
        customer:'Elementary School',
        status:true,
        date:'12.5 1992',
        price:12.00,
    },
    {
        id:10,
        title:'Soft drinks order',
        customer:'Post Office',
        status:true,
        date:'1.1 1993',
        price:10.59,
      }
    ];

    const user = [
      {email:"", password:""}

    ]
    return {orders, user}
  }
  

//   generateId(orders: Order[]):number {
//     return orders.length > 0 ? Math.max(...orders.map(order => order.id)) + 1:10;
  
//  }
}
