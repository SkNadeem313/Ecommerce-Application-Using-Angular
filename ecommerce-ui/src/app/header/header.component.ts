import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';
import { ImageProcessingService } from '../image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {




  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
  

  ) {}

  ngOnInit(): void {
    
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }

  public isAdmin() {
    return this.userAuthService.isAdmin();
  }

  public isUser() {
    return this.userAuthService.isUser();
  }

  

}
