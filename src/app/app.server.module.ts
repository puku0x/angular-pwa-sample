import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { Routes, RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [ { path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
    MatProgressBarModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {}
