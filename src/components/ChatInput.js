import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "@firebase/app-compat";

function ChatInput({ channelId, channelName, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("message").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "shinCode",
      userimage: "https://placehold.jp/150x150.png",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden onClick={sendMessage} type="submit">
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    border: 1px solid gray;
    width: 60%;
    padding: 20px;
    border-radius: 3px;
    outline: none;
  }

  > form > Button {
    display: none !important;
  }
`;
