// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// componens
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ModalUserComponent } from './components/users/modal-user/modal-user.component';
import { ModalProductComponent } from './components/products/modal-product/modal-product.component';

// providers
import { UsersService } from './services/users.service';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    WelcomeModalComponent,
    NotFoundComponent,
    ModalUserComponent,
    ModalProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UsersService, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
