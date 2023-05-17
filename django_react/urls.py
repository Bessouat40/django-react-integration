from django.contrib import admin
from django.urls import path
from .views import ReactApp

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ReactApp.as_view()),
]
