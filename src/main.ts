/*

=========================================================
* VirLetes - Virtual Athletes' Profiles - v1.0.0
=========================================================

* Product Page: https://www.VirLetes.com/
* Copyright 2021 All VirLetes Sports (https://www.allVirLetes.com)

* Coded by ZeurTek - Digital Transformation Consultants

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { StartupModule } from "./app/modules/@startup/startup.module";
import { environment } from "./environments/environment.prod";



if (environment.production) {
  enableProdMode();
}

/*
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
*/
const bootstrap = async () => {
  try {
    return await platformBrowserDynamic().bootstrapModule(StartupModule);
  } catch (err) {
    return console.error(err);
  }

};

bootstrap(); // Regular bootstrap
