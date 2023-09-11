from django.urls import path, include
from api.views import ArticleView, ArticleDetailView



urlpatterns = [
    path('article/', ArticleView.as_view(), name="article"),
    path('article/<int:pk>', ArticleDetailView.as_view(), name="article-detail")
]
