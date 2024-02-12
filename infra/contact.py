#!env python3
import re
import json
import boto3

client = boto3.client('ses', region_name='eu-north-1')

def respond(status_code, msg):
    return {
        'statusCode': status_code,
        'body': msg
    }

def send_mail(name, email, message):
    subject = f"Selfsigned.dev Contact - {email}"
    text = f"Name: {name}\nEmail: {email}\n Message:\n{message}"
    my_email = 'me@selfsigned.dev'

    client.send_email(
    Destination={
        'ToAddresses': [my_email]
    },
    Message={
        'Body': {
            'Text': {
                'Charset': 'UTF-8',
                'Data': text
            }
        },
        'Subject': {
            'Charset': 'UTF-8',
            'Data': subject
            }
        },
        Source=my_email)


def lambda_handler(event, context):

    try:
      # validate request
      body = json.loads(event['body'])

      name = body.get('name')
      email = body.get('email')
      message = body.get('message')

      if not name:
        return respond(400, 'Name required')
      if not (email and re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email)):
        return respond(400, 'Valid Email required') 
      if not message:
        return respond(400, 'Message required')
    except Exception as e:
        # return respond(500, type(e).__name__) dbg
        return respond(400, "Bad Request")
    
    send_mail(name, email, message)
    return respond(200, 'Email sent')