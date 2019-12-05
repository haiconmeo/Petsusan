import numpy as np
import pandas  as pd 
import json
import requests
URL = 'http://localhost:8000/api/city/'
data = pd.read_excel("./file/tinhhuyenxa.xlsx",encoding='utf8',sheet_name='tinh')
a = np.asarray(data['code'])
b = np.asarray(data['name'])




for i in range(len(a)): 
    data_request={

        'code':a[i],
        'name' :b[i],
        
     
            
    }
        
    # print (data_request)
    r = requests.post(url = URL, data = data_request)