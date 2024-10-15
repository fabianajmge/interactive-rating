import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGradeComponent } from './send-grade.component';

describe('SendGradeComponent', () => {
  let component: SendGradeComponent;
  let fixture: ComponentFixture<SendGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
