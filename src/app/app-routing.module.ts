import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAuthGuard } from './common/guards/module-auth-guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'chat',
    canLoad: [ModuleAuthGuard],
    loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
