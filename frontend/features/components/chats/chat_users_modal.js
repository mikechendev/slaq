import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createChat } from '../../../util/chat_api_util';
import { receiveChat } from '../../../actions/chat_actions';
import { fetchWorkspaces } from '../../../util/workspace_api_util';
import { receiveWorkspaces } from '../../../actions/workspace_actions';

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

  const usersList = props.users.map((user) => (
    <div
      key={user.id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '2%',
        fontSize: '18px',
      }}
    >
      <li>{user.username}</li>
      <button
        onClick={(e) => {
          addUser(user);
          handleSubmit(e);
        }}
        style={{ marginRight: '2%' }}
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
            fontSize: '22px',
            fontWeight: '900',
            lineHeight: '1.36365',
            // padding: '2% 2% 3% 2%',
          }}
        >
          #{`${props.currentChannel.name}`}
        </div>
        <div
          style={{
            // padding: '2% 2% 2% 2%',
            fontSize: '15px',
            fontWeight: '800',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          members
        </div>
        <div
          style={{
            paddingLeft: '20px',
          }}
        >
          <ul>{usersList}</ul>
        </div>
      </div>
    </ReactModal>
  );
};

export default ChatUsersModal;
