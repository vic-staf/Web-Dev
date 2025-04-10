import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Vacancy } from '../../models/vacancy';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
  imports: [
    NgForOf
  ]
})
export class VacancyListComponent implements OnInit {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  reset(): void {
    this.apiService.getVacanciesByCompany(this.companyId).subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }
  ngOnInit(): void {
    this.reset();
  }
  ngOnChanges(): void {
    this.reset();
  }
}

