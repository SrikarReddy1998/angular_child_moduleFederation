import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { ChildModule } from './app/child/child.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChildComponent } from './app/child/child.component';

// IF CHILD IS STANDALONE COMPONENT
bootstrapApplication(ChildComponent, appConfig).catch((err) =>
  console.error(err)
);

// IF CHILD IS NOT STANDALONE AND IS IMPORTED MODULE
// platformBrowserDynamic()
//   .bootstrapModule(ChildModule)
//   .catch((err) => console.error(err));
