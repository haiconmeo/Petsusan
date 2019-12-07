# -*- coding: utf-8 -*-
import numpy as np
import pandas  as pd 
import json
import requests
URL = "http://localhost:8000/api/categori_giong/"
#mở file csv  bằng pandas
data = pd.read_excel("./file/categoryGiong.xlsx",encoding='utf8')
a=np.asarray(data['name'])
print (a)


for p in a:
        

    name= p
   
    data_request={
        'name':name,
            
    }
        
    print (data_request)
    r = requests.post(url = URL, data = data_request)