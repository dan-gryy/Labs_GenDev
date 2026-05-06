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

  leave() {
    this.chat.off("message", this.listener);
    console.log(this.name + " left the chat");
  }
}

const chat = new Chat();

const userA = new User("Ilya", chat);
const userB = new User("Daniil", chat);

chat.on("message", (data) => {
  console.log("[chat activity] " + data.user + " says: " + data.text);
});

userA.send("Hello!");
userB.send("Hi!");

userB.leave();

userA.send("Are you still here?");
