from django.urls import path,include
from .api import Province_cityList,RegisterAPI,LoginAPI,contact_list,contact_detail,item_list,item_detail


urlpatterns = [
    path('city/',Province_cityList),
    path('contact/',contact_list),
    path('contact/<int:pk>',contact_detail),
    path('item/',item_list),
    path('item/<int:pk>',item_detail),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/login/',LoginAPI.as_view()),
    path('auth/', include('knox.urls')),
]