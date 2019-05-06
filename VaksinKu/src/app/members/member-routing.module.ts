import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'umum', loadChildren: './umum/umum.module#UmumPageModule' },
  { path: 'posyandu', loadChildren: './posyandu/posyandu.module#PosyanduPageModule' },  { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
