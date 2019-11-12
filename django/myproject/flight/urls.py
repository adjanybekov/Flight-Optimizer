from django.urls import path
from .views import get_flight

urlpatterns = [    
    path("flight/<value1>/<value2>", get_flight, name="get-flight")
]
