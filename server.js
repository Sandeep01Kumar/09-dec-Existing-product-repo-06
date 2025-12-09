/**
 * @fileoverview Minimal HTTP server for Backprop integration testing.
 * This server responds with "Hello, World!" to all incoming HTTP requests,
 * serving as a simple test scaffold for integration testing purposes.
 *
 * @module hello_world
 * @version 1.0.0
 * @author hxu
 * @license MIT
 * @see {@link https://nodejs.org/api/http.html} Node.js HTTP Module Documentation
 * @example
 * // Start the server
 * node server.js
 *
 * // Test with cURL
 * curl http://127.0.0.1:3000/
 *
 * // Expected response: "Hello, World!"
 */

// Import Node.js built-in HTTP module for creating the server
const http = require('http');

/**
 * Server hostname - localhost binding restricts access to local machine only.
 * Change to '0.0.0.0' to allow external connections in production.
 * @const {string}
 * @default '127.0.0.1'
 */
const hostname = '127.0.0.1';

/**
 * Server port number for listening to incoming connections.
 * Ensure this port is available and not blocked by firewall.
 * @const {number}
 * @default 3000
 */
const port = 3000;

/**
 * Request handler callback for processing incoming HTTP requests.
 * @callback RequestHandler
 * @param {http.IncomingMessage} req - The incoming HTTP request object containing
 *   request headers, method, URL, and other request metadata.
 * @param {http.ServerResponse} res - The server response object used to send
 *   the HTTP response back to the client.
 * @returns {void} Response is written directly to the res object.
 */

/**
 * HTTP Server instance created with request handler callback.
 * The server responds identically to all HTTP methods and paths.
 * @const {http.Server}
 */
const server = http.createServer((req, res) => {
  // Set HTTP response status code to 200 (OK)
  res.statusCode = 200;

  // Set Content-Type header to indicate plain text response
  res.setHeader('Content-Type', 'text/plain');

  // Send response body and end the response
  res.end('Hello, World!\n');
});

// Start the server and bind to the specified hostname and port
// The callback executes once the server is successfully listening
server.listen(port, hostname, () => {
  // Log startup confirmation message to console
  console.log(`Server running at http://${hostname}:${port}/`);
});
