import { Redis } from "ioredis";
import { Server } from "socket.io";

const pub = new Redis({
  host: "valkey-3fefcd1a-chatapp-jeet.h.aivencloud.com",
  port: 25521,
  username: "default",
  password: "AVNS_KOHTT3Nom4FO03CuHCj",
});
const sub = new Redis({
  host: "valkey-3fefcd1a-chatapp-jeet.h.aivencloud.com",
  port: 25521,
  username: "default",
  password: "AVNS_KOHTT3Nom4FO03CuHCj",
});

class SocketService {
  private _io: Server | null = null;

  constructor() {
    console.log("Init socket server");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });

    sub.subscribe("MESSAGES");
  }

  public initListeners() {
    const io = this._io;
    console.log("Initialise socket listeners...");
    io?.on("connect", (socket) => {
      console.log("New socket connected ", socket.id);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("Message received: ", message);
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });

    sub.on("message", (channel, message) => {
      if (channel === "MESSAGES") {
        io?.emit("message", message);
      }
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
