import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFilterComponent } from './app-filter.component';
import { SortingTypes } from 'src/app/model/interface';
import { FilterEvent } from "./../../model/interface";
import { EventEmitter } from '@angular/core';

describe('AppFilterComponent', () => {
  let component: AppFilterComponent;
  let fixture: ComponentFixture<AppFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the sort value when handleSorting is called', () => {
    const selectedSortingType = SortingTypes.price;
    component.handleSortingSelection(selectedSortingType);
    expect(component.selectedSortingType).toEqual(selectedSortingType);
  });

  it('should emit filterItemEvent with the correct values when handleSorting is called', () => {
    const selectedSortingType = SortingTypes.price;
    const expectedFilterEvent: FilterEvent = { filteredPrice: null, selectedSortingType: selectedSortingType };
    spyOn(component.filterItemEvent, 'emit');
    component.handleSortingSelection(selectedSortingType);
    expect(component.filterItemEvent.emit).toHaveBeenCalledWith(expectedFilterEvent);
  });

  it('should set the price value when onChangeEvent is called', () => {
    const filteredPrice = 10;
    const event = { target: { value: filteredPrice } };
    component.handlePriceFiltering(event);
    expect(component.filteredPrice).toEqual(filteredPrice);
  });

  it('should emit filterItemEvent with the correct values when onChangeEvent is called', () => {
    const filteredPrice = 10;
    const event = { target: { value: filteredPrice } };
    const expectedFilterEvent: FilterEvent = { filteredPrice: filteredPrice, selectedSortingType: null };
    spyOn(component.filterItemEvent, 'emit');
    component.handlePriceFiltering(event);
    expect(component.filterItemEvent.emit).toHaveBeenCalledWith(expectedFilterEvent);
  });
});
