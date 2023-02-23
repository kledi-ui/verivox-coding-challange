import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "app-product.component.html",
  styleUrls: ["app-product.component.css"],
})
export class AppProductComponent {
  isExpandable: boolean = false;

  @Input() productDetails: any = {};

  constructor() {}

  onShowDetails(): void {
    this.isExpandable = !this.isExpandable;
  }
}
