class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      UserWorkspace.create!(user_id: @user.id, workspace_id: 1)
      UserWorkspace.create!(user_id: @user.id, workspace_id: 2)
      UserChat.create!(user_id: @user.id, chat_id: 1)
      UserChat.create!(user_id: @user.id, chat_id: 2)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    @workspaces = @user.workspaces
    render 'api/users/show'
  end

  def index
    @chat = Chat.find_by(id: params[:chat_id])
    @users = @chat.users
    render :index
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update
      login!(@user)
      render 'api/users/show'
    else
      render json @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end
