import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <h3>Error has accurred</h3>
    <p>Please contact systems administrator</p>
  `,
  styles: `
    h3 {
      color: red;
    }

    p {
      font-family: wingdings, sans-serif;
      margin-left: 2%;
    }
  `
})
export class WarningAlertComponent {

}
