import { Order } from "./order-model";

export const ORDERS: Order[] = [
    {
        id:1,
        title:'Liqour order',
        customer:'Mr. James',
        status:true,
        date:Date.now().toString(),
        price:30.99,
    },
    {
        id:2,
        title:'Beer order',
        customer:'Pub crawl',
        status:false,
        date:Date.now().toString(),
        price:35.99,
    },
    
    {
        id:3,
        title:'Orange juice order',
        customer:'Tapas Bar',
        status:true,
        date:Date.now().toString(),
        price:18.99,
    },
    {
        id:4,
        title:'Tea and honey',
        customer:'Mr. Hubert',
        status:false,
        date:Date.now().toString(),
        price:7.99,
    },
    {
        id:5,
        title:'Coffee and milk',
        customer:'Mrs.Johnson',
        status:false,
        date:Date.now().toString(),
        price:9.99,
    },
    {
        id:6,
        title:'Monthly dog food suply',
        customer:'Pet-Vet',
        status:false,
        date:Date.now().toString(),
        price:129.99,
    },
    {
        id:7,
        title:'Monthly burger suply',
        customer:'Carling Pub',
        status:false,
        date:Date.now().toString(),
        price:99.99,
    },
    {
        id:8,
        title:'Fish and chips',
        customer:'Fast Food',
        status:false,
        date:Date.now().toString(),
        price:23.50,
    },
    {
        id:9,
        title:'Toast and butter',
        customer:'Elementary School',
        status:false,
        date:Date.now().toString(),
        price:12.00,
    },
    {
        id:10,
        title:'Soft drinks order',
        customer:'Post Office',
        status:false,
        date:Date.now().toString(),
        price:10.59,
    }


]