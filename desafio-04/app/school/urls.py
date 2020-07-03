from django.urls import path

from . import views

app_name = 'lessons'
urlpatterns = [
    path('', views.index, name='index'),
    path('maratona', views.index, name='index'),
    path('maratona/<int:lesson_id>/', views.detail, name='detail'),
]