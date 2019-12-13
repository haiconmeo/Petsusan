import numpy as np
import pandas  as pd 
import json
import requests
URL = 'http://localhost:8000/api/item/'
data = pd.read_csv("./file/item_new.csv",encoding='utf8')
a = np.asarray(data['name'])
b = np.asarray(data['age'])
c = np.asarray(data['price'])
d = np.asarray(data['weight '])
e = np.asarray(data['color'])
f = np.asarray(data['amounts'])
g = np.asarray(data['sex'])
h = np.asarray(data['description'])
j = np.asarray(data['image'])
k = np.asarray(data['pet'])
# l = np.asarray(data['cat_loai'])
x= int(len(a)/2)
for i in range(x):   
   
    data_request={

        'name':a[i],
        'age' :b[i],
        'price' :c[i],
        'weight' :d[i],
        'color' :e[i],
        'amounts' :f[i],
        'sex' :g[i],
        'description' : h[i],
        'image' :j[i],
        'pet' : k[i],
        # 'cat_loai':l[i]
            
    }
        
    # print (data_request)
    r = requests.post(url = URL, data = data_request)
