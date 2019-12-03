from django.db import models
from django.contrib.auth.models import User 
#
class Province_city(models.Model):#tỉnh
    code=models.CharField(max_length=2)
    name=models.CharField(max_length=50)

class District(models.Model):
    code_city =models.ForeignKey(Province_city,on_delete=models.CASCADE)
    code =  models.DecimalField(max_digits=4, decimal_places=2)
    name = models.CharField(max_length=50)

class Commune(models.Model):#xã
    code = models.DecimalField(max_digits=4, decimal_places=2)
    name = models.CharField(max_length=50)
# lưu địa chỉ người dùng
class Address(models.Model):
    tinh = models.OneToOneField(Province_city,  on_delete=models.CASCADE)
    huyen = models.OneToOneField(District, on_delete=models.CASCADE)
    xa = models.OneToOneField(Commune, on_delete=models.CASCADE)
    street = models.CharField(max_length=50)
#thừa kế model User
class Profile(models.Model):
    id = models.IntegerField(primary_key=True)
    avatar = models.FileField(upload_to='img/',default = 'img/no-img.jpg') 
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phonenum = models.CharField(max_length=30, blank=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE,blank=True,null=True)
    birth_date = models.DateField(null=True, blank=True)
    cmmd = models.CharField(max_length=30, blank=True)

class Category_phukien(models.Model):
    name=models.CharField(max_length=30,blank=True)
class Category_giong(models.Model):

    name=models.CharField(max_length=30,blank=True)
class Category_loai(models.Model):
    name=models.CharField(max_length=30,blank=True)

class Image(models.Model):

    image= models.FilePathField(path="/img")
class Item(models.Model):

    name = models.CharField(max_length=60)
    image = models.FileField(upload_to='img/' ) 
    age=models.IntegerField()
    cat_giong= models.OneToOneField(Category_giong, on_delete=models.CASCADE, null=True)
    cat_loai = models.OneToOneField(Category_loai, on_delete=models.CASCADE,null=True)
    price =models.IntegerField()
    weight = models.IntegerField()
    color = models.CharField(max_length=30)
    amounts = models.IntegerField()
   
    pet =  models.BooleanField(default=True)
    sex = models.BooleanField(default=True)
    description = models.TextField(blank = True)
class Post (models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    content = models.TextField()
class Rate_post(models.Model):
    post = models.OneToOneField(Post, on_delete=models.CASCADE)
    rate = models.FloatField()
class Order(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True, blank=True)
    status = models.BooleanField()
    note = models.TextField()
class Comment(models.Model):

    user = models.ManyToManyField(Profile,blank=True)
    post = models.ManyToManyField(Post,blank=True)
    content = models.TextField()
class Rate(models.Model):
    item = models.ForeignKey(Item,  on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    rate_u = models.IntegerField()
class Contact(models.Model):
    Subject = models.CharField( max_length=50)
    Email   = models.EmailField( max_length=254)
    Name    = models.CharField(max_length=50)
    Message = models.TextField(blank = True)

 



