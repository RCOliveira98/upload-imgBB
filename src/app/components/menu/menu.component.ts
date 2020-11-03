import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itens: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.itens = [
      {
          label: 'Principal',
          icon: 'pi pi-fw pi-home',
          routerLink: 'home'
      },
      {
          label: 'Fotos',
          icon: 'pi pi-fw pi-images',
          items: [
              {label: 'Cadastrar', icon: 'pi pi-fw pi-plus', routerLink: 'images/new'},
              {label: 'Consultar', icon: 'pi pi-fw pi-search', routerLink: 'images/search'},
              {label: 'Categorias', icon: 'pi pi-fw pi-tag', routerLink: 'images/categories'}
          ]
      }
    ];
    console.log(this.itens);
  }

}
