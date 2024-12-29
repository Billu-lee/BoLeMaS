from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('borrower/',views.borrower, name='borrower'),
    path('books/',views.books, name='books'),
    path('setting/',views.setting, name='setting'),
    path('membership/',views.membership, name='membership'),
    path('login/',views.login, name='login'),

]