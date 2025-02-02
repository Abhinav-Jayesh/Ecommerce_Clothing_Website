"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app import views  # Ensure this points to the correct app
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('get_Products/', views.get_Products),
    path('get_Product/<str:pk>/', views.get_Product),
    path('create_Product/', views.create_Product),
    path('update_Product/<str:pk>/', views.update_Product),
    path('delete_Product/<str:pk>/', views.delete_Product),
    path('api/signup/', views.signup),  # Your signup endpoint
    path('api/login/', views.LoginView.as_view()),  # Your login endpoint
    path('api/logout/', views.LogoutView.as_view()),  # Your logout endpoint
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

