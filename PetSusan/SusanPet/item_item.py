from SusanPet.models import Rate

def get_list_rate():
    rates = Rate.objects.all()
    print (rates)

