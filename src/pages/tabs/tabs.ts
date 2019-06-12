import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ResumoPage } from '../resumo/resumo';
import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ResumoPage;
  tab2Root = AboutPage;
  tab3Root = MenuPage;

  constructor() {

  }
}
