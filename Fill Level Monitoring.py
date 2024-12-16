import time
import paho.mqtt.client as mqtt
import RPi.GPIO as GPIO

# Setup GPIO and MQTT
GPIO.setmode(GPIO.BCM)
TRIG = 23
ECHO = 24
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

mqtt_client = mqtt.Client()
mqtt_client.connect("mqtt.broker.url", 1883, 60)

def get_fill_level():
    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)

    while GPIO.input(ECHO) == 0:
        pulse_start = time.time()
    while GPIO.input(ECHO) == 1:
        pulse_end = time.time()

    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    return distance

while True:
    fill_level = get_fill_level()
    mqtt_client.publish("waste/fill_level", fill_level)
    time.sleep(60)  # Check every minute
