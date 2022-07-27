class Api::MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @channel = Chat.find(@message[:chat_id])
    @message = @channel.messages.create(message_params)
    @message.user = current_user
  
    ChatChannel.broadcast_to(@channel, @message)
    render json: @message
  end

  def index
  end

    private

    def message_params
      params.require(:message).permit(:body, :user_id, :chat_id)
    end
  
end
