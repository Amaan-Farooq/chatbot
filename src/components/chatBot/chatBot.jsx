import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import "./chatBot.scss";
import { textFieldStyles } from "./chatBotStyle";
import axios from "axios";
import { useLocation } from "react-router-dom";

const uploadDataAPITestData = require("../../assets/testdata/ai-response.json");

const ChatBot = () => {
  const BASE_API_URL = "http://localhost:5000/api/v1";
  const [chatMessages, setChatMessages] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const clientId = searchParams.get("clientId");

  useEffect(() => {
    initialiseChatMessages();
    let chat = null;
    if (clientId) {
      chat = localStorage.getItem(`chat_${clientId}`);
    } else {
      chat = localStorage.getItem("chat");
    }
    if (chat) {
      setChatMessages(JSON.parse(chat));
    }
  }, []);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const initialiseChatMessages = () => {
    const chatMsg = [];
    const msgs = {
      user: "Hi",
      ai: "Hello, How can I help you ?",
    };
    chatMsg.push(msgs);
    setChatMessages(chatMsg);
  };

  const handleFileUpload = async (evt) => {
    const file = evt.target.files[0];
    const apiUrl = BASE_API_URL + "/file-upload/";
    const headers = {};
    let payload = new FormData();
    payload.append("file", file);
    let response = null;
    // response = uploadDataAPITestData;
    response = await axios.post(apiUrl, payload, {
      headers: headers,
      data: file,
    });
    const msg = {
      user: `File uploaded: ${file.name}`,
      ai: response.data,
    };
    const clonedChatMsg = structuredClone(chatMessages);
    clonedChatMsg.push(msg);
    setChatMessages(clonedChatMsg);
    if (clientId) {
      localStorage.setItem(`chat_${clientId}`, JSON.stringify(clonedChatMsg));
    } else {
      localStorage.setItem("chat", JSON.stringify(clonedChatMsg));
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="chatbot-container"
    >
      <Stack className="conversation-container">
        <Stack className="chat-box">
          {chatMessages.map((msg, index) => (
            <div key={index}>
              <div className="user-msg">{msg.user}</div>
              <div className="ai-msg">{msg.ai}</div>
            </div>
          ))}
        </Stack>
        <Stack className="input-container" direction="row" alignItems="center">
          <TextField
            type="text"
            name="userInput"
            size="small"
            label="Your input goes here"
            className="user-input-field"
            //   value={ userInput}
            //   onChange={handleChange}
            variant="outlined"
            sx={textFieldStyles}
            autoComplete="off"
          />
          <Button component="label" variant="contained" className="upload-btn">
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChatBot;
