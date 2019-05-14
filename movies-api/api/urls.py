from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api.views import MovieViewset

router = routers.DefaultRouter()
router.register('movies', MovieViewset)

urlpatterns = [

    path('', include(router.urls))
]
