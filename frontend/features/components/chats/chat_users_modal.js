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

  const users = props.users.map((user) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '2%',
        fontSize: '18px',
      }}
    >
      <li key={user.id}>{user.username}</li>
      <button style={{ marginRight: '2%' }}>Message</button>
    </div>
  ));

  const addUser = (user) => {
    setDm({ dmUsers: [...dm, user] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newChat = {};
    newChat.users = {};
    dm.dmUsers.forEach((user) => {
      newChat.users[user.id] = user;
    });
    let res = await createChat({
      chat_type: 'dm',
      workspace_id: props.currentWorkspace.id,
    });
    let response = dispatch(receiveChat(res.data));
    let workspaces = await fetchWorkspaces();
    dispatch(receiveWorkspaces(workspaces.data));
    closeModal();
    history.push(`/client/${props.currentWorkspace.id}/${response.payload.id}`);
  };

  return (
    <ReactModal
      className="chat-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    >
      <div>
        <div
          style={{
            fontSize: '22px',
            fontWeight: '900',
            lineHeight: '1.36365',
            padding: '2% 2% 2% 2%',
          }}
        >{`${props.currentChannel.name}`}</div>
        <div
          style={{
            paddingLeft: '5%',
          }}
        >
          <ul>{users}</ul>
        </div>
      </div>
    </ReactModal>
  );
};

export default ChatUsersModal;
