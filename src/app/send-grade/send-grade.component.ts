import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-grade',
  standalone: true,
  imports: [],
  templateUrl: './send-grade.component.html',
  styleUrl: './send-grade.component.scss'
})
export class SendGradeComponent implements OnInit {

  grade: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.grade = this.route.snapshot.paramMap.get('grade');
  }

}
