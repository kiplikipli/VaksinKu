import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'umum', loadChildren: './umum/umum.module#UmumPageModule' },
  { path: 'posyandu', loadChildren: './posyandu/posyandu.module#PosyanduPageModule' },  { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
