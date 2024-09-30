import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { routes } from '../app.routes';

// IF CHILD IS STANDALONE COMPONENT
// @NgModule({
//   declarations: [ChildComponent],
//   imports: [CommonModule, RouterModule.forChild(routes)],
//   exports: [ChildComponent],
// })
// export class ChildModule {}

// IF CHILD IS NOT STANDALONE AND IS IMPORTED MODULE
// @NgModule({
//   declarations: [ChildComponent, AppComponent],
//   imports: [
//     CommonModule,
//     BrowserModule,
//     RouterModule.forChild(routes), // Use RouterModule for routing
//   ],
//   exports: [ChildComponent],
//   bootstrap: [ChildComponent],
// })
// export class ChildModule {}
