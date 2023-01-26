#!/bin/bash -x
# make all directories as modules 
# echo "Make all directories as modules"
#python -m back
# python -m user

# collect static files
# echo "Collect static files"
# python  manage.py collectstatic --noinput

# Apply database migrations
echo "Aplly database migrations"
echo "      makemigrations"
python manage.py makemigrations
echo "      migrate"
python manage.py migrate

# create superuser
echo "Create superuser"
python manage.py createsuperuser --username admin --email julienhue94@gmail.com --noinput

# Start server 
# echo "Starting server"
# python manage.py runserver 0.0.0.0:8000

exec "$@"