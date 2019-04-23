import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service'

const routes: Routes = [
  { path: '', redirectTo: 'slides', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  {
    path : 'members',
    canActivate : [AuthGuardService], 
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: 'forgot-password', loadChildren: './public/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'notifications', loadChildren: './tabs/notifications/notifications.module#NotificationsPageModule' },
  { path: 'profile', loadChildren: './tabs/profile/profile.module#ProfilePageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs/tabs.module#TabsPageModule' },
  { path: 'news', loadChildren: './tabs/news/news.module#NewsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
