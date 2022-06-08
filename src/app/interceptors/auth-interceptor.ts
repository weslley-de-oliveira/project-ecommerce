import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { LoginService } from "../services/customers/login.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private loginService: LoginService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.loginService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if(token) {
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            errorMessage = `Ocorreu um erro: ${error.error.message}`;
        } else {
            errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.error}`;
        }

        return throwError(() => {
            alert(errorMessage);
        })
    }
}