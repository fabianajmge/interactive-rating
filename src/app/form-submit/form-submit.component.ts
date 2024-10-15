import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { SendGradeComponent } from '../send-grade/send-grade.component';

@Component({
  selector: 'app-form-submit',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule, RouterModule, SendGradeComponent],
  templateUrl: './form-submit.component.html',
  styleUrl: './form-submit.component.scss'
})
export class FormSubmitComponent {

  constructor(private router: Router) {}

  grades = [1, 2, 3, 4, 5];
  gradeSelected!: number;

  selectGrade(grade: number) {
    this.gradeSelected = grade;
  }

  sendSelect() {
    this.router.navigate(['/send-grade', this.gradeSelected]);
  }
}
