from django.db import models


# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField()
    year = models.IntegerField(default=1990)
    poster = models.ImageField(upload_to='posters', default=None)

    def __str__(self):
        return self.title
