import { ErrorHandler, inject, Service } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LogError, LogErrorService } from './logerrorservice';
import { Router } from '@angular/router';

@Service()
export class GlobalErrorHandler implements ErrorHandler  {
 



  router = inject(Router);
  logErrorService = inject(LogErrorService);
  logError: LogError = {
    Message: '',
    Time: '',
    Route: '',
    User: ''
  };
  handleError(error: any): void {
    console.log('handle and log the error here and send it to the server');
            // console.error('An error occurred:', error);
    //throw error (Keep this line uncommented in development  in order to see the error in the console)
    StackTrace.fromError(error).then(stackframes => {
      const stringifiedStack = stackframes
        .map(sf => sf.toString())
        .join('\n');
    //  console.error(stringifiedStack);
        console.log('logError is not null');
        this.logError.Message = stringifiedStack; 
        this.logError.Time = new Date().toDateString();
        this.logError.Route = this.router.url;
        this.logError.User = 'testUser';
        this.logErrorService.logError(this.logError);
        this.router.navigate(['/error-page']);
    });
  }
}
