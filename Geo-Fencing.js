// JavaScript code for route compliance and alerts using Node.js and MongoDB

const gps = require('gps');
const db = require('./db'); // Database connection

const predefinedRoutes = [
    { routeId: "R1", boundary: [[lat1, lon1], [lat2, lon2]] },
    { routeId: "R2", boundary: [[lat3, lon3], [lat4, lon4]] }
];

function checkRouteCompliance(vehicleLocation, route) {
    if (!isWithinBoundary(vehicleLocation, route.boundary)) {
        alertRouteDeviation(vehicleLocation);
    }
}

function alertRouteDeviation(location) {
    db.collection("alerts").insertOne({
        alertType: "Route Deviation",
        location,
        timestamp: new Date()
    });
}

gps.on("location", (vehicleLocation) => {
    predefinedRoutes.forEach((route) => {
        checkRouteCompliance(vehicleLocation, route);
    });
});
