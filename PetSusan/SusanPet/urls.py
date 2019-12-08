from django.urls import path,include
from .api import Province_cityList,RegisterAPI,LoginAPI,contact_list,contact_detail,item_list,item_detail,UserAPI,categori_loai_list,category_loai_detail,categori_giong_list,ratelist,rate_detail
from .api import District_List,CommuneList,profile_list,RepAPI,item_detail,profile_detail,category_giong_detail,Dis_detail,Com_detail
from .views import create

urlpatterns = [
    path('city/',Province_cityList),
    path('huyen/',District_List),
    path('huyen/<int:pk>',Dis_detail),
    path('xa/',CommuneList),
    path('xa/<int:pk>',Com_detail),
    path('create',create),
    path('contact/',contact_list),
    path('contact/<int:pk>',contact_detail),
    path('rate/',ratelist),
    path('rate/<int:pk>',rate_detail),
    path('categori_loai/',categori_loai_list),
    path('categori_loai/<str:pk>/',category_loai_detail),
    path('categori_giong/',categori_giong_list),
    path('categori_giong/<str:pk>/',category_giong_detail),
    path('item/',item_list),
    path('item/<int:pk>/',item_detail),
    path('Rep/',RepAPI.as_view()),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/login/',LoginAPI.as_view()),
    path('auth/profile/',profile_list),
    path('auth/profile/<int:pk>/',profile_detail),
    path('auth/user/', UserAPI.as_view()),
    path('auth/', include('knox.urls')),
]