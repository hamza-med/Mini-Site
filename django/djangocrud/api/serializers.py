from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id','name', 'lastName', 'age']
