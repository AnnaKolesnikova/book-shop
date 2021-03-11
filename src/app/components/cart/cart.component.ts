import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/CartModel';
import { CartService } from '../../services/cartService/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    purchases: CartItem[] = [];

    constructor(public cartService: CartService) {}

    ngOnInit(): void {
        this.purchases = this.cartService.getPurchases();
        console.log(this.purchases);
    }

    onDeleteCartItem(id): void {
        this.cartService.removeBook(id);
    }
}
