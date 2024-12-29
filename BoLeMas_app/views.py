from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'BoLeMas_app/index.html')

def borrower(request):
    return render(request,'BoLeMas_app/borrower.html') 

def login(request):
    return render(request,'BoLeMas_app/login.html') 

def membership(request):
    return render(request,'BoLeMas_app/membership.html') 

def setting(request):
    return render(request,'BoLeMas_app/settings.html')

def books(request):
    return render(request,'BoLeMas_app/books.html')  
