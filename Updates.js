const express = require('express');
const admin = require('firebase-admin');
const app = express();

app.post('/updateSchedule', async (req, res) => {
    const payload = {
        notification: {
            title: 'Collection Schedule Update',
            body: req.body.newSchedule,
        },
    };
    await admin.messaging().sendToTopic('wasteUpdates', payload);
    res.send('Notification sent successfully');
});
