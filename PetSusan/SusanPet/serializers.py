from rest_framework import serializers 
from .models import Province_city,Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
class Province_citySerializer(serializers.ModelSerializer):
    class Meta:
        model =  Province_city
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        profile =  Profile.objects.create(user=user,id=user.id)
        return user
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','is_superuser')


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class profileSerializer(serializers.ModelSerializer):
  user=UserSerializer( read_only=True)
  class Meta:
    model= Profile
    fields = '__all__'
