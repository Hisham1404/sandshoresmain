from django.urls import path
from . import views


urlpatterns = [
    path('', views.index,name='index' ),
    path('courses/', views.courses,name='courses' ),
    path('contact/', views.contact, name='contact' ),
    path('leaderboard/', views.leaderboard,name='leaderboard' ),
    path('comingsoon/', views.comingsoon,name='comingsoon' ),
    path('road/', views.road,name='road' ),
    path('ipc/', views.ipc,name='ipc' ),
    path('quiz/', views.quiz,name='quiz' ),
    path('sign/', views.sign,name='sign' ),
    path('draw/', views.draw,name='draw' ),
    path('congratulations/', views.congratulations,name='congratulation' ),
    # path('sign/register', views.index),

]