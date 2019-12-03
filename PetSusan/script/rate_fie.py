import numpy as np
import pandas  as pd 
import json
import requests
URL = 'http://localhost:8000/api/rate/'
data = pd.read_excel("./file/rate.xlsx",encoding='utf8')
a = np.asarray(data['item'])
b = np.asarray(data['profile'])
c = np.asarray(data['rate_u'])



for i in range(len(a)): 
    data_request={

        'item':a[i],
        'profile' :b[i],
        'rate_u' :c[i]
     
            
    }
        
    # print (data_request)
    r = requests.post(url = URL, data = data_request)
     
   
  
