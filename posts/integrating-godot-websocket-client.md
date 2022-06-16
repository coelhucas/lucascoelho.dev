---
title: Integrating Godot WebSocketClient with your Custom Server
date: "2020-11-05"
---

## Intro
Every now and then, when I share some proof of concept or demo of a multiplayer project, someone asks me something about how do I integrate Godot with my own server. I've been using WebSockets. I'll explain here how can you achieve the same, using Node as an example.

This works with:

| Tool     |  Version
|----------|:-------------:|
| Godot    |  >= 3.x       |
| Node     |    >= v12.x   |

Basic WebSockets comunication between Godot and Node.

## Setup
- In server side, I'll be using [ws](https://github.com/websockets/ws). I'm considering that you're already familiar with node and knows how to use a [package manager](https://en.wikipedia.org/wiki/Package_manager#:~:text=A%20package%20manager%20or%20package,system%20in%20a%20consistent%20manner.) and [add dependencies](https://classic.yarnpkg.com/en/docs/cli/add/) into a node project.
- Godot has the WebSocket API since 3.X, so any version should work until we have big changes --- 4.0, I'm looking at you.

## Hands on
Using `ws` you can setup a simple server  just by doing
```js
// your_file.js
const WebSocket = require('ws');
const PORT = 1234;
const wss = new WebSocket.Server({ port: PORT });
```

Just to make sure that everything is working fine, add already some basic WebSocket server callbacks to test everything later.

```js
// your_file.js
// [...]
wss.on('connection', (ws) => {
	console.log('Client connected');

	ws.on('message', (msg) => {
		// I'll be sending messages as JSON strings later, that's why I'll call this way.
		console.log(JSON.parse(msg));
	});
});
```

Jumping to the client side, in Godot, I'll create a script called `Network.gd`and add as an `AutoLoad`. And there I'll add the following:

```swift
// Network.gd
# // [...]

const PORT: int = 1234
const URL: String = "ws://localhost:%s" % PORT

var client: WebSocketClient

func _ready() -> void:
	client = WebSocketClient.new()
	client.connect_to_url(URL)
	var err := client.connect("data_received", self, "_on_received_data")
	pass

func _process(_delta: float) -> void:
	client.poll()

func _on_received_data() -> void:
	# // Well catch our server messages here.
	pass
```
Polling is one of the most important parts. If you don't keep the client polling you won't get any packet data from server.


At the moment, if you run your Godot project just like this, with your node server running, you'll get the log (in node) as expected.
```
Client connected
```
To establish basic comunication, one can update the Network.gd to send a message to the server after a successful connection.
```swift
# // Network.gd
# // [...]

func _ready() -> void:
	# // [...] what you already have
	err = client.connect("connection_established", self, "_on_connected")

# // [...]]

func _on_connected(_protocol: String) -> void:
	var message: Dictionary = {
		type = 0,
		text = "hello, server!"
	}
	# // Here we'll convert the message object to a PoolByteArray, by generating
        # // a string from the object and then using the String method 'to_utf8()'
	var packet: PoolByteArray = JSON.print(message).to_utf8()
	# // .get_peer(1) is called to get the connected server peer.
	client.get_peer(1).put_packet(packet)
```
Running again, you should see the data appear server-side.
The dictionary I wrote to send this packet was random. `type` field just simulates some kind of packet  type handling where in real life you'll probably use some enum or other data structure to store the information.

Expecting a response from our server, lets prepare the client function to handle incoming data. We'll handle this in the `_on_received_data function`.

```swift
# // Network.gd
# // [...]

func _on_received_data() -> void:
	var packet: PoolByteArray = client.get_peer(1).get_packet()
	var parsed_data: Dictionary = JSON.parse(packet.get_string_as_utf8()).result
	print(parsed_data)

# // [...]
```

As expected, we read the data in the format it was sent. We get our `utf8` string, and then parse this string into JSON. If the message sent from server isn't valid JSON, it'll break during runtime. You can add error handling here for faulty data.
Also, I'm not going to do nothing with this data, after you parse it you are able to handle the way you want to.

To make server really send something now, we can use the `connection` callback.

```js
// your_file.js
// [...]

ws.on('connection', (ws) => {
	const packet = JSON.stringify({
		type: 1,
		message: {
			text: 'hello, client!'
		}
	})
	ws.send(packet);
	// [...]
}
```

Finally, this will give you the following output:
```json
// node:
{ "type": 0, "text": "hello, server!" }

// godot console:
{"message":{"text":"hello, client!"}, "type":1}
```

With that, you have basic comunication between Godot and your Node server. You can also use this as a reference to implementing a server in any other language, considering the syntax and workflow changes, of course.

## Further reading material
- [WebSocket](https://en.wikipedia.org/wiki/WebSocket) - just in case you don't understand this protocol yet.
- [Gaffer On Games](https://gafferongames.com/) - literally every post here;
-  [Latency Compensating Methods in Client/Server In-game Protocol Design and Optimization](https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization) - you'll have to mess with this sometime.
