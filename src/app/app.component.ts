import { Component } from '@angular/core';
import { studentArray } from './shared/const/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filterpipe';
  Arrayofstudent = studentArray;
   searchvalue! : string;
}
