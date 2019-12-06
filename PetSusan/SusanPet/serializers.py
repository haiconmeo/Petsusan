from rest_framework import serializers 
from .models import Province_city,Profile,Contact,Item,Category_loai,Category_giong,Rate,District,Commune
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from drf_extra_fields.fields import Base64ImageField
class Province_citySerializer(serializers.ModelSerializer):
    class Meta:
        model =  Province_city
        fields = '__all__'

class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model =  District
        fields = '__all__'

class CommuneSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Commune
        fields = '__all__'

class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Rate
        fields = '__all__'
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Contact
        fields = '__all__'
class CateroriLoaiSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Category_loai
        fields = '__all__'
class CateroriGiongSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Category_giong
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
#   user=UserSerializer( read_only=True)
  class Meta:
    model= Profile
    fields = '__all__'
class ItemSerializer(serializers.ModelSerializer):
    image = Base64ImageField()
    class Meta:
        model =  Item
        fields = '__all__'