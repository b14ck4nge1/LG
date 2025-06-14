const client = mqtt.connect("wss://io.adafruit.com:443", {
  username: "B1ackAngel",
  password: "aio_tMEw56V0XYUueuuGaaLaIPsMK3ME"
});

client.on("connect", function () {
  console.log("Connected to Adafruit IO MQTT");
});

function send(feed, value) {
  const topic = `B1ackAngel/feeds/${feed}`;
  client.publish(topic, value);
  alert(`Sent: ${feed} = ${value}`);
}

function setTemp() {
  const value = document.getElementById("temp").value;
  send("ac.temp", value);
}

function setFan(fanFeed) {
  if (fanFeed) send(fanFeed, "true");
}
