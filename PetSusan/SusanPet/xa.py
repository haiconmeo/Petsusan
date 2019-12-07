import numpy as np
import pandas  as pd 
import json
import requests
# from django.db import models
from models import Commune
URL = 'http://localhost:8000/api/xa/'
data = pd.read_excel("./file/tinhhuyenxa.xlsx",encoding='utf8',sheet_name='xa')
a = np.asarray(data['code'])
b = np.asarray(data['name'])
c = np.asarray(data['code_huyen'])



print("ok")
    # b.save()
    # r = requests.post(url = URL, data = data_request)
        