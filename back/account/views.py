from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions


# Import models and serializers
from . models import AccountManager, Account
from . serializer import AccountSerializer

# Create your views here.

class AccountView(viewsets.ModelViewSet):
    # Get all accounts
    def get(self, request, *args, **kwargs):
        account = Account.objects.all()
        serializer = AccountSerializer(account, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # Create a new account
    def post(self, request, *args, **kwargs):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            new_account = AccountManager.create_account(
                serializer.validated_data['email'],
                serializer.validated_data['username'],
                serializer.validated_data['firts_name'],
                serializer.validated_data['last_name'],
                serializer.validated_data['telephone'],
                serializer.validated_data['affiliate_to']
            )

            return Response(serializer(new_account).data, status=status.HTTP_201_CREATED)


    # Create put methd for update account
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

    # Create delete method for delete account
    def delete(self, request, *args, **kwargs):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            deleted_account = AccountManager.delete_account(serializer.validated_data['account_id'])
            return Response(serializer(deleted_account).data, status=status.HTTP_200_OK)