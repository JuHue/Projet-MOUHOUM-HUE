from django.contrib import admin
from . models import Organisation_type, Organisation

# register your models here 

admin.site.register(Organisation_type)
admin.site.register(Organisation)
