import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CallIcon from './../assets/Property 1=phone.svg';
import VideoIcon from './../assets/Property 1=video-camera.svg';
import Whitedots from './../assets/White Option.svg';
import Cross from './../assets/Vector.svg';
import WhiteShare from './../assets/Property 1=white share.svg';
import WhiteSmiley from './../assets/Group 3465392.svg'
import ReactEmojiOne from './../assets/emojione_thumbs-up.svg';
import ReactEmojiTwo from './../assets/Group 3465375.svg';
import GreyDots from './../assets/grey dots.svg';
import BlueDots from './../assets/Blue dots.svg';
import PaperPin from './../assets/attachment 2.svg';
import GreySmiley from './../assets/Group 3465380.svg';
import SendButton from './../assets/white send.svg';
import VoiceMsgIcon from './../assets/Group 3465393.svg'
import MediaFile1 from './../assets/image_processing20220225-29217-hv4dvv.jpg';
import MediaFile2 from './../assets/image_processing20220305-7813-19y4c1j.jpg';
import Filelogo from './../assets/Component 96.svg';

export default function Chat({ name, image }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [recievedmessages,setRecievedmessages] = useState([])
    const [showHover, setShowHover] = useState(false);
    const [hoveredMessageIndex, setHoveredMessageIndex] = useState(null);

    useEffect(() => {
        const defaultMessages = [
            {
                id: 1,
                text: "Hello!",
            },
            {
                id: 2,
                text: "Thank you for your offer! Yes, I have accepted your project and I'm on it!",
            },
        ];
        const recievedMessages = [
            {
                id : 1,
                text : "Hello Jeeva! Hope you are doing well.I will give you a message from one of my friends."
            },
            {
                id : 2,
                text : "Good Afternoon, may I ask your help to mail me a real estate landing page, for more details I will contact you soon. Thanks!"
            }
        ]
        setMessages(defaultMessages);
        setRecievedmessages(recievedMessages)
    }, []);

const RenderMessages = () => {
    return messages.map((message) => (
        <EachMessage key={message.id}>
            <SentMessage>
                {message.text}
            </SentMessage>
            <MessageDetail>
                <SentTime>12:45PM</SentTime>
                <BlueDotRender src={BlueDots}/>
            </MessageDetail>
        </EachMessage>
    ));
};

    const HoverRecieved = () => {
        return showHover ? (
            <HoverParent>
                <OptionsRight>
                    <ShareIcon src={WhiteShare} />
                    <ReactEmojicon src={WhiteSmiley} />
                    <MoreOptionsHoverIcon src={Whitedots} />
                </OptionsRight>
                <OptionsLeft>
                    <RoundingQuickReact>
                        <ThumbsupIcon src={ReactEmojiOne} />
                    </RoundingQuickReact>
                    <RoundingQuickReact>
                        <FireIcon src={ReactEmojiTwo} />
                    </RoundingQuickReact>
                </OptionsLeft>
            </HoverParent>
        ) : null
    }
    const handleMouseEnter = (index) => {
        setHoveredMessageIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredMessageIndex(null);
    };

    
    const RenderRecieved = () => {
  return recievedmessages.map((recievedmessage, index) => (
    <RecievedBox1 key={recievedmessage.id}>
      <Message
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <ForFlex>
          <FromMsg1>{recievedmessage.text}</FromMsg1>
          {hoveredMessageIndex === index ? (
        <HoverParent>
          <OptionsRight>
            <ShareIcon src={WhiteShare} />
            <ReactEmojicon src={WhiteSmiley} />
            <MoreOptionsHoverIcon src={Whitedots} />
          </OptionsRight>
        </HoverParent>
      ): null}
        </ForFlex>
       <TimeSent>12:45PM</TimeSent>
      </Message>
      {hoveredMessageIndex === index ? (
        <OptionsLeft>
          <RoundingQuickReact>
            <ThumbsupIcon src={ReactEmojiOne} />
          </RoundingQuickReact>
          <RoundingQuickReact>
            <FireIcon src={ReactEmojiTwo} />
          </RoundingQuickReact>
        </OptionsLeft> 
      ): null}
    </RecievedBox1>
  ));
};

    const handleSubmit = (e) => {
        e.preventDefault();

        const new_message = {
            id: messages.length + 1,
            text: newMessage,
        }

        setMessages([...messages, new_message]);

        setNewMessage("")
    }
    return (
        <>
            <MainChat>
                <Header>
                    <LeftOfHead>
                        <ProfileOfContact src={image} alt="Profile" />
                        <ProfileWritings>
                            <ProfileName>{name}</ProfileName>
                            <ProfileStatus>Typing...</ProfileStatus>
                        </ProfileWritings>
                    </LeftOfHead>
                    <RightofHead>
                        <Calldiv>
                            <Call src={CallIcon}/>
                        </Calldiv>
                        <VideoCallDiv>
                            <VideoCall src={VideoIcon}/>
                        </VideoCallDiv>
                        <MoreOptionsDiv>
                            <MoreOptionsImg src={Whitedots}/>
                        </MoreOptionsDiv>
                    </RightofHead>
                </Header>
                <ChatSection>
                    <MessageDate>Today</MessageDate>
                    {RenderRecieved()}
                    {RenderMessages()}
                </ChatSection>
                <SendMessageSection>
                    <PaperPinIcon />
                    <Sender onSubmit={handleSubmit}>
                        <TypeMessage placeholder="Type your message here...." type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                        <EmojiIcon />
                        <ButtonToSubmit type="submit"><SendIcon /></ButtonToSubmit>
                    </Sender>
                </SendMessageSection>
            </MainChat>
            <ContactDetails>
                <HeaderTwo>
                    <Lefty>
                        <ContactDetailsText>Contacts details</ContactDetailsText>
                    </Lefty>
                    <Righty>
                        <Circle>
                            <CrossIcon src={Cross}/>
                        </Circle>
                    </Righty>
                </HeaderTwo>
                <ProfiledetailsLarge>           
                    <BigProfileImg src={image} />
                    <BigProfileName>{name}</BigProfileName>
                    <BigProfileStatus>online</BigProfileStatus>
                </ProfiledetailsLarge>
                <MediaSection>
                    <MediaCount></MediaCount>
                    <Viewall>View all!</Viewall>
                </MediaSection>
                <FilesSection>
                    <FilesCount></FilesCount>
                    <Viewall>View all!</Viewall>
                </FilesSection>
            </ContactDetails>
        </>
    )
}
const HeaderTwo = styled.div`
    display : flex;
    justify-content : space-around;
    width:400px;
`
const ContactDetails = styled.section`
    width : 400px;
    background-color: #252C2E;
    color : #fff;
    height : 100vh;
    position : fixed;
    margin-left : 1470px;
`
const Lefty = styled.div``;
const ContactDetailsText = styled.h2``
const Righty = styled.div``
const Circle = styled.div`
    border: 1px solid #494949;
    border-radius : 50%;
`
const CrossIcon = styled.img`
    padding : 5px;
`
const ProfiledetailsLarge = styled.section``
const BigProfileImg = styled.img``
const BigProfileName = styled.h2``
const BigProfileStatus = styled.span``
const MediaSection = styled.div``
const MediaCount = styled.span`` 
const Viewall = styled.a``
const FilesSection = styled.div``
const FilesCount = styled.span``
const MainChat = styled.section``;


