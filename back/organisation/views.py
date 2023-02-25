from django.shortcuts import render
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.decorators import action

from . models import Organisation, Organisation_type

from . serializer import OrganisationSerializer, Organisation_typeSerializer


class OrganisationView(APIView):

    def get(self, request, *args, **kwargs):
        organisation = Organisation.objects.get_all_organisations()
        serializer = OrganisationSerializer(organisation, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def post(self, request, *args, **kwargs):
        serializer = OrganisationSerializer(data=request.data)
        if serializer.is_valid():
            new_organisation = Organisation.objects.create_organisation(
                full_name = serializer.validated_data['full_name'],
                acronyme = serializer.validated_data['acronyme'],
                type = serializer.validated_data['type'],
                address = serializer.validated_data['address'],
                city = serializer.validated_data['city'],
                departement = serializer.validated_data['departement'],
                region = serializer.validated_data['region']
                )
            return Response(serializer(new_organisation).data, status=status.HTTP_201_CREATED)
        

    def put(self, request, *args, **kwargs):
        serializer = OrganisationSerializer(data=request.data)
        if serializer.is_valid():
            updated_organisation = Organisation.objects.update_organisation(
                organisation_id = serializer.validated_data['organisation_id'],
                full_name = serializer.validated_data['full_name'],
                acronyme = serializer.validated_data['acronyme'],
                type = serializer.validated_data['type'],
                address = serializer.validated_data['address'],
                city = serializer.validated_data['city'],
                departement = serializer.validated_data['departement'],
                region = serializer.validated_data['region']
                )
            return Response(serializer(updated_organisation).data, status=status.HTTP_201_CREATED)
        

    def delete(self, request, *args, **kwargs):
        serializer = OrganisationSerializer(data=request.data)
        if serializer.is_valid():
            deleted_organisation = Organisation.objects.delete_organisation(organisation_id=serializer.validated_data['organisation_id'])
            return Response(serializer(deleted_organisation).data, status=status.HTTP_200_OK)
        

    @action(detail=False, methods=['get'])
    def get_organisation_by_departement(self, request, *args, **kwargs):
        organisation = Organisation.objects.get_organisation_by_departement(departement=request.data['departement'])
        serializer = OrganisationSerializer(organisation, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=False, methods=['get'])
    def get_organisation_by_region(self, request, *args, **kwargs):
        organisation = Organisation.objects.get_organisation_by_region(region=request.data['region'])
        serializer = OrganisationSerializer(organisation, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    @action(detail=False, methods=['get'])
    def get_organisation_by_type(self, request, *args, **kwargs):
        organisation = Organisation.objects.get_organisation_by_type(type=request.data['type'])
        serializer = OrganisationSerializer(organisation, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    


class Organisation_typeView(APIView):

    def get(self, request, *args, **kwargs):
        organisation_type = Organisation_type.objects.get_all_organisation_type()
        serializer = Organisation_typeSerializer(organisation_type, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        serializer = Organisation_typeSerializer(data=request.data)
        if serializer.is_valid():
            new_organisation_type = Organisation_type.objects.create_organisation_type(
                type = serializer.validated_data['type']
                )
            return Response(serializer(new_organisation_type).data, status=status.HTTP_201_CREATED)
        

    def put(self, request, *args, **kwargs):
        serializer = Organisation_typeSerializer(data=request.data)
        if serializer.is_valid():
            updated_organisation_type = Organisation_type.objects.update_organisation_type(
                organisation_type_id = serializer.validated_data['organisation_type_id'],
                type = serializer.validated_data['type']
                )
            return Response(serializer(updated_organisation_type).data, status=status.HTTP_201_CREATED)
        

    def delete(self, request, *args, **kwargs):
        serializer = Organisation_typeSerializer(data=request.data)
        if serializer.is_valid():
            deleted_organisation_type = Organisation_type.objects.delete_organisation_type(organisation_type_id=serializer.validated_data['organisation_type_id'])
            return Response(serializer(deleted_organisation_type).data, status=status.HTTP_200_OK)