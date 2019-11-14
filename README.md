# Flight-Optimizer
**What is it?**

flight-optimizer is a service that searches for the cheapest price/distance flight among given destinations for the next 2 days 


**How to start this project?**

In order to start this project you will have to have python, and nodejs with latest versions, for django and react accordingly.

Then we will need to install some packages along the way,
Let's go through python packages first.

pip install django
pip install haversine
pip install requests
pip install django-cors-headers
pip install json
pip install djangorestframework



for npm we need to be able to start basic react projects, 
in addition to that we need 

npm -i bootstrap
npm -i axios

And some other that it may require

Then start django project with  "python manage.py startserver"
And react app with "npm start"

Main working script is located under django/myproject
And is startable directly with **python main.py src <dest_1 dest_2 ... dest_n>**
or with the script file...(for OS Windows)(Coming soon for linux) using **flight-optimizer --from src --to [destinations]**
