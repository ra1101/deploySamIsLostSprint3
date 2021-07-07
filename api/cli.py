import requests
from uuid import uuid4
from datetime import datetime

def createEntry(data):
    r = requests.post('http://localhost:3004/sightings', json=data)
    print(r.status_code)
    if r.status_code == 201:
        print("Success")
    else:
        print("Failed to create entry")
    return r

def getEntry(guid):
    g = requests.get('http://localhost:3004/sightings/' + guid)
    if g.status_code != requests.codes.ok:
        print("Failed to retrieve entry")
    return g

def deleteEntry(guid):
    d = requests.delete('http://localhost:3004/sightings/'+guid)
    if d.status_code == requests.codes.ok:
        print("Success")
    else:
        print("Failed to delete entry")
    return d

def main(args):
    action = args.action


    if action == 'create':
        guid = str(uuid4()).upper()
        print(guid)
        now = datetime.now()
        date = now.strftime("%m/%d/%Y")
        time = now.strftime("%I:%M %p")

        data = {
            "id": guid,
            "entryDate": date,
            "entryTime": time,
            "sightingDate": args.sightingDate,
            "sightingTime": args.sightingDate,
            "timeZone": 'America/New_York',
            "type": args.type,
            "sightedLocation": args.sightedLocation,
            "currentLocation": args.currentLocation,
            "title": args.title,
            "description": args.description
        }
        createEntry(data)

    if action == 'get':
        guid = args.id
        g = getEntry(guid)
        print(g.json())


    if action == 'delete':
        guid = args.id
        deleteEntry(guid)