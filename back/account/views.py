from django.shortcuts import render
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action, permission_classes
from . models import AccountManager, Account
from . serializer import AccountSerializer


import sys
import json
import datetime



class AccountView(APIView):

    @permission_classes([IsAuthenticated])
    def get(self, request, *args, **kwargs):
        account = Account.objects.all()
        serializer = AccountSerializer(account, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        serializer = AccountSerializer(data=json.loads(request.data.get('param')))
        print(serializer, file=sys.__stderr__)
        print(serializer.is_valid(), file=sys.__stderr__)

        if serializer.is_valid():
            print(serializer.validated_data, file=sys.__stderr__)
            new_account = Account.objects.create_account(
                serializer.validated_data['email'],
                serializer.validated_data['username'],
                serializer.validated_data['password'],
                serializer.validated_data['first_name'],
                serializer.validated_data['last_name'],
                serializer.validated_data['telephone'],
                serializer.validated_data['affiliate_to']
            )

            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @permission_classes([IsAuthenticated])
    def put(self, request, *args, **kwargs):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            updated_account = AccountManager.update_account(
                serializer.validated_data['account_id'],
                serializer.validated_data['email'],
                serializer.validated_data['username'],
                serializer.validated_data['first_name'],
                serializer.validated_data['last_name'],
                serializer.validated_data['telephone'],
                serializer.validated_data['affiliate_to'],
            )
            return Response(serializer(updated_account).data, status=status.HTTP_201_CREATED)
        
    

    @permission_classes([IsAuthenticated])
    def delete(self, request, *args, **kwargs):
        serializer = AccountSerializer(data=request.data.get('param'))
        if serializer.is_valid():
            deleted_account = AccountManager.delete_account(serializer.validated_data['account_id'])
            return Response(serializer(deleted_account).data, status=status.HTTP_200_OK)
        
    @permission_classes([IsAuthenticated])
    @action(methods=['get'], detail=False, url_path=r'/get_account_by_username/', name='get_account_by_username')
    def get_account_by_username(self, request, *args, **kwargs):
        print(request.data.get('params'), file=sys.__stderr__)
        serializer = AccountSerializer(data=json.loads(request.data.get('params')))
        if serializer.is_valid():
            account = AccountManager.get_account_by_username(serializer.validated_data['username'])
            return Response(serializer(account).data, status=status.HTTP_200_OK)
        


class AccountByUsernameView(APIView):
    @permission_classes([IsAuthenticated])
    def post(self, request, *args, **kwargs):
        data = request.data.get('param')
        if data != None:
            account = Account.objects.get_account_by_username(data)[0]
            print(AccountSerializer(account).data, file=sys.__stderr__)
            return Response(AccountSerializer(account).data, status=status.HTTP_200_OK)
        return Response("Account does not exists", status=status.HTTP_400_BAD_REQUEST)
        
