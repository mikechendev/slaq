import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createChat } from '../../../util/chat_api_util';
import { receiveChat } from '../../../actions/chat_actions';
import { fetchWorkspaces } from '../../../util/workspace_api_util';
import { receiveWorkspaces } from '../../../actions/workspace_actions';
import { CloseButton } from '../styles/modal.style';

const ChatUsersModal = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [dm, setDm] = useState({
    dmUsers: [props.currentUser],
  });

  const addUser = (user) => {
    setDm({ dmUsers: dm.dmUsers.push(user) });
  };

  const resetDM = () => {
    setDm({ dmUsers: [props.currentUser] });
  };

  const users = useSelector((state) => Object.values(state.entities.users));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newChat = {};
    newChat.users = {};
    dm.dmUsers.forEach((user) => {
      newChat.users[user.id] = user;
    });
    newChat.chat_type = 'dm';
    newChat.workspace_id = props.currentWorkspace.id;
    newChat.admin_id = props.currentUser.id;
    let res = await createChat(newChat);
    let response = dispatch(receiveChat(res.data));
    let workspaces = await fetchWorkspaces();
    dispatch(receiveWorkspaces(workspaces.data));
    resetDM();
    props.closeModal();
    history.push(`/client/${props.currentWorkspace.id}/${response.payload.id}`);
  };

  let otherUsers = users.filter((user) => user.id !== props.currentUser.id);

  const usersList = otherUsers.map((user) => (
    <div
      key={user.id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '2%',
        fontSize: '18px',
      }}
    >
      <li style={{ listStyleType: 'none' }}>{user.username}</li>
      <button
        onClick={(e) => {
          addUser(user);
          handleSubmit(e);
        }}
      >
        Message
      </button>
    </div>
  ));

  return (
    <ReactModal
      className="chat-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 28px',
        }}
      >
        <div
          style={{
            fontSize: '28px',
            fontWeight: '900',
            lineHeight: '1.2143',
            padding: '2% 2% 3% 2%',
          }}
        >
          #{`${props.currentChannel.name}`}
        </div>
        <div
          style={{
            padding: '2% 2% 2% 2%',
            fontSize: '15px',
            fontWeight: '600',
            marginTop: '5px',
            marginBottom: '5px',
            borderBottom: '1px solid',
          }}
        >
          members
        </div>
        <div
          style={{
            padding: '2% 2% 2% 2%',
          }}
        >
          <ul>{usersList}</ul>
        </div>
        <CloseButton onClick={props.closeModal}>
          <svg data-q98="true" viewBox="0 0 20 20" className="">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546"
            ></path>
          </svg>
        </CloseButton>
      </div>
    </ReactModal>
  );
};

export default ChatUsersModal;
