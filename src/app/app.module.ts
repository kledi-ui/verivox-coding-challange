import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppService } from "./services/app.service";
import { HttpClientModule } from "@angular/common/http";
import { AppProductComponent, AppFilterComponent } from "./components";

@NgModule({
  declarations: [AppComponent, AppProductComponent, AppFilterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
