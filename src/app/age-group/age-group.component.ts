import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
type AgeGroup = 'infant' | 'child' | 'teenager' | 'youngAdult' | 'adult' | 'senior';
const ageRanges: Record<AgeGroup, string> = {
  infant: '0-2 years',
  child: '3-12 years',
  teenager: '13-19 years',
  youngAdult: '20-39 years',
  adult: '40-59 years',
  senior: '60+ years',
};

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss']
})
export class AgeGroupComponent implements OnInit  {
  form!: FormGroup;

  ageGroups: { value: AgeGroup, label: string }[] = [
    { value: 'infant', label: 'Infant' },
    { value: 'child', label: 'Child' },
    { value: 'teenager', label: 'Teenager' },
    { value: 'youngAdult', label: 'Young Adult' },
    { value: 'adult', label: 'Adult' },
    { value: 'senior', label: 'Senior' },
  ];

  ageRanges = ageRanges;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      ageGroup: [''],
      ageRange: ['']
    });

    this.form.get('ageGroup')?.valueChanges.subscribe(value => {
      this.updateAgeRange(value);
    });
  }

  updateAgeRange(ageGroup: AgeGroup) {
    const ageRange = this.ageRanges[ageGroup];
    this.form.get('ageRange')?.setValue(ageRange, { emitEvent: false });
  }
}
