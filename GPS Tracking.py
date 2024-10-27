import paho.mqtt.client as mqtt
from geopy.geocoders import Nominatim
import random
import time

broker = "broker.emqx.io"  # Example MQTT broker
client = mqtt.Client("GPS_Tracker")

def publish_location():
    geolocator = Nominatim(user_agent="geoapi")
    location = geolocator.geocode("City Center")  # Initial location for simulation
    latitude, longitude = location.latitude, location.longitude

    while True:
        latitude += random.uniform(-0.0001, 0.0001)  # Simulate movement
        longitude += random.uniform(-0.0001, 0.0001)

        data = {
            "latitude": latitude,
            "longitude": longitude,
            "timestamp": time.time()
        }
        client.publish("city/waste/gps", str(data))
        print("Location sent:", data)
        time.sleep(10)

client.connect(broker)
publish_location()
