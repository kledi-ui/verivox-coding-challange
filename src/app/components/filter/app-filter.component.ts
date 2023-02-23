import { FilterEvent } from "./../../model/interface";
import { Component, EventEmitter, Output } from "@angular/core";
import { ISortingItem, SortingTypes } from "src/app/model/interface";

@Component({
  selector: "app-filter",
  templateUrl: "app-filter.component.html",
  styleUrls: ["app-filter.component.css"],
})
export class AppFilterComponent {
  @Output() filterItemEvent = new EventEmitter<FilterEvent>();

  selectedSortingType: SortingTypes = null;
  filteredPrice: number = null;

  sortingList: Array<ISortingItem> = [
    { label: "price", value: SortingTypes.price },
    { label: "rating", value: SortingTypes.rating },
    { label: "title", value: SortingTypes.title },
  ];

  handleSortingSelection(value: SortingTypes): void {
    this.selectedSortingType = value;
    this.emitFilterEvent();
  }

  handlePriceFiltering(event: any): void {
    this.filteredPrice = parseInt(event.target.value);
    this.emitFilterEvent();
  }

  private emitFilterEvent(): void {
    this.filterItemEvent.emit({
      filteredPrice: this.filteredPrice,
      selectedSortingType: this.selectedSortingType,
    });
  }
}
