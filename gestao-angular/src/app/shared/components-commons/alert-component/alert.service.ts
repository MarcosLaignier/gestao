import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertMessage {
  type: AlertType;
  message: string;
  duration?: number;
}

@Injectable({providedIn: 'root'})
export class AlertService {

  private alertSubject = new Subject<AlertMessage>();
  alertState$ = this.alertSubject.asObservable();

  show(type: AlertType, message: string, duration: number = 4000) {
    this.alertSubject.next({ type, message, duration });
  }

  success(msg: string) { this.show('success', msg); }
  error(msg: string) { this.show('error', msg,7000); }
  warning(msg: string) { this.show('warning', msg); }
  info(msg: string) { this.show('info', msg); }

}
