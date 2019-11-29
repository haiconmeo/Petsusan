from rest_framework import generics
from .models import Province_city,Contact,Item
from rest_framework.response import Response
from .serializers import Province_citySerializer,RegisterSerializer,UserSerializer,LoginSerializer,ContactSerializer,ItemSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from knox.models import AuthToken

@api_view(['GET', 'POST'])
def Province_cityList(request):

    if request.method == 'GET':
        Province_citys = Province_city.objects.all()
        serializer = Province_citySerializer(Province_citys,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Province_citySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
    })
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
    })
@api_view(['GET', 'POST'])
def contact_list(request):
    """
    List all Raps, or create a new Rap.
    """
    print (request.method)
    print (request.data)
    
    if request.method == 'GET':
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def contact_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        contact = Contact.objects.get(pk=pk)
    except contact.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ContactSerializer(contact,context={'request': request})
        return Response(serializer.data)



    elif request.method == 'DELETE':
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def item_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def item_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        item = Item.objects.get(pk=pk)
    except item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ItemSerializer(item,context={'request': request})
        return Response(serializer.data)



    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)