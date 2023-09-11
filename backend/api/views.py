from django.shortcuts import render
from rest_framework import generics
from api.models import Item
from api.serializers import ItemSerializer

# Create your views here.
class ItemViewSet(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
