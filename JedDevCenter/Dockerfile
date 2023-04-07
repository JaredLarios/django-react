# Use an official Python runtime as a parent image
FROM python:3.6

# Set the working directory to /app
WORKDIR /app

RUN apk update \
    && apk add --no-cache gcc musl-dev postgresql-dev python3-dev \
    && pip install --upgrade pip

# Copy the rest of the application requirements
COPY ./requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

COPY ./ ./ /app/

CMD ["python3", "manage.py","runserver","0.0.0.0:8000"]