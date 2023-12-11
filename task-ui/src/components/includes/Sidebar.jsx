import React from "react";
import styled from "styled-components";
import Chaticonimg from "./../assets/chat (1).svg"
import Chaticonimg2 from "./../assets/chat (2).svg"
import CallIconGrey from "./../assets/Property 1=phone.svg"
import VideoCallIconGrey from "./../assets/Property 1=video-camera.svg"
import ContactsIconGrey from "./../assets/Property 1=users.svg"
import SettingsIconGrey from './../assets/Property 1=setting (1).svg'
import Plusicon from "./../assets/icons.svg"
import MeIconUser from './../assets/Profile (10).jpg'


export default function Sidebar(){
    return (
        <div className="sidebar">
            <Sidebarcontainer>
                <Bartop>
                    <Chaticoncontainer>
                        <Chaticona>
                            <Chaticon src={Chaticonimg} alt="chat_icon"/>
                        </Chaticona>
                    </Chaticoncontainer>
                </Bartop>
                <Barmiddle>
                        <IconContainerActive>
                            <Icon src={Chaticonimg2} alt="chat_icon_active"/>
                        </IconContainerActive>
                        <IconContainer>
                            <Icon src={CallIconGrey} alt="calls_list"/>
                        </IconContainer>
                        <IconContainer>
                            <Icon src={VideoCallIconGrey} alt="video_calls_list"/>
                        </IconContainer>
                        <IconContainer>
                            <Icon src={ContactsIconGrey} alt="contacts_list"/>
                        </IconContainer>
                        <IconContainer>
                            <Icon src={SettingsIconGrey} alt="settings"/>
                        </IconContainer>

                </Barmiddle>
                <Barbottom>
                    <PlusContainer>
                        <PlusIcon src={Plusicon} alt="plus_icon"/>
                    </PlusContainer>
                    <MeUser>
                        <ImgTag src={MeIconUser} alt="Me" />
                    </MeUser>
                </Barbottom>
            </Sidebarcontainer>
        </div>
    )
}

const Sidebarcontainer = styled.div`
    background-color: #252c2e;
    display:flex;
    width:125px;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    height : 100vh;
    position : fixed;

`;
const Bartop = styled.div`
    margin-top:50px;
    background : #fff;
    padding : 15px;
    border-radius : 50%;
    border : 1px solid #2B6BC5;


`;

const Barmiddle = styled.div``;

const Barbottom = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
`;

const Chaticoncontainer = styled.div``;

const Chaticona = styled.a`
`;

const Chaticon = styled.img`
    height: 40px;
`;

const IconContainer = styled.div`
    margin-bottom : 25px;
    padding : 10px;
`;

const IconContainerActive = styled.div`
    margin-bottom : 25px;
    background-color : #48A5C3;
    padding : 10px;
    border-radius : 50%;

`;

const Icon = styled.img`
height: 40px;

`;

const PlusContainer = styled.div`
    background : grey;
    width : 40px;
    padding : 20px;
    border-radius : 50%;
    margin-bottom : 25px;
    height: 25px;
    width: 25px;
`;


const PlusIcon = styled.img`
`;

const MeUser = styled.div`
    margin-bottom : 50px;
`;

const ImgTag = styled.img`
    height : 70px;
    width : 70px;
    border-radius : 50%;
`;