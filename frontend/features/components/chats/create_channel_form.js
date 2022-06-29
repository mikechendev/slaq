import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createChat } from '../../../util/chat_api_util';
import { receiveChat } from '../../../actions/chat_actions';
import {
  ModalHeaderContainer,
  ModalHeaderDiv,
  ModalHeaderText,
  ModalContentContainer,
  ModalContentSectionContainer,
  ModalContentSectionText,
  NameLabel,
  FormFieldContainer,
  FormField,
  ModalFooterContainer,
  CreateButton,
  CloseButton,
} from '../styles/modal.style';

export const CreateChannelForm = (props) => {
  const [channel, setChannel] = useState({
    name: '',
    description: '',
  });

  const dispatch = useDispatch();

  const update = (field) => {
    return (e) => setChannel({ [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createChat({
      name: channel.name,
      description: channel.description,
      type: 'channel',
      workspace_id: props.currentWorkspace.id,
      admin_id: props.currentUser.id,
    });
    let response = dispatch(receiveChat(res.data));
    props.closeModal();
    props.history.push(
      `/client/${currentWorkspace.id}/channels/${response.payload.id}`
    );
  };

  return (
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
                        Channels are where your team communicates. They’re best
                        when organized around a topic — #marketing, for example.
                      </ModalContentSectionText>
                    </ModalContentSectionContainer>
                    <div>
                      <NameLabel>Name</NameLabel>
                      <div>
                        <FormFieldContainer>
                          <FormField
                            type="text"
                            placeholder="e.g. plan-budgeting"
                            value={channel.name}
                            onChange={update('name')}
                          ></FormField>
                        </FormFieldContainer>
                      </div>
                      <NameLabel>Description (optional)</NameLabel>
                      <div>
                        <FormFieldContainer>
                          <FormField
                            type="text"
                            value={channel.description}
                            onChange={update('description')}
                          ></FormField>
                        </FormFieldContainer>
                      </div>
                    </div>
                  </div>
                </div>
                <ModalFooterContainer>
                  <div>
                    <div></div>
                    <CreateButton onClick={handleSubmit}>Create</CreateButton>
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
  );
};
