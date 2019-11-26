from rest_framework import generics
from .models import Province_city
from rest_framework.response import Response
from .serializers import Province_citySerializer,RegisterSerializer,UserSerializer
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
