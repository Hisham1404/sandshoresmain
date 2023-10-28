from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth



def index(request):
    return render(request, 'sandshoresmain1/index.html')

def contact(request):
    return render(request, 'sandshoresmain1/contact.html')


def courses(request):
    return render(request, 'sandshoresmain1/courses.html')


def leaderboard(request):
    return render(request, 'sandshoresmain1/leaderboard.html')

def comingsoon(request):
    return render(request, 'sandshoresmain1/comingsoon.html')

def road(request):
    return render(request, 'sandshoresmain1/road.html')

def congratulations(request):
    return render(request, 'sandshoresmain1/congratulations.html')

def ipc(request):
    return render(request, 'sandshoresmain1/ipc.html')

def quiz(request):
    return render(request, 'sandshoresmain1/quiz.html')

def sign(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        user = User.objects.create_user(username=username, email=email,password=password)
        user.save();
        # return redirect('../../')
    else:
        return render(request, 'sandshoresmain1/sign.html')

def draw(request):
    return render(request, 'sandshoresmain1/draw.html')

