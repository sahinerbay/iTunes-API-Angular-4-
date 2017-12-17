import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
	HttpHandler,
	HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		return next.handle(req)
			.do((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					console.log(event);
				}
			});
	}

}
