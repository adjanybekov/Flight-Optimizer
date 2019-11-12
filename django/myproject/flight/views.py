from django.shortcuts import render
import requests
from django.http import HttpResponse
import subprocess
from urllib.parse import urlparse
from django.http import JsonResponse


def get_flight(request,value1,value2):	
	print(value1,value2)
	print("replaced",value2.replace(","," "))
	current_url = request.build_absolute_uri()
	destinations = value2.replace(","," ")

	src = value1
	dest = value2	
	cmd = "python main.py %s %s"%(src,destinations)
	print(cmd)
	proc  = subprocess.Popen(cmd, stdout=subprocess.PIPE).stdout.read().decode("utf-8")
	L = proc.split("\n")
	print(proc.split("\n"))
	L=L[1:len(L)-1] if len(L)>1 else L
	return JsonResponse(L,safe=False)
	
