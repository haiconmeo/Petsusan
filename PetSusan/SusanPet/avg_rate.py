from .models import Rate 
from django.core.management.base import BaseCommand

import requests
def get_list(requests):
    list_post = Rate.Objects.filter(item = id_post)
    print (list_post)



class Command(BaseCommand):
    help = 'Displays current time'

    def handle(self, *args, **kwargs):
        get_list(1)
        
        


