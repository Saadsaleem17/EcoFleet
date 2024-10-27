#include <ESP8266WiFi.h>

const int trigPin = 5; // Ultrasonic sensor pins
const int echoPin = 4;
long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(115200);

  WiFi.begin("SSID", "PASSWORD"); // Connect to WiFi network
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  // Measure distance
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2; // Calculate distance in cm

  if (distance < 10) { // Threshold for fill level
    sendDataToCloud(distance);
  }

  delay(300000); // Wait for 5 minutes before next measurement
}

void sendDataToCloud(int level) {
  // Code to send data to cloud (using HTTP, MQTT, etc.)
  Serial.print("Sending data to cloud: ");
  Serial.println(level);
}
