from django.urls import path,include
from .api import Province_cityList,RegisterAPI


urlpatterns = [
    path('city/',Province_cityList),
    path('auth/register/', RegisterAPI.as_view()),
    path('auth/', include('knox.urls')),
]