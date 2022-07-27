class ChatChannel < ApplicationCable::Channel
  def subscribed
    current_user.chats.each do |chat|
      stream_for chat
    end
  end

  # def speak(data)
  #   message = Message.new(body: data['message'])
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