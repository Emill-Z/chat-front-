import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// TODO: move it to the config file.
const CONFIG = {
    BASE_PATH: 'http://localhost:3000'
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf(CONFIG.BASE_PATH) >= 0) {
            return next.handle(req.clone({ headers: req.headers.set('x-chat-access-token', 'TOKEN') }));
        } else { return next.handle(req); }
    }
}
