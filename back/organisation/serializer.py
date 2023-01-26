from rest_framework import serializers

# import models
from . models import Organisation, Organisation_type

class OrganisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organisation
        fields = '__all__'


class Organisation_typeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organisation_type
        fields = '__all__'