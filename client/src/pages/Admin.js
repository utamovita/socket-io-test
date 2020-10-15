import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import endpoint from "../config/endpoint";
import messages from "../config/messages";
import { Typography, Box, Button } from '@material-ui/core';

const Admin = () => {
  let socket;

  const [state, setState] = useState({
    msg: "Proszę czekać",
  });

  useEffect(() => {
    socket = socketIOClient(endpoint);

    socket.on("newMessage", (msg) => {
      setState({ ...state, msg });
    });

    return () => socket.disconnect();
  }, [state]);

  const handleClick = (msg) => {
    socket.emit('clicked', msg);
  }

  return (
    <>
      <Typography variant="h6">Wyświetlana wiadomość: <strong>{state.msg}</strong> </Typography>
      <Box>
        <Button variant={state.msg === messages.a ? 'contained' : 'outlined'} color="primary" onClick={() => handleClick(messages.a)}>Proszę czekać</Button>
        <Button variant={state.msg === messages.b ? 'contained' : 'outlined'} color="primary" onClick={() => handleClick(messages.b)}>Następny pacjent</Button>
      </Box>
    </>
  );
};

export default Admin;