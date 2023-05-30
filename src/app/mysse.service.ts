import { Injectable } from '@angular/core';
import { SseService } from './sse.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MysseService {

  constructor(
    private sse: SseService
  ) { }

  getServerSentEvent(url: string): Observable<any> {
    return Observable.create((observer: any) => {
      const eventSource = this.sse.getEventSource(url);

      eventSource.onmessage = (event: any) => {
        observer.next(JSON.parse(event.data));
      }
      eventSource.onerror = (event: any) => {
        observer.error(JSON.parse(event.data));
      }
    })
  }
}
