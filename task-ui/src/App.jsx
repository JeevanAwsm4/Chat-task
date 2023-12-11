import React from "react";
import './App.css';
import Sidebar from "./components/includes/Sidebar";
import Chats from "./components/includes/Chats";
import Nochat from "./components/includes/Nochat";
import Chat from "./components/screens/Chat";

function App() {
  const [selectedChat, setSelectedChat] = React.useState(null);

  const handleChatSelection = (name, image) => {
    setSelectedChat({ name, image });
  };

  return (
    <div className="ChatApp"> 
      <Sidebar />
      <Chats handleChatSelection={handleChatSelection} />
      {selectedChat ? (
        <Chat name={selectedChat.name} image={selectedChat.image} />
      ) : (
        <Nochat />
      )}
    </div>
  );
}

export default App;

