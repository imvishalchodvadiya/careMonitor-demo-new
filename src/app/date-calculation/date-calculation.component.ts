import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-calculation',
  templateUrl: './date-calculation.component.html',
  styleUrls: ['./date-calculation.component.scss']
})
export class DateCalculationComponent implements OnInit {
  form: FormGroup = this.fb.group({
    startDate: [''],
    endDate: [''],
    duration: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.get('startDate')?.valueChanges.subscribe(() => this.updateDuration());
    this.form.get('endDate')?.valueChanges.subscribe(() => this.updateDuration());
    this.form.get('duration')?.valueChanges.subscribe(() => this.updateEndDate());
  }

  updateDuration() {
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    if (startDate && endDate) {
      const duration = this.calculateDuration(new Date(startDate), new Date(endDate));
      this.form.get('duration')?.setValue(duration, { emitEvent: false });
    }
  }

  updateEndDate() {
    const startDate = this.form.get('startDate')?.value;
    const duration = this.form.get('duration')?.value;

    if (startDate && duration != null) {
      const endDate = this.calculateEndDate(new Date(startDate), duration);
      this.form.get('endDate')?.setValue(endDate.toISOString().substring(0, 10), { emitEvent: false });
    }
  }

  calculateDuration(startDate: Date, endDate: Date): number {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days
  }

  calculateEndDate(startDate: Date, duration: number): Date {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + duration);
    return endDate;
  }
}