import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'mortalcombat',
    loadChildren: () => import('./pages/mortalcombat/mortalcombat.module').then( m => m.MortalCombatPageModule)
  },
  {
    path: 'batman',
    loadChildren: () => import('./pages/batman/batman.module').then( m => m.BatmanPageModule)
  },
  {
    path: 'blackops',
    loadChildren: () => import('./pages/blackops/blackops.module').then( m => m.BlackopsPageModule)
  },
  {
    path: 'sniper',
    loadChildren: () => import('./pages/sniper/sniper.module').then( m => m.SniperPageModule)
  },
  {
    path: 'reptide',
    loadChildren: () => import('./pages/reptide/reptide.module').then( m => m.ReptidePageModule)
  },
  {
    path: 'watchdogs',
    loadChildren: () => import('./pages/watchdogs/watchdogs.module').then( m => m.WatchdogsPageModule)
  },
  {
    path: 'rrr',
    loadChildren: () => import('./pages/rrr/rrr.module').then( m => m.RrrPageModule)
  },
  {
    path: 'ghost',
    loadChildren: () => import('./pages/ghost/ghost.module').then( m => m.GhostPageModule)
  },
  {
    path: 'hitman',
    loadChildren: () => import('./pages/hitman/hitman.module').then( m => m.HitmanPageModule)
  },
  {
    path: 'lastofus',
    loadChildren: () => import('./pages/lastofus/lastofus.module').then( m => m.LastofusPageModule)
  },
  {
    path: 'modernwarfare',
    loadChildren: () => import('./pages/modernwarfare/modernwarfare.module').then( m => m.ModernwarfarePageModule)
  },
  {
    path: 'residentevil',
    loadChildren: () => import('./pages/residentevil/residentevil.module').then( m => m.ResidentevilPageModule)
  },
  {
    path: 'clank',
    loadChildren: () => import('./pages/clank/clank.module').then( m => m.ClankPageModule)
  },
  {
    path: 'creed',
    loadChildren: () => import('./pages/creed/creed.module').then( m => m.CreedPageModule)
  },
  {
    path: 'coldwar',
    loadChildren: () => import('./pages/coldwar/coldwar.module').then( m => m.ColdwarPageModule)
  },
  {
    path: 'demon',
    loadChildren: () => import('./pages/demon/demon.module').then( m => m.DemonPageModule)
  },
  {
    path: 'godoffall',
    loadChildren: () => import('./pages/godoffall/godoffall.module').then( m => m.GodoffallPageModule)
  },
  {
    path: 'pathless',
    loadChildren: () => import('./pages/pathless/pathless.module').then( m => m.PathlessPageModule)
  },
  {
    path: 'crash',
    loadChildren: () => import('./pages/crash/crash.module').then( m => m.CrashPageModule)
  },
  {
    path: 'darksouls',
    loadChildren: () => import('./pages/darksouls/darksouls.module').then( m => m.DarksoulsPageModule)
  },
  {
    path: 'gearofwar',
    loadChildren: () => import('./pages/gearofwar/gearofwar.module').then( m => m.GearofwarPageModule)
  },
  {
    path: 'infinite',
    loadChildren: () => import('./pages/infinite/infinite.module').then( m => m.InfinitePageModule)
  },
  {
    path: 'legos',
    loadChildren: () => import('./pages/legos/legos.module').then( m => m.LegosPageModule)
  },
  {
    path: 'sonic',
    loadChildren: () => import('./pages/sonic/sonic.module').then( m => m.SonicPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
