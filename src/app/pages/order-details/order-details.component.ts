import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';
import { Order } from 'src/app/order-model';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: Order
  orderId:any;
  status = false

  constructor(private ordersService:OrdersService, private route:ActivatedRoute, private router:Router) { }
  private closeOrder() {
    const id = parseInt(this.route.snapshot.paramMap.get('orderId')!, 10);
    this.ordersService.closeOrder(
      id,
      this.status
    ).subscribe(order => console.log(order)
    )
  }
  getOrder() {
     const orderId = parseInt(this.route.snapshot.paramMap.get('orderId')!, 10);
     this.ordersService.getOrder(orderId).pipe().subscribe(data => this.order = data)
  }

  deleteOrder() {
    const orderId = parseInt(this.route.snapshot.paramMap.get('orderId')!, 10);
    this.ordersService.deleteOrder(orderId).subscribe((data)=> {
      // this.ordersService.getOrders();
      console.log(data);

      this.router.navigate([""])
      
    })
  }
  onClose() {
    this.closeOrder()
    // this.ordersService.closeOrder(this.orderId,this.status).pipe()
    // .subscribe((order) => {
    //   console.log(order);
      
    // }
    // )
      
    //   this.router.navigate([""])
    }
    
  

  ngOnInit(): void {
    this.getOrder()
    this.orderId = parseInt(this.route.snapshot.paramMap.get('orderId')!, 10);
    
  }

}
 


