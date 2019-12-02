from django.urls import path,include
<<<<<<< HEAD
from .api import Province_cityList,RegisterAPI,LoginAPI,contact_list,contact_detail,item_list,item_detail,UserAPI
=======
from .api import Province_cityList,RegisterAPI,LoginAPI,contact_list,contact_detail,item_list
>>>>>>> parent of 3e1b430... login+get id item


urlpatterns = [
    path('city/',Province_cityList),
    path('contact/',contact_list),
    path('contact/<int:pk>',contact_detail),
    path('item/',item_list),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/login/',LoginAPI.as_view()),
    path('auth/user/', UserAPI.as_view()),
    path('auth/', include('knox.urls')),
]