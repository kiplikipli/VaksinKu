import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService } from './../../services/auth-guard.service'

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
        canActivate : [AuthGuardService], 
        loadChildren: './../../members/umum/umum.module#UmumPageModule' 
      },
      {
        path : 'news',
        loadChildren : '../news/news.module#NewsPageModule'
      }
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
