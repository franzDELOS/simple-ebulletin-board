from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import ItemViewSet



urlpatterns = [
    path('item/', ItemViewSet.as_view(), name="Item"),
]
