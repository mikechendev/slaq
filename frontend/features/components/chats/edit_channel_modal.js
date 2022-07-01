import React from 'react';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateChat, removeChat } from '../../../util/chat_api_util';
import { receiveChat } from '../../../actions/chat_actions';
import {
  ModalHeaderContainer,
  ModalHeaderDiv,
  ModalHeaderText,
  ModalContentContainer,
  ModalContentSectionContainer,
  ModalContentSectionText,
  NameLabel,
  FormField,
  ModalFooterContainer,
  CreateButton,
  CloseButton,
} from '../styles/modal.style';

const EditChannelModal = (props) => {
  const [channel, setChannel] = useState({
    name: '',
    description: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const update = (field) => {
    return (e) => setChannel({ ...channel, [field]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let res = await updateChat({
      name: channel.name,
      description: channel.description,
      chat_type: 'channel',
    });
    let response = dispatch(receiveChat(res.data));
    props.closeModal();
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
      <ModalHeaderContainer>
        <ModalHeaderDiv>
          <ModalHeaderText>Create a channel</ModalHeaderText>
        </ModalHeaderDiv>
        <ModalContentContainer>
          <form>
            <div>
              <div>
                <div style={{ width: '520px' }}>
                  <div>
                    <div style={{ padding: '0 28px' }}>
                      <ModalContentSectionContainer>
                        <ModalContentSectionText>
                          Channels are where your team communicates. They’re
                          best when organized around a topic — #marketing, for
                          example.
                        </ModalContentSectionText>
                      </ModalContentSectionContainer>
                      <div>
                        <NameLabel>Name</NameLabel>
                        <div>
                          <FormField
                            type="text"
                            placeholder="e.g. plan-budgeting"
                            value={channel.name}
                            onChange={update('name')}
                          ></FormField>
                        </div>
                        <NameLabel>Description (optional)</NameLabel>
                        <div>
                          <FormField
                            type="text"
                            value={channel.description}
                            onChange={update('description')}
                          ></FormField>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ModalFooterContainer>
                    <div>
                      <div></div>
                      <CreateButton onClick={handleUpdate}>Update</CreateButton>
                    </div>
                  </ModalFooterContainer>
                </div>
              </div>
            </div>
          </form>
        </ModalContentContainer>
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
      </ModalHeaderContainer>
    </ReactModal>
  );
};

export default EditChannelModal;
