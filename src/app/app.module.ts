import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, ActivatedRouteSnapshot } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export class DisableReuseReuseStrategy implements RouteReuseStrategy {
  
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }  
  store(route: ActivatedRouteSnapshot, handle: {}): void { return; }
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  retrieve(route: ActivatedRouteSnapshot): any { return null; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean { 
  	// Reuse route if future and curr page is list
  	if (this.getResolvedPath(future).includes("/list") && this.getResolvedPath(curr).includes("/list")) {
  		return true;
  	}

    return false; 
  }

  getResolvedPath(route: ActivatedRouteSnapshot): string {
    // Get lowest child
    let childRoute = route;
    while (childRoute.children.length > 0) { childRoute = childRoute.children[0]; }

    // Get path
    let path = childRoute.pathFromRoot
        .map(v => v.url.map(segment => segment.toString()).join('/'))
        .join('/')

    // Replace double slashs
    while (path.includes("//")) { path = path.replace("//", "/"); }

    return path;
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: DisableReuseReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
