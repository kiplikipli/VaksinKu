import { HomePage } from './../home/home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { NotificationsPage } from '../notifications/notifications.page';
import { ProfilePage } from '../profile/profile.page';

const routes: Routes = [
  {
    path : 'tabs',
    component : TabsPage,
    children : [
      {
        path : 'home',
        outlet : 'home',
        component : HomePage
      },
      {
        path : 'notifications',
        outlet : 'notifications',
        component : NotificationsPage
      },
      {
        path : 'profile',
        outlet : 'profile',
        component : ProfilePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
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
