const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I06BGJxn6fjow8lvv4ZWJhXar0AJ5vEttViCvVolW9j2Sn43uaEs07rLjJWfgRRKlWRxRVCaz4j2OXWand1KPMv00NV6n3EQt');

// API 

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => {
    response.status(200).send('hello world');
});

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('total', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits fo the currency
        currency: "usd",
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - lisen command
exports.api = functions.https.onRequest(app);

// example endpoint

// http://localhost:5001/clone-edb1c/us-central1/api
