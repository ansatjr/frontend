import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {authSelectors} from "@features/auth";
import {Message, SystemMessage} from "@features/chats";
import {Col} from "@lib/layout";
import {ID} from "@lib/typings";
import {useRootDispatch} from "@lib/store";
import {isElementVisible, scrollToBottom, isAtBottom, isAtTop} from "@lib/dom";
import {H2} from "@ui/atoms";
import {GroupMessage} from "../lib/typings";
import * as actions from "../actions";
import * as selectors from "../selectors";

interface GroupMessagesListProps {
  messages: GroupMessage[] | null;
  areFetching: boolean;
}

export const GroupMessagesList: React.FC<GroupMessagesListProps> = ({messages, areFetching}) => {
  const dispatch = useRootDispatch();

  const [isScrolled, setIsScrolled] = useState(false);

  const {groupId} = useParams<{groupId: ID}>();

  const listRef = useRef<HTMLDivElement | null>(null);

  const credentials = useSelector(authSelectors.credentials)!;
  const areMessagesFetching = useSelector(selectors.areMessagesFetching(groupId));
  const areMessagesLeftToFetch = useSelector(selectors.areMessagesLeftToFetch(groupId));

  const last = messages && messages[messages.length - 1];

  useEffect(() => {
    if (last) {
      const list = listRef.current!;

      if (!isScrolled) {
        scrollToBottom(list);

        handleReadingMessages(list);

        return setIsScrolled(true);
      }

      const isOwn = ((!!last.sender && last.sender.id) === credentials.id);

      if (isOwn || isAtBottom(list)) {
        scrollToBottom(list);

        handleReadingMessages(list);
      }
    }
  }, [last]);

  const handleListScroll = ({currentTarget}: React.UIEvent<HTMLDivElement>) => {
    const toFetchMessages = isAtTop(currentTarget) && !areMessagesFetching && areMessagesLeftToFetch;

    if (toFetchMessages) dispatch(actions.fetchMessages({
      groupId, skip: messages ? messages.length : 0
    }));
  };

  const handleReadingMessages = (list: Element) => {
    const messages = [...list.children] as HTMLElement[];
    const reversed = [...messages].reverse();

    const last = reversed.find((message) =>
      message.dataset.isRead === "false" && message.dataset.isOwn === "false") || null;

    if (!!last) {
      const isVisible = isElementVisible(last);

      if (isVisible) {
        const id = last.dataset.id as ID;

        dispatch(actions.setMessagesRead({
          groupId, messageId: id
        }));

        const unread = reversed.slice(0, reversed.indexOf(last))
          .filter((message) =>
            message.dataset.isOwn === "false" &&
            message.dataset.isRead === "false").length;

        dispatch(actions.setUnread({
          groupId, unread
        }));

        dispatch(actions.fetchReadingMessage({
          messageId: id, groupId
        }));
      }
    }
  };

  return (
    <List ref={listRef} onScroll={handleListScroll}>
      {areFetching && <H2>Loading...</H2>}

      {messages && messages.map(({id, images, files, audio, text, sender, isSystem, isRead, createdAt}) => {
        if (isSystem) return (
          <SystemMessage
            key={id}
            text={text}/>
        );

        const isOwn = (!!sender && sender.id) === credentials.id;

        return (
          <Message
            key={id}
            id={id}
            text={text}
            images={images}
            audio={audio}
            files={files}
            avatar={sender!.avatar}
            date={new Date(createdAt)}
            isOwn={isOwn}
            isRead={isRead}/>
        );
      })}
    </List>
  );
};

const List = styled(Col).attrs(() => ({
  width: "100%",
  padding: "1rem 5rem"
}))`
  flex: 1;
  overflow: auto;
`;