const Header = styled.header`
    display : flex;
    align-items : center;
    background : #252C2E;
    width: 900px;
    height : 12vh;
    justify-content : space-between;
`;
const LeftOfHead = styled.div`
    display : flex;
    align-items : center;
    margin-bottom:20px;
`;
const ProfileWritings = styled.div`
    margin-top:10px;
    color : #fff;
    `
const ProfileOfContact = styled.img`
    height : 80px;
    border-radius : 50%;
    margin-top:10px;
    margin-left : 30px;
    margin-right : 30px;
`;
const ProfileName = styled.h1`
    margin-bottom : 0px;
`
const ProfileStatus = styled.h1`
    color : #47A4C3;
    font-size: 15px;
    margin-top : 10px;

`
const RightofHead = styled.div`
    margin-top:10px;
    margin-bottom:20px;
    margin-right:30px;
    display:flex;
    justify-content:space-between;
`
const Call = styled.img`
    padding: 5px;
    height : 30px;
`
const Calldiv = styled.div`
    border: 1px solid #494949;
    margin-right : 15px;
    border-radius: 50%;
`
const VideoCallDiv = styled.div`
    border: 1px solid #494949;
    margin-right : 15px;
    border-radius: 50%;
`
const VideoCall = styled.img`
    padding: 5px;
    height : 30px;
`
const MoreOptionsDiv = styled.div`
    border: 1px solid #494949;
    margin-right : 15px;
    border-radius: 50%;
`
const MoreOptionsImg = styled.img`
    padding: 5px;
    height : 30px;
`
const ChatSection = styled.section`
     background : #252C2E;
     height : 80vh;
     width : 900px;
`
const MessageDate = styled.span`
    background : #1e1e1e;
    color : #fff;
    padding : 5px;
    border-radius:10px;
    margin-left : 50%;
`;
const FromMsg1 = styled.h3`
    background : #323333;
    color : #E7eaea;
    text-align:left;
    max-width : 300px;
    display:block;
    padding : 10px 20px 20px 10px;
    border-radius: 0px 15px 15px;
    font-weight : 100;
    margin-bottom:10px;
`

const TimeSent = styled.span`
    color : #6b6b6b;
    margin-left : 245px;

`
const SendMessageSection = styled.section`
`
const PaperPinIcon = styled.img``
const Sender = styled.form`
    height : 10vh;
    background-color: #252C2E;

`
const TypeMessage = styled.input``
const EmojiIcon = styled.img``
const ButtonToSubmit = styled.button``  
const SendIcon = styled.img``
const RecievedBox1 = styled.div``
const Message = styled.div`
        text-align : left;
`
const HoverParent = styled.div``
const OptionsRight = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top : 30px;
    margin-left : 10px;

`
const OptionsLeft = styled.div`
    margin-top: -20px;
    position : fixed;
    display: flex;
`
const ShareIcon = styled.img`
    margin-right : 7px;
`
const ReactEmojicon = styled.img`
    margin-right : 7px;
`
const MoreOptionsHoverIcon = styled.img``
const RoundingQuickReact = styled.div`
`
const ThumbsupIcon = styled.img`
    margin-right : 5px;
    margin-left : 5px;
`
const FireIcon = styled.img``
const ForFlex = styled.div`
    display: flex;
`
const EachMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    position: relative;
`;

const SentMessage = styled.h3`
    background-color: #2B6BC5;
    border-radius: 15px 15px 0px 15px;
    color: #000;
    text-align: left;
    word-wrap: break-word;
    padding: 10px 15px;
    margin-bottom: 5px;
    max-width: 80%;
    position: relative;
    margin-right: 20px;
    font-weight: 100;
`;

const BlueDotRender = styled.img`
    margin-right:20px;
`;
const MessageDetail = styled.div`
    display:flex;
    align-items:center;
`

const SentTime = styled.span`
    color : #6b6b6b;
    margin-right:5px;
`