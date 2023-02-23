import { AppService } from "./services/app.service";
import { Component, OnInit } from "@angular/core";
import { IProduct, SortingTypes } from "./model/interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public productList: Array<IProduct> = [];
  public productListFiltered: Array<IProduct> = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getProductList().subscribe((response) => {
      this.productList = response;
      this.productListFiltered = response;
    });
  }

  handleDataFilter({filteredPrice, selectedSortingType}): void {
    if (filteredPrice) {
      this.productListFiltered = this.productList.filter(
        (product: IProduct) => product.price <= filteredPrice
      );
    }

    if (!filteredPrice) {
      this.productListFiltered = this.productList;
    }

    if (selectedSortingType) {
      switch (selectedSortingType) {
        case SortingTypes.price:
          this.productListFiltered = this.productListFiltered.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case SortingTypes.rating:
          this.productListFiltered = this.productListFiltered.sort((a, b) => {
            return a.rating - b.rating;
          });
          break;
        case SortingTypes.title:
          this.productListFiltered = this.productListFiltered.sort((a, b) => {
            return a.title.localeCompare(b.title);
          });
          break;

        default:
          break;
      }
    }
  }
}
