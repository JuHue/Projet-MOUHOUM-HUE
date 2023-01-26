FROM python:3.9.16-alpine3.17


WORKDIR /usr/src/app

RUN pip install --upgrade pip
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt
ENTRYPOINT ["sh","entrypoint.sh"]
COPY . .

EXPOSE 8000
EXPOSE 5432
EXPOSE 5433

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]