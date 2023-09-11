from django.shortcuts import render
from rest_framework import generics
from api.models import Article
from api.serializers import ArticleSerializer

# Create your views here.


class ArticleView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
