from .models import Rate 
def get_list(id_post):
    list_post = Rate.Objects.get(item = id_post)
    return list_post

def avg_rate(id_post):
