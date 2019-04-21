import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path : 'tabs',
    component : TabsPage,
    children : [
      { 
        path: 'home', 
        loadChildren: '../home/home.module#HomePageModule' 
      },
      { 
        path: 'notifications', 
        loadChildren: '../notifications/notifications.module#NotificationsPageModule' 
      },
      { 
        path: 'profile', 
        loadChildren: './../../members/umum/umum.module#UmumPageModule' 
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
