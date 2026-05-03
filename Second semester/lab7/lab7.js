const EventEmitter = require("events");

class Chat extends EventEmitter {
  sendMessage(user, text) {
    this.emit("message", { user, text });
  }
}

class User {
  constructor(name, chat) {
    this.name = name;
    this.chat = chat;

    this.listener = (data) => {
      if (data.user !== this.name) {
        console.log(
          this.name + " received from " + data.user + ": " + data.text,
        );
      }
    };

    this.chat.on("message", this.listener);
  }

  send(text) {
    this.chat.sendMessage(this.name, text);
  }
}

const chat = new Chat();

const userA = new User("Ilya", chat);
const userB = new User("Daniil", chat);

userA.send("Hello!");
userB.send("Hi!");
