from rest_framework import viewsets

from api.models import Movie
from api.serializers import MovieSerializer


class MovieViewset(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()