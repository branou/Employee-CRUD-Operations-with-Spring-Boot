import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {LoadingService} from "./services/loading.service";
import {finalize} from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    const spinnerService = inject(LoadingService); // Inject the SpinnerService
    spinnerService.show(); // Show the spinner
    return next(req).pipe(
        finalize(() => {
            spinnerService.hide(); // Hide the spinner when the request completes
        })
    );
};
