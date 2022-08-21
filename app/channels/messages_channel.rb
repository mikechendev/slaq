class MessagesChannel < ApplicationCable::Channel
  def subscribed
    @chat = Chat.find(params[:id])
    stream_for @chat
  end

  def receive(data)
    user = User.find_by(id: data['userId'])
    chat = Chat.find_by(id: data['chatId'])
    message = chat.messages.create(body: data['body'], user: user)
    MessagesChannel.broadcast_to(chat, message: message)
  end

  def unsubscribed
    stop_all_streams
  end
end