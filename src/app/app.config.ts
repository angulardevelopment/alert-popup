import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from "@angular/core";
import { GlobalErrorHandler } from "./global-error-handler";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }), 
    {provide:ErrorHandler,useClass:GlobalErrorHandler},
    provideRouter(routes)
   ]
};