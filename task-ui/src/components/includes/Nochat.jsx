import React from "react";
import styled from "styled-components"

export default function Nochat() {
    return (
        <>
            <Screen>
                <Center>
                    <SelectionMessage>Select a chat to start messaging</SelectionMessage>
                </Center>
            </Screen>
        </>
    )
}
const Screen = styled.section`
  background: linear-gradient(to right, #252c2e, #48A5C3);
  width : 100%;
  height: 100vh;
  position : fixed;
  display : flex;
  margin-left : 575px;
  align-items : center;
`;

const Center = styled.div`
`;

const SelectionMessage = styled.h2`
background-color: rgba(0, 0, 0, 0.5); 
color: #fff;
font-size: 16px;
padding: 8px;
margin-left : 50vh;
`;

