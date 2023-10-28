from django.db import models

# Create your models here.

class leaderboard(models.Model):
    name = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    rank = models.IntegerField(default=0)
    points = models.IntegerField(default=0)
    
