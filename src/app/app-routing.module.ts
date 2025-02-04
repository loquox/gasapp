import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetProductsComponent } from './backend/set-products/set-products.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent  },
  {path: 'set-productos', component:SetProductsComponent  },
  {path: 'perfil', component:PerfilComponent},
  {path: '', component: HomeComponent },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
