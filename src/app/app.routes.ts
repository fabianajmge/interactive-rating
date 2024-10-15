import { Routes } from '@angular/router';
import { SendGradeComponent } from './send-grade/send-grade.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';

export const routes: Routes = [
  {path: '', component: FormSubmitComponent},
  {path: 'send-grade/:grade', component: SendGradeComponent}
];
