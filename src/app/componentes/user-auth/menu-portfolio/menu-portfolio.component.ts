import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-menu-portfolio',
  templateUrl: './menu-portfolio.component.html',
  styleUrls: ['./menu-portfolio.component.css']
})
export class MenuPortfolioComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.isLogged = this.tokenService.isLogged();
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }

}
