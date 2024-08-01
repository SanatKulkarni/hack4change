import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("https://business-ai-two.vercel.app/api/index.js", {
        query_type: "general_query",
        general_query: input,
      });

      const formattedText = response.data.answer
        .replace(/\n/g, "<br>")
        .replace(/##/g, "<h2>")
        .replace(/\\/g, "<strong>")
        .replace(/\*\*/g, "<strong>")
        .replace(/\*\*/g, "</strong>")
        .replace(/\\/g, "<strong>");

      const aiMessage = {
        sender: "bot",
        text: formattedText,
      };

      setMessages([...messages, userMessage, aiMessage]);
    } catch (error) {
      const errorMessage = { sender: "bot", text: "Sorry, there was an error processing your request." };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setInput("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div style={styles.messagesContainer}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                ...(message.sender === "user" ? styles.userMessage : styles.botMessage),
              }}
              dangerouslySetInnerHTML={{ __html: message.text }}
            ></div>
          ))}
        </div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} style={styles.button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
    padding: '1rem',
  },
  chatBox: {
    width: '100%',
    maxWidth: '32rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    padding: '1.5rem',
  },
  messagesContainer: {
    height: '20rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  message: {
    padding: '0.75rem',
    borderRadius: '0.5rem',
  },
  userMessage: {
    backgroundColor: '#4299e1',
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#e2e8f0',
    color: '#2d3748',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    marginTop: '1rem',
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    border: '1px solid #cbd5e0',
    borderRadius: '0.5rem',
  },
  button: {
    marginLeft: '0.5rem',
    backgroundColor: '#4299e1',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s',
  },
};

export default Chatbot;
