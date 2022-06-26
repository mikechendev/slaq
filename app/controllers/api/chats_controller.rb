class Api::ChatsController < ApplicationController

  def create
    #placeholder create method
    @chat = Chat.new(chat_params)
    if @chat.save
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
    params.require(:chat).permit(:type, :name, :description, :admin_id, :workspace_id)
  end
end
