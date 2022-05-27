import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/order-model';
import { OrdersService } from 'src/app/orders.service';
import { filter, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  
  @ViewChild('paginator') paginator: MatPaginator
  


  constructor( private ordersService: OrdersService, private route:ActivatedRoute, private router:Router) { }
  orders:Order[] = [];
  displayedColumns: any = ['position','title','customer','status','date','price', 'details','edit'];
  ordersData = new MatTableDataSource<Order>()

  pageEvent:PageEvent;
  length:number;
  pageSize:number = 10;
  pageIndex:number = 1;
  pageSizeOptions:number[] = [5, 10, 25, 50, 100];
  postsPerPage=5;
  currentPage=1;
  open = true
 
  

  getOrders() {
    this.ordersService.getOrders().subscribe( data => {
      this.ordersData.data = data;
    

      
    })
    
  }
 
  search(event:Event) {
    const searchInput = (event.target as HTMLInputElement).value;
    this.ordersData.filter = searchInput.trim().toLowerCase();
  }
  onPaginateChange(event:PageEvent) {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getOrders();
    console.log(this.pageIndex,this.pageSize);
    
  }
  
  showOpenedOrders() {
   this.ordersService.getOpenedOrders().subscribe(data => {
     this.ordersData.data = data
   })
   
  }
  
  showClosedOrders() {
   this.ordersService.getClosedOrders().subscribe(data => {
     this.ordersData.data = data
   })
  }
  showAll() {
    this.ordersService.getOrders().subscribe( data => {
      this.ordersData.data = data;

    })
  }
  

 

  ngOnInit(): void {
    this.getOrders();
    this.ordersService.getClosedOrders();
  }
  ngAfterViewInIt() {
    this.ordersData.paginator = this.paginator
    
  }
}
