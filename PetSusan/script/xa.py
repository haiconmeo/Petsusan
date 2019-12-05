import numpy as np
import pandas  as pd 
import json
import requests
from django.db import models
from SusanPet.models import Commune
URL = 'http://localhost:8000/api/xa/'
data = pd.read_excel("./file/tinhhuyenxa.xlsx",encoding='utf8',sheet_name='xa')
a = np.asarray(data['code'])
b = np.asarray(data['name'])
c = np.asarray(data['code_huyen'])



for i in range(3554,len(a)): 
    # data_request={

    #     'code':a[i],
    #     'name' :b[i],
    #     'code_huyen':c[i]
        
     
            
    # }
    b = Commune(code=a[i],name=b[i],code_huyen=c[i])
    b.save()
    # r = requests.post(url = URL, data = data_request)
        