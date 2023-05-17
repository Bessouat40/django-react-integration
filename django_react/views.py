from typing import Any
from django import http
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.http import JsonResponse
import json

def index(request):
    return render(request, 'index.html', {'number': 10})

class ReactApp(TemplateView):
    template_name = "index.html"
    data = {"message":"ici django"}

    @csrf_exempt
    def get(self, request) :
        return render(request, self.template_name)
    
    @csrf_exempt
    def post(self, request):
        print('coucou')
        dump = json.dumps(self.data)
        return HttpResponse(dump, content_type='application/json')
