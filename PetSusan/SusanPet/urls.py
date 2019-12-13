from django.urls import path,include
from .api import Province_cityList,RegisterAPI,LoginAPI,contact_list,contact_detail,item_list,item_detail,UserAPI,categori_loai_list,category_loai_detail,categori_giong_list,ratelist,rate_detail
from .api import District_List,CommuneList,profile_list,RepAPI,item_detail,profile_detail,category_giong_detail,Dis_detail,Com_detail,rate_rslist,rate_rs_detail,orderlist,order_detail,order_edit_detail,order_manager_list
from .views import create,export_to_csv,create2,create3
from .recommender_1 import recommendation_1
from .recommender_2 import recommendation_2
urlpatterns = [
    path('city/',Province_cityList),
    path('huyen/',District_List),
    path('huyen/<int:pk>',Dis_detail),
    path('xa/',CommuneList),
    path('xa/<int:pk>',Com_detail),
    path('create',create),
    path('create2',create2),
    path('create3',create3),
    path('contact/',contact_list),
    path('contact/<int:pk>',contact_detail),
    path('rate/',ratelist),
    path('rate/<int:pk>',rate_detail),
    path('rate_rs/',rate_rslist),
    path('rate_rs/<int:pk>',rate_rs_detail),
    path('categori_loai/',categori_loai_list),
    path('categori_loai/<int:pk>/',category_loai_detail),
    path('categori_giong/',categori_giong_list),
    path('categori_giong/<int:pk>/',category_giong_detail),
    path('item/',item_list),
    path('item/<int:pk>/',item_detail),
    path('Rep/',RepAPI.as_view()),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/login/',LoginAPI.as_view()),
    path('auth/profile/',profile_list),
    path('auth/profile/<int:pk>/',profile_detail),
    path('auth/user/', UserAPI.as_view()),
    path('train1/',recommendation_1),
    path('train2/',recommendation_2),
    path('cart/',orderlist),
    path('cart_admin/',order_manager_list),
    path('cart/<int:pk>',order_detail),
    path('cartedit/<int:pk>',order_edit_detail),
    path('to_csv/',export_to_csv),
    path('auth/', include('knox.urls')),

]