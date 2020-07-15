import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  async onBaseDeDadosClicked(){
    console.log('clicou em base de dados');
    await this.router.navigate(['logged/clients']);
    //await this.router.navigate([{ outlets: { homeOutlet: [Defines.routeCadastros] } }], { skipLocationChange: false });
    //await this.router.navigate([{ outlets: { homeOutlet: [Defines.routeNewUser] } }], { skipLocationChange: false });
  }

}
