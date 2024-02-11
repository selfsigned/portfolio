#!env python3
import json

def handler():
    return {
        'statusCode': 200,
        'body': json.dumps('hello world!')
    }