from rest_framework import generics
from .models import Province_city,Contact,Item,Category_loai,Category_giong,Rate,District,Commune,Profile,Rate_rs,Order
from rest_framework.response import Response
from .serializers import Province_citySerializer,RegisterSerializer,UserSerializer,LoginSerializer,ContactSerializer,ItemSerializer,CateroriLoaiSerializer,CateroriGiongSerializer,RateSerializer,profileSerializer,Order3Serializer
from rest_framework import status
from .serializers import DistrictSerializer,CommuneSerializer,RepSerializer,profile2Serializer,Rate_rsSerializer,OrderSerializer,Order2Serializer
from rest_framework.decorators import api_view
from knox.models import AuthToken
from rest_framework import  permissions
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

@api_view(['GET', 'POST'])
def District_List(request):

    if request.method == 'GET':
        Districts = District.objects.all()
        serializer = DistrictSerializer(Districts,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DistrictSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def Dis_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = District.objects.filter(code_tinh=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = DistrictSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    
@api_view(['GET', 'POST'])
def CommuneList(request):

    if request.method == 'GET':
        Province_citys = Commune.objects.all()
        serializer = CommuneSerializer(Province_citys,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommuneSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def Com_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Commune.objects.filter(code_huyen=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = CommuneSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
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
        items = Item.objects.get(pk=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ItemSerializer(items,context={'request': request})
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ItemSerializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer
   
    def get_object(self):
        return self.request.user



@api_view(['GET', 'POST'])
def categori_loai_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Category_loai.objects.all()
        serializer = CateroriLoaiSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CateroriLoaiSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def category_loai_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Category_loai.objects.get(pk=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CateroriLoaiSerializer(items,context={'request': request})
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CateroriLoaiSerializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET', 'POST'])
def categori_giong_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Category_giong.objects.all()
        serializer = CateroriGiongSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CateroriGiongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def category_giong_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Category_giong.objects.get(pk=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CateroriGiongSerializer(items,context={'request': request})
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CateroriGiongSerializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def ratelist(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Rate.objects.all()
        serializer = RateSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def rate_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Rate.objects.filter(item=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
   
    if request.method == 'GET':
        serializer = RateSerializer(items,context={'request': request},many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RateSerializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def profile_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Profile.objects.all()
        serializer = profileSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = profileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def profile_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Profile.objects.get(pk=pk)
        

    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = profileSerializer(items,context={'request': request})
        return Response(serializer.data)
    elif request.method == 'PUT':
        
        serializer = profile2Serializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




import sys
from smtplib import SMTP_SSL as SMTP      

from email.mime.text import MIMEText
def sendmail(receivers,context,subject):
    SMTP_Host = 'smtp.gmail.com'
    sender = 'testmail@vinasupport.com'
    receivers = [receivers]
    username = "hoanghuumanht4.com"
    password = "Manhlaix14"

    text_subtype = 'plain'
    content = context
    subject = "Sent from vinasupport.com"
    try:
        msg = MIMEText(content, text_subtype)
        msg['Subject'] = subject
        msg['From'] = sender  
        conn = SMTP(SMTP_Host)
        conn.set_debuglevel(False)
        conn.login(username, password)
        try:
            conn.sendmail(sender, receivers, msg.as_string())
        finally:
            conn.quit()
    except Exception as error:
        raise("sai roi")

class RepAPI(generics.GenericAPIView):
    serializer_class = RepSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print ("manh",serializer['Name'].value)
        sendmail(serializer['Email'],"manh pro vip 123",serializer['Message'])
        return Response(status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def rate_rslist(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Rate_rs.objects.all()
        serializer = Rate_rsSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Rate_rsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def rate_rs_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Rate_rs.objects.filter(profile=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
   
    if request.method == 'GET':
        serializer = Rate_rsSerializer(items,context={'request': request},many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = Rate_rsSerializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def orderlist(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Order.objects.all()
        serializer = OrderSerializer(items,context={'request': request} ,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = Order2Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def order_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Order.objects.filter(user=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
   
    if request.method == 'GET':
        serializer = OrderSerializer(items,context={'request': request},many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = OrderSerializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def order_edit_detail(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    try:
        items = Order.objects.get(pk=pk)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
   
    if request.method == 'GET':
        serializer = Order2Serializer(items,context={'request': request})
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = Order2Serializer(items, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def order_manager_list(request):
    """
    List all Raps, or create a new Rap.
    """
    if request.method == 'GET':
        items = Order.objects.all()
        serializer = Order3Serializer(items,context={'request': request} ,many=True)
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def rate_ahihi_a(request, pk):
    """
    Retrieve, update or delete a Rap instance.
    """
    
    items = Rate.objects.filter(item=pk)
    
=======
        return Response(serializer.data)
>>>>>>> Stashed changes
=======
        return Response(serializer.data)
>>>>>>> Stashed changes
