import type { ApplicationConfig } from '@angular/core'; // ✅ Fix type-only import
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes.js'; // ✅ Ensure appRoutes is imported

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), // ✅ Ensure appRoutes is defined
  ],
};
