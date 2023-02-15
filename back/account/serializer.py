from rest_framework import serializers
from . models import Account

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


        def validate(self, data):
            if not data['email']:
                raise serializers.ValidationError("Email is required")
            if not data['username']:
                raise serializers.ValidationError("Username is required")
            if not data['first_name']:
                raise serializers.ValidationError("First name is required")
            if not data['last_name']:
                raise serializers.ValidationError("Last name is required")
            if not data['telephone']:
                raise serializers.ValidationError("Telephone is required")
            if not data['affiliate_to']:
                raise serializers.ValidationError("Affiliate to is required")
            return data