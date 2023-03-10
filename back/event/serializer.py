from rest_framework import serializers
from . models import Event, EventManager
import sys


class EventSerializer(serializers.ModelSerializer):
    event_image = serializers.ImageField(required=False, allow_null=True, default='default.png', max_length=None)
    event_video = serializers.FileField(required=False, allow_null=True, default="default.mp4",max_length=None)


    class Meta:
        model = Event
        fields = '__all__'

        def validate(self, data):
            if not data['event_name']:
                raise serializers.ValidationError("Event name is required")
            if not data['event_description']:
                raise serializers.ValidationError("Event description is required")
            if not data['event_date']:
                raise serializers.ValidationError("Event date is required")
            if not data['event_time']:
                raise serializers.ValidationError("Event time is required")
            if (not data['event_place']) and (not data['event_demonstrate_start_place'] or not data['event_demonstrate_end_place']):
                raise serializers.ValidationError("Event place is required")
            if not data['event_organisation']:
                raise serializers.ValidationError("Event orga is required")
            print(data, file=sys.__stderr__)
            return data
            
            



class EventManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventManager
        fields = '__all__'



