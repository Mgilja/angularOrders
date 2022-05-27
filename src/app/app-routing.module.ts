import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

const routes: Routes = [
  { path:"", component:LandingPageComponent },
  { path:"create", component: CreateOrderComponent },
  { path:"edit/:orderId", component:CreateOrderComponent },
  {path:"details/:orderId", component:OrderDetailsComponent },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
