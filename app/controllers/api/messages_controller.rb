class Api::MessagesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @channel = Chat.find(@message[:chat_id])
    @message = @channel.messages.new(message_params)
    @message.user_id = current_user.id

    if @message.save
      ChatChannel.broadcast_to(@channel, @message)
      render json: @message
    end
  end

  # def show
  #   @message = Message.find(params[:id])
  # end

  private

  def message_params
    params.require(:message).permit(:body)
  end
  
end
