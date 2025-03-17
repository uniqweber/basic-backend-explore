### What is HTTP and HTTPS

- HTTP stands for Hyper Text Transfer Protocol
- it is a protocol for transferring data over the web
- it is a request response protocol
- it is a stateless protocol
- it is a connectionless protocol

### What is HTTPS

- HTTPS stands for Hyper Text Transfer Protocol Secure
- it is the secure version of HTTP
- it uses a secure socket layer (SSL) or a transport layer security (TLS) to encrypt the data
- it is used for secure communication over the web

### What is Protocol

- a protocol is a set of rules and standards used for communication
- it is used to define how data is transmitted and received over the web
- it is used to define how devices communicate with each other
- it is used to define how data is formatted and transmitted

### Basic HTTP Methods

- `GET` - used to retrieve data from the server
- `POST` - used to send data to the server
- `PUT` - used to update data on the server
- `DELETE` - used to delete data on the server

### HTTP Module Methods

- `http.createServer()` - creates a new http server
- `http.get()` - makes a get request to the server
- `http.post()` - makes a post request to the server
- `http.put()` - makes a put request to the server
- `http.delete()` - makes a delete request to the server

### Creating Server and Listening Server

- `http.createServer()` - creates a new http server
- `server.listen()` - starts the server and listens for incoming requests
- `server.on('request', (req, res) => { ... })` - called when a request is received
- `server.on('connection', (socket) => { ... })` - called when a new connection is established
- `server.on('close', () => { ... })` - called when the server is closed
