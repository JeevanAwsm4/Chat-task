import React from "react";
import styled from "styled-components";
import MyIcon from './../assets/Profile (7).jpg';
import Online1 from './../assets/Profile (1).jpg';
import Profile4 from './../assets/Profile (6).jpg';
import Profile5 from './../assets/Profile (7).jpg';
import Profile6 from './../assets/Profile (8).jpg';
import Profile7 from './../assets/Profile (9).jpg';
import Profile8 from './../assets/Profile (10).jpg';
import Profile9 from './../assets/Profile (11).jpg';
import Online2 from './../assets/Profile (2).jpg';
import Online3 from './../assets/Profile (3).jpg';
import Online4 from './../assets/Profile (4).jpg';
import Online5 from './../assets/Profile (5).jpg';
import MoreOptions from './../assets/Option.svg';
import GreyDots from './../assets/grey dots.svg';
import SearchIcon from './../assets/Music-dashboard-icons-1.svg'

export default function Chats({handleChatSelection}) {
    const users = [
        { name: "Michael", image: Profile4 },
        { name: "Rocky", image: Profile5 },
        { name: "Hammy", image: Profile6 },
        { name: "John Doe", image: Profile7 },
        { name: "Hecker", image: Profile8 },
        { name: "Leo", image: Profile9 },
      ];
    const selectChat = (name, image) => {
        handleChatSelection(name, image);
      };
  return (
    <ThatBar>
    <MyAccount>
      <Left>
        <MyPFP src={MyIcon} alt="Profile" />
      </Left>
      <Middle>
        <Name>Jeevan S Kumar</Name>
        <Smallspan>My account</Smallspan>
      </Middle>
      <Right>
        <RoundingThree>
          <Threedots src={MoreOptions} alt="more button" />
        </RoundingThree>
      </Right>
    </MyAccount>
    <SearchContainer>
        <SearchIconButton src={SearchIcon}/>
        <Search type="text" placeholder="Search or start new chat..."/>
    </SearchContainer>
    <OnlineNow>
        <OnlineNowTC>
        <ONText>Online Now</ONText>
        <More>More</More>
        </OnlineNowTC>
        <OnlinePeople>
            <Person>
                <PfpOnline src={Online1}/>
                <MoreButton>More</MoreButton>
            </Person>
            <Person>
                <PfpOnline src={Online2}/>
                <MoreButton>More</MoreButton>
            </Person>
            <Person>
                <PfpOnline src={Online3}/>
                <MoreButton>More</MoreButton>
            </Person>
            <Person>
                <PfpOnline src={Online4}/>
                <MoreButton>More</MoreButton>
            </Person>
            <Person>
                <PfpOnline src={Online5}/>
                <MoreButton>More</MoreButton>
            </Person>

        </OnlinePeople>
    </OnlineNow>
    <MessagesContainer>
        <MessagesText>Messages</MessagesText>
        <Peruser>
          {users.map((user, index) => (
            <User
              className="usermessages"
              key={index}
              onClick={() => selectChat(user.name, user.image)}
            >
              <MessagesPhoto src={user.image} />
              <MiddlePart>
                <NameofSender>{user.name}</NameofSender>
                <RecentMsg>Hi How are you?!</RecentMsg>
              </MiddlePart>
              <RightPart>
                <TwoDots src={GreyDots} alt="send_status" />
                <Time>12:45pm</Time>
              </RightPart>
            </User>
          ))}
        </Peruser>
      </MessagesContainer>
    </ThatBar>

  );
}
const SearchIconButton = styled.img`
    position: absolute;
    margin-top : 17px;
    margin-left : 5px;
`;

const MyAccount = styled.div`
  display: flex;
  justify-content: space-between;
  background: #252C2E;
  color : #fff;
  margin-top : 10px;
  align-items : center;
  margin-left : 10px;
  width : 420px;

`;

const Left = styled.div``;

const Middle = styled.div`
    margin-right:30px;
    height: 100px;

`;

const Right = styled.div``;

const RoundingThree = styled.div`
    border-radius : 50%;
    border : 0.5px solid #494949;
    margin-bottom : 10px;
    margin-right : 10px;
`;

const MyPFP = styled.img`
   height : 65px;
   border-radius : 50%;
   margin-right : 20px;
`;

const Name = styled.h2`
    margin-bottom : 5px;
`;

const Smallspan = styled.span`
    color : grey;
`;

const Threedots = styled.img`
  height : 30px;
  width : 35px;
`;

const OnlineNow = styled.div``;

const OnlineNowTC = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin-left: 10px;
    width : 400px;
`;

const ONText = styled.h2`
`;

const More = styled.a`
    color : #494949;
`;

const OnlinePeople = styled.ul`
    margin-left : -40px;
    display : flex;
    justify-content : space-between;
    width : 430px;


`;

const Person = styled.li`
    display:flex;
    flex-wrap : wrap;
    justify-content : center;
    text-align:center;

`;

const PfpOnline = styled.img`
   height : 60px;
   border-radius : 50%;
   display: block;

`;

const MoreButton = styled.span`
    color : #494949;
    margin-top : 10px;
`;

const SearchContainer = styled.div`
    margin-top : 10px;
    margin-left : 10px;
    margin-bottom : 10px;
`;

const Search = styled.input`
    background : #161b1c;
    padding : 20px 0px 20px 35px;
    color : #fff;
    width : 370px;
    border : none;
`;

const ThatBar = styled.div`
background: #252C2E;
color : #fff;
width : 450px;
margin-left : 125px;
position:fixed;
`;

const MessagesText = styled.h2`
margin-left : 10px;
`;

const Peruser = styled.div`
`;

const User = styled.div`
    display: flex;
    margin-bottom : 30px;
    margin-left : 10px;
    padding : 5px;
`;

const MessagesPhoto = styled.img`
   height : 80px;
   border-radius : 50%;
   margin-right : 30px;
`;

const MiddlePart = styled.div`
    width : 200px;
`;

const NameofSender = styled.h2`
margin-top : 5px;
font-size : 20px;
`;

const RecentMsg = styled.span``;

const RightPart = styled.div`
    margin-top:5px;
`;

const TwoDots = styled.img`
   height : 15px;
   margin-right : 5px;
`;

const Time = styled.span`
`;

const MessagesContainer = styled.div``;
