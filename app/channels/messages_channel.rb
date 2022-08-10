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

  # def speak(data)
  #   message = Message.new(body: data['message'])
  #   p data
  #   if message.save
  #     socket = { message: message.body, type: 'message' }
  #     ChatChannel.broadcast_to('chat_channel', socket)
  #   end
  # end

  # def load
  #   messages = Message.all.collect(&:body)
  #   socket = {messages: messages, type: 'messages'}
  #   ChatChannel.broadcast_to('chat_channel', socket)
  # end

  def unsubscribed
    stop_all_streams
  end
end