import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// if module is exported and not a standalone component
// platformBrowserDynamic()
//   .bootstrapModule(ChildMModule)
//   .catch((err) => console.error(err));
