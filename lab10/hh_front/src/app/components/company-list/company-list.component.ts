import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Company } from '../../models/company';
import {NgForOf, NgIf} from '@angular/common';
import {VacancyListComponent} from '../vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  imports: [
    NgForOf,
    VacancyListComponent,
    NgIf
  ],
  standalone: true
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId!: number;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  selectCompany(id: number): void {
    this.selectedCompanyId = id;
    console.log(this.selectedCompanyId);
  }
}

