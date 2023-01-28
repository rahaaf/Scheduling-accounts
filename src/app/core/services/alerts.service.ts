import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  durationInSeconds = 5;
  constructor(
    private _snackBar: MatSnackBar) { }

  //snackBar for succss
  openSnackBar( message: string) {
    this._snackBar.open(message , '', {
      duration: this.durationInSeconds * 1000,
    });
  }
  //snackBar for error
  openSnackBarFail( error: string) {
    this._snackBar.open(   error,'', {
      duration: this.durationInSeconds * 1000,
      verticalPosition : 'top',
      horizontalPosition : 'center'
    });
  }




}
