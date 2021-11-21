from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    age = models.IntegerField()
