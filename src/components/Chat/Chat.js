import React, {useEffect, useState} from 'react';
import './Chat.css';
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined} from "@material-ui/icons";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState(0);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>> ", input)
        setInput('');
    }

    return (
        <div className='chat'>

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Tegar Subkhan Fauzi</span>
                    hay jude don't make it bad
                    <span className="chat__timestamp">03.15 PM</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Type a message'/>
                    <button type='submit' onClick={sendMessage}>Send a message</button>
                </form>
                <Mic/>
            </div>
        </div>
    );
}

export default Chat;