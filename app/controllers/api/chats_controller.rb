class Api::ChatsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    
    @chat = Chat.new(chat_params)

    if @chat.chat_type != channel
      @chat.name = SecureRandom::urlsafe_base64
      @chat.description = SecureRandom::urlsafe_base64
    end

    if @chat.save
      if @chat.chat_type == 'channel'
        UserChat.create!(chat_id: @chat.id, user_id: current_user.id)
      else
        params['chat']['users'].each do |user|
          UserChat.create!(chat_id: @chat.id, user_id: user.id)
        end
      end
      render 'api/chats/show'
    else
      render json: @chat.errors.full_messages, status: 422
    end

  end

  def index
    @chats = current_user.chats
    render 'api/chats/index'
  end

  def show
    @chat = Chat.find_by(id: params[:id])
    render 'api/chats/show'
  end

  def update
    @chat = Chat.find_by(id: params[:id])
    if @chat.update
      render 'api/chats/show'
    else
      render json: @chat.errors.full_messages, status: 401
    end
  end

  def destroy
    @chat = Chat.find(params[:id])
    @chat.destroy
  end

  private

  def chat_params
    params.require(:chat).permit(:chat_type, :name, :description, :admin_id, :workspace_id)
  end
end
