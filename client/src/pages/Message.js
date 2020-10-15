import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import endpoint from "../config/endpoint";

function Message() {
  const [state, setState] = useState({
    msg: "Proszę czekać",
  });

  useEffect(() => {
    const socket = socketIOClient(endpoint);

    socket.on("newMessage", (msg) => {
      console.log(msg);
      setState({ ...state, msg });
    });

    return () => socket.disconnect();
  }, [state]);


  return (
    <>
      <h1>{state.msg}</h1>
    </>
  );
}

export default Message;
