require("dotenv").config();
const WebSocket = require("ws"); // `npm install ws` or `yarn add ws` to install the ws package

const websocketUri = process.env.WS_URL; // Subscribe to Business or Premium plan here for Websocket API access - hhttps://alpha.vybenetwork.com/settings/plans - generate API key and get websocket URI here https://alpha.vybenetwork.com/settings/api-management

let ws;
const enableReconnect = true; // Set to false if you don't want to reconnect automatically

function getTimestamp() {
    return Math.floor(Date.now() / 1000); // Unix timestamp
}

function connect() {
    ws = new WebSocket(websocketUri, {
        headers: {
            "X-API-Key": process.env.API_KEY, // Subscribe to Business or Premium plan here for Websocket API access - https://alpha.vybenetwork.com/settings/plans - and generate API key here https://alpha.vybenetwork.com/settings/api-management
        },
    });

    ws.on("open", () => {
        console.log("Connected to the WebSocket server " + getTimestamp());

        // On connection, send a configure message to specify the filters.
        const configureMessage = JSON.stringify({
            type: "configure",
            filters: {
                trades: [],
                transfers: [],
                oraclePrices: [],
                // For the demo, we are adding an empty array for each data type to receive all messages, you can filter accordingly to your needs
            },
        });
        ws.send(configureMessage);
    });

    ws.on("message", (message) => {
        let parsedMessage;
        try {
            parsedMessage = JSON.parse(message);
            console.log(parsedMessage);

            // You can now used the data in the parsedMessage object for your application or trading bot
        } catch (e) {
            console.error(`Failed to parse message: ${e}`);
            return;
        }
    });

    ws.on("close", () => {
        console.log("Connection closed.");
        if (enableReconnect) {
            attemptReconnect();
        }
    });

    ws.on("error", (error) => {
        console.error(`WebSocket error: ${error}`);
        if (enableReconnect) {
            attemptReconnect();
        }
    });
}

function attemptReconnect() {
    console.log("Attempting to reconnect...");
    connect();
}

// Start the initial connection
connect();
