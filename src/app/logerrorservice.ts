import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class LogErrorService  {
  
  private http = inject(HttpClient);

  logError(log: LogError):any {
    console.log(log);
    this.http.post('http://your-api-url.com', log).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }
}

export interface LogError {  
    Time : string;
    Route : string; 
    Message : string; 
    User : string;
 }