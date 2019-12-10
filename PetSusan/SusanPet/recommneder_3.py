from django.shortcuts import render

# Create your views here.
import numpy as np
import pandas  as pd 
import json
from rest_framework import status
import requests
from rest_framework.response import Response
# from django.db import models
from .models import District,Rate_rs,Profile,Item
import os
def recommendation_3(request):
    

    data = pd.read_csv(os.path.dirname(os.path.realpath(__file__)) +"/model_3.csv",encoding='utf8')
    a = np.asarray(data['user'])
    b = np.asarray(data['item'])
    c = np.asarray(data['recommended'])



    for i in range(len(a)): 
  
        x= Rate_rs(profile=Profile.objects.get(pk=int(a[i])),item=Item.objects.get(pk=int(b[i])),rate=float(c[i]))
        x.save()
    # b.save()
    # r = requests.post(url = URL, data = data_request)
    return  Response(status=status.HTTP_400_BAD_REQUEST)
