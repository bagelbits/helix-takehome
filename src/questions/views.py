from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the questions index.")

def new(request):
    if request.method == "POST":
        ""
    return HttpResponse("Hello, world. You're at the questions new.")
