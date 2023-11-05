import { Component, OnInit } from '@angular/core';
import { selectProductsList } from '../selectors/products.selectors';
import { product } from '../models/products.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { productsLoad } from '../actions/products.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private store : Store<AppState>){

  }

  // public productDetails$ = this.store.select(selectProductsList);
  products!:product[];

  ngOnInit(): void {
      this.store.dispatch(productsLoad())
      
      this.store.select(selectProductsList).subscribe((data: product[])=>{
        this.products = data
      })
  }
}
