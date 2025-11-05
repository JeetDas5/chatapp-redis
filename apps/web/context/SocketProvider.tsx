"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
  children?: ReactNode;
}

interface ISocketContext {
  sendMessage: (message: string) => void;
  messages?: string[];
}

const SocketContext = createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage: ISocketContext["sendMessage"] = useCallback(
    (message: string) => {
      console.log("Send message: ", message);
      if (socket) {
        socket.emit("event:message", { message });
      }
    },
    [socket]
  );

  const onMessageReceived = useCallback((msg: string) => {
    console.log("Message received from server: ", msg);
    const { message } = JSON.parse(msg) as { message: string };
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  useEffect(() => {
    const _socket = io("http://localhost:8000");
    _socket.on("message", onMessageReceived);
    setSocket(_socket);

    return () => {
      _socket.disconnect();
      _socket.off("message", onMessageReceived);
      setSocket(null);
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage,messages }}>
      {children}
    </SocketContext.Provider>
  );
};
