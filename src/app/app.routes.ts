import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // IF CHILD IS STANDALONE COMPONENT
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./child/child.module').then((m) => m.ChildModule), // Adjust the import according to your folder structure
  // },
  // IF CHILD IS NOT STANDALONE AND IS IMPORTED MODULE
  //   { path: '', component: ChildComponent },
  //   { path: 'app-component', component: AppComponent },
];
