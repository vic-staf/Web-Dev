from django.urls import path
from . import views

urlpatterns = [
    # FBV для Company
    path('companies/', views.company_list, name='company_list'),
    path('companies/<int:id>/', views.company_detail, name='company_detail'),

    # CBV для Vacancy
    path('vacancies/', views.VacancyListView.as_view(), name='vacancy_list'),
    path('vacancies/<int:pk>/', views.VacancyDetailView.as_view(), name='vacancy_detail'),
    # path('vacancies/top_ten/', views.top_ten_vacancies, name='top_ten_vacancies'),
    path('companies/<int:id>/vacancies/', views.list_vacancies_by_company, name='list_vacancies_by_company'),
]


