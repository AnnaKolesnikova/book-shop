import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '../../models/CartModel';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
    @Input() purchase!: CartItem;
    @Input() index!: number;

    @Output() public deleteCartItem: EventEmitter<number> = new EventEmitter();

    onDeleteCartItem(id) {
        console.log('I want to remove from the cart ' + this.purchase.name);
        this.deleteCartItem.emit(id);
    }
}
