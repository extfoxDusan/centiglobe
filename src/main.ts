import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Amplify } from 'aws-amplify'; // Import Amplify
import { amplifyConfig } from './amplifyconfiguration'; // Import your Amplify configuration

// Configure Amplify with your imported configuration
Amplify.configure(amplifyConfig);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
