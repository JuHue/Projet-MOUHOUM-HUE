from rest_framework import serializers
from . models import Event, EventManager


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class EventManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventManager
        fields = '__all__'



