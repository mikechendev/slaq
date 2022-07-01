class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Chat.find_by(id: params[:id])
    stream_for @channel
  end

  def speak(data)
    message = Message.new(body: data['message'])
    @channel = Chat.find_by(id: params[:id])
    if message.save
      socket = { message: message.body, type: 'message' }
      ChatChannel.broadcast_to(@channel.name, socket)
    end
  end

  def load
    @channel = Chat.find_by(id: params[:id])
    @messages = @channel.messages
    @users = @channel.users
    socket = {messages: messages, type: 'messages'}
    ChatChannel.broadcast_to(@channel.name, socket)
  end

  def unsubscribed; end
end