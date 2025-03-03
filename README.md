# Garbage Collection Vehicle Tracking and Route Management System

## Overview

This project aims to enhance the efficiency of urban waste management through a comprehensive vehicle tracking and route management system. By leveraging GPS technology and data analytics, the system optimizes garbage collection routes, improves service reliability, and enhances customer satisfaction. This project is completed and would not be further updated please leave a comment if you find a bug

## Features

- **Real-Time GPS Data Collection**: Continuously tracks vehicle locations to ensure efficient route management.
- **Bin Fullness Monitoring**: Uses sensors to monitor waste bin levels, enabling dynamic scheduling based on demand.
- **Route Planning**: Develops optimal routes using historical data and real-time conditions.
- **Vehicle Dispatch**: Assigns vehicles to routes efficiently, reducing travel time and fuel consumption.
- **Dynamic Route Adjustments**: Adapts routes in real-time based on traffic conditions or unforeseen events.
- **Service Completion Monitoring**: Tracks the status of each collection route to ensure timely service.
- **Customer Updates**: Provides real-time notifications to customers about collection schedules and delays.
- **Feedback Collection**: Gathers input from drivers and customers to continuously improve operations.
- **Data Analysis for Optimization**: Analyzes collected data to refine routes and enhance overall efficiency.

## Installation
Clone the Repository:
 - git clone https://github.com/yourusername/garbage-tracking-system.git
 - cd garbage-tracking-system

Install Dependencies:

  - pip install -r requirements.txt

Set Up Database:
  - Configure your database settings in config/database.yml.

Run database migrations:
  - python manage.py migrate

Run the Application:
python manage.py runserver

## Usage
- Access the Dashboard:
- Navigate to http://localhost:8000 in your web browser.
- Log in with your credentials.

Monitor Vehicles:
- View real-time locations of all garbage collection vehicles on the map.

Adjust Routes:
- Use the interface to make dynamic changes to routes as needed.

Review Reports:
- Access performance reports and feedback data for analysis.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
   
