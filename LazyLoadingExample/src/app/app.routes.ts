import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadComponent:()=>
            import('./home/home').then(c=>c.HomeComponent)
    },
    {
        path:'admin',
        loadChildren:()=>
            import('./admin/admin/admin.routes').then(r=>r.ADMIN_ROUTES)
    }
   
];
