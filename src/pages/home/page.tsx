import React, { useEffect } from "react";
import styled from "styled-components";

import {ChatTemplate} from "@features/chat";
import {H3} from "@ui/atoms";
import {useActions} from "@lib/hooks";
import {chatDialogsActions} from "@features/chat/features/dialogs";

export const HomePage: React.FC = () => {
  const {fetchDialogs} = useActions(chatDialogsActions);

  useEffect(() => {
    fetchDialogs({skip: 0, take: 5});
  }, []); 

  return (
    <ChatTemplate>
      <NoChat />
    </ChatTemplate>
  );
};

const NoChat: React.FC = () => (
  <NoChatWrapper>
    <H3>Select chat to start messaging</H3>
  </NoChatWrapper>
);

const NoChatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.palette.primary.dark};
  width: 100%;
  height: 100%;
`;

