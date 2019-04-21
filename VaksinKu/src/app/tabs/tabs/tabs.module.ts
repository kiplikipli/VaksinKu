import { HomePageModule } from './../home/home.module';
import { TabsPageRoutingModule } from './tabs.router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { ProfilePageModule } from '../profile/profile.module';
import { NotificationsPageModule } from '../notifications/notifications.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    HomePageModule,
    ProfilePageModule,
    NotificationsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
