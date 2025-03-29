# WebSocket Demo

This demo shows how to quickly set up a Node.js project that connects to Vybe Websocket.

## Getting Started

1. **Clone the repository**
   ```bash
    git clone https://github.com/vybenetwork/websocket-demo-node.git
    
    cd websocket-demo
2.	**Install dependencies**

    **Using npm:**
    ```bash
    npm install
    ```
    **Or using Yarn:**
    ```bash
    yarn
    ```

3.	**Configure environment variables**

	•Copy or rename the file .env.example to .env.

	•Update any required variables inside .env (e.g., WS_URL, API_KEY, etc.).
4.	**Run the demo**
    ```bash
    node index.js
The script will start the WebSocket connection using the variables you set in .env.

**Files**

	•	index.js: Main entry point for establishing the WebSocket connection.

	•	.env.example: Example environment variables file (copy this to .env and fill in your own values).

	•	.gitignore: Ignores common Node.js artifacts and the .env file so you don’t accidentally commit secrets.


⸻

That’s it! You’re ready to connect to and experiment with your Vybe WebSocket server.

Contact support [here](https://t.me/VybeSlackTGBot)

Docs: https://docs.vybenetwork.com/docs/websockets