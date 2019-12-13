from django.shortcuts import render

# Create your views here.
import numpy as np
import pandas  as pd 
import json
from rest_framework import status
import requests
from rest_framework.response import Response
# from django.db import models
from .models import District,Rate_rs,Profile,Item,Rate,Order,Province_city,Commune
import os
def create(request):

    data = pd.read_excel(os.path.dirname(os.path.realpath(__file__)) +"/tinhhuyenxa.xlsx",encoding='utf8',sheet_name='huyen')
    a = np.asarray(data['code'])
    b = np.asarray(data['name'])
    c = np.asarray(data['code_tinh'])



    for i in range(len(a)): 
  
        x= District(code=a[i],name=b[i],code_tinh=c[i])
        x.save()
    # b.save()
    # r = requests.post(url = URL, data = data_request)
    return  Response(status=status.HTTP_400_BAD_REQUEST)
def create2(request):

    data = pd.read_excel(os.path.dirname(os.path.realpath(__file__)) +"/tinhhuyenxa.xlsx",encoding='utf8',sheet_name='tinh')
    a = np.asarray(data['code'])
    b = np.asarray(data['name'])
    # c = np.asarray(data['code_tinh'])



    for i in range(len(a)): 
  
        x= Province_city(code=a[i],name=b[i])
        x.save()
    # b.save()
    # r = requests.post(url = URL, data = data_request)
    return  Response(status=status.HTTP_400_BAD_REQUEST)

def create3(request):

    data = pd.read_excel(os.path.dirname(os.path.realpath(__file__)) +"/tinhhuyenxa.xlsx",encoding='utf8',sheet_name='xa')
    a = np.asarray(data['code'])
    b = np.asarray(data['name'])
    c = np.asarray(data['code_huyen'])



    for i in range(len(a)): 
  
        x= Commune(code=a[i],name=b[i],code_huyen=c[i])
        x.save()
    # b.save()
    # r = requests.post(url = URL, data = data_request)
    return  Response(status=status.HTTP_400_BAD_REQUEST)

import djqscsv
from django.http import HttpResponse

def export_to_csv(request):
    qs = Order.objects.all()
    return djqscsv.render_to_csv_response(qs)


        