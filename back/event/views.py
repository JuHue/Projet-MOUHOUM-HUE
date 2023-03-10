from django.shortcuts import render
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.utils.dateparse import parse_datetime

from . models import Event
from . serializer import EventSerializer, EventManagerSerializer
from datetime import datetime
from pathlib import Path
import os
import json
import sys
import logging
logger = logging.getLogger(__name__)
logger.info('event.models')

# Create your views here.

class EventView(APIView):

    def get(self, request, *args, **kwargs):
        event = Event.objects.get_all_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = json.loads(request.data.get('param'))
        if (data['event_image'] == ''):
            data['event_image'] = 'default.png'
        if (data['event_video'] == ''):
            data['event_video'] = 'default.mp4'
        print(data, file=sys.__stderr__)
        new_event = Event.objects.create_event(
                data['event_name'],
                data['event_description'],
                data['event_date'],
                data['event_time'],
                data['event_place'],
                data['event_demonstrate_start_place'],
                data['event_demonstrate_end_place'],
                data['event_organisation'],
                data['event_image'],
                data['event_video'],
                data['event_duration'],
                data['event_strike_fund_link'],
                data['event_price'],
                data['event_max_participant'],
                data['event_min_participant'],
                data['event_is_active'],
                data['event_is_public'],
                data['event_is_free'],
                data['event_is_online'],
                data['evennt_is_full'],
                False,
        )
        return Response('success', status=status.HTTP_201_CREATED)
        

    def put(self, request, *args, **kwargs):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            updated_event = Event.objects.update_event(
                serializer.validated_data['event_id'],
                serializer.validated_data['name'],
                serializer.validated_data['description'],
                serializer.validated_data['date'],
                serializer.validated_data['place'],
                serializer.validated_data['event_type'],
                serializer.validated_data['event_status'],
                serializer.validated_data['event_manager']
                )
            return Response(serializer(updated_event).data, status=status.HTTP_201_CREATED)
        

    def delete(self, request, *args, **kwargs):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            deleted_event = Event.objects.delete_event(serializer.validated_data['event_id'])
            return Response(serializer(deleted_event).data, status=status.HTTP_200_OK)
        


    @action(detail=True, methods=['get'], url_path=r'event/get_all_active_events', name='get_all_active_events')
    def get_all_active_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_active_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_inactive_events', name='get_all_inactive_events')
    def get_all_inactive_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_inactive_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['get'], url_path=r'event/get_all_public_events',  name='get_all_public_events')
    def get_all_public_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_public_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_free_events', name='get_all_free_events')
    def get_all_free_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_free_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['get'], url_path=r'event/get_all_onlines_events', name='get_all_onlines_events')
    def get_all_onlines_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_onlines_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_private_events', name='get_all_private_events')
    def get_all_private_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_private_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_canceled_events', name='get_all_canceled_events')
    def get_all_canceled_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_canceled_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_full_events', name='get_all_full_events')
    def get_all_full_events(self, request, *args, **kwargs):
        event = Event.objects.get_all_full_events()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_events_of_an_organisation', name='get_all_events_of_an_organisation')
    def get_all_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_active_events_of_an_organisation', name='get_all_active_events_of_an_organisation')
    def get_all_active_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_active_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_public_events_of_an_organisation', name='get_all_public_events_of_an_organisation')
    def get_all_public_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_public_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_free_events_of_an_organisation', name='get_all_free_events_of_an_organisation')
    def get_all_free_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_free_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_onlines_events_of_an_organisation', name='get_all_onlines_events_of_an_organisation')
    def get_all_onlines_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_onlines_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_private_events_of_an_organisation', name='get_all_private_events_of_an_organisation')
    def get_all_private_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_private_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_canceled_events_of_an_organisation', name='get_all_canceled_events_of_an_organisation')
    def get_all_canceled_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_canceled_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_full_events_of_an_organisation', name='get_all_full_events_of_an_organisation')
    def get_all_full_events_of_an_organisation(self, request, *args, **kwargs):
        event = Event.objects.get_all_full_events_of_an_organisation()
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_all_events_of_an_account/<int:id>', name='get_all_events_of_an_account')
    def get_all_events_of_an_account(self, request, *args, **kwargs):
        event = Event.objects.get_all_events_of_a_user(request.GET.get('id'))
        serializer = EventSerializer(event, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'], url_path=r'event/get_event_by_id/<int:id>', name='get_event_by_id')
    def get_event_by_id(self, request, *args, **kwargs):
        logger.info(request.GET.get('id'))
        event = Event.objects.get_event(request.GET.get('id'))
        serializer = EventSerializer(event, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=True, methods=['get'],  url_path=r'event/get_event_by_id/<str:name>', name='get_event_by_name')
    def get_event_by_name(self, request, *args, **kwargs):
        event = Event.objects.get_event_by_name(request.GET.get('name'))
        serializer = EventSerializer(event, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def test(): 
        return Response("test", status=status.HTTP_200_OK)