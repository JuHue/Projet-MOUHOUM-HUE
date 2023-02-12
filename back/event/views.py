from django.shortcuts import render
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.decorators import action

from . models import Event
from . serializer import EventSerializer, EventManagerSerializer

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
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            new_event = Event.objects.create_event(
                serializer.validated_data['name'],
                serializer.validated_data['description'],
                serializer.validated_data['date'],
                serializer.validated_data['place'],
                serializer.validated_data['event_type'],
                serializer.validated_data['event_status'],
                serializer.validated_data['event_manager']
                )
            return Response(serializer(new_event).data, status=status.HTTP_201_CREATED)
        

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