import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppProductComponent } from './app-product.component';

describe('AppProductComponent', () => {
  let component: AppProductComponent;
  let fixture: ComponentFixture<AppProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isExpandable to false', () => {
    expect(component.isExpandable).toBeFalse();
  });

  it('should toggle isExpandable when onShowDetails is called', () => {
    component.onShowDetails();
    expect(component.isExpandable).toBeTrue();
    component.onShowDetails();
    expect(component.isExpandable).toBeFalse();
  });

  it('should receive productDetails input', () => {
    const mockProductDetails = { name: 'test product', price: 10 };
    component.productDetails = mockProductDetails;
    expect(component.productDetails).toEqual(mockProductDetails);
  });
});
