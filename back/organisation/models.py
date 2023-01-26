from django.db import models

# Create your models here.

class Organisation_type(models.Model):
    id = models.AutoField(primary_key=True)
    label = models.CharField(max_length=100)


class Organisation(models.Model):
    organisation_id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=50)
    acronyme = models.CharField(max_length=10)
    type = models.ForeignKey(Organisation_type, on_delete=models.CASCADE)
    address = models.CharField(max_length = 150)
    city = models.CharField(max_length = 50)
    departement = models.CharField(max_length = 50)
    region = models.CharField(max_length = 50)

    def __str__(self):
        return self.organisation_id + ' => ' + self.full_name + ' | ' + self.acronyme
    

