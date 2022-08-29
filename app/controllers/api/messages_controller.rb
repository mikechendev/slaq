class Api::MessagesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @channel = Chat.find_by(id: data['chatId'])
    @message = @channel.messages.new(message_params)
    @message.user_id = current_user.id
    @message.save
    render json: @message
  end

  def index
    @messages = Chat.find_by(id: params[:chat_id]).messages
  end

  def show
    @message = Message.find(params[:id])
    render :show
  end

  def update
    @message = Message.find(params[:id])
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
  
end
