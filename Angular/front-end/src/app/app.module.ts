import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  { path: 'update/:id', component: UpdateUsersComponent },
  {path: 'add', component: AddUserComponent},
  {path: 'users', component: UsersViewComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UsersViewComponent,
    UpdateUsersComponent,
    AddUserComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
