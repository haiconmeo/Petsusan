from .models import Item,District,Rate_rs
from rest_framework.response import Response
from rest_framework import status
def delete(request):
    Rate_rs.objects.all().delete()
    return  Response(status=status.HTTP_400_BAD_REQUEST)