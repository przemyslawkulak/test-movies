from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response

from api.models import Movie
from api.serializers import MovieSerializer, MovieFullSerializer


class MovieViewset(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    authentication_classes = (TokenAuthentication, )

    def retrieve(self, request, *args, **kwargs):
        movie = self.get_object()
        serializer = MovieFullSerializer(movie)
        return Response(serializer.data)
