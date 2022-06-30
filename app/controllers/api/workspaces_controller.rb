class Api::WorkspacesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @workspace = Workspace.new(workspace_params)
    @workspace.admin_id = current_user.id
    if @workspace.save
      UserWorkspace.create!(user_id: current_user.id, workspace_id: @workspace.id)
      Chat.create!(name:'General', chat_type: 'channel', admin_id: current_user.id, workspace_id: @workspace.id)
      render 'api/workspaces/show'
    else
      render json: @workspace.errors.full_messages, status: 422
    end
  end

  def index
    @workspaces = current_user.workspaces
    render 'api/workspaces/index'
  end

  def show
    @workspace = current_user.workspaces.find_by(id: params[:id])
    render 'api/workspaces/show'
  end

  def update
    @workspace = current_user.workspaces.find_by(id: params[:id])
    if @workspace.update(workspace_params)
      render 'api/workspaces/show'
    else
      render json: @workspace.errors.full_messages, status: 422
    end
  end

  def destroy
    @workspace = current_user.workspaces.find_by(id: params[:id])
    @workspace.destroy
  end

  private

  def workspace_params
    params.require(:workspace).permit(:name, :admin_id)
  end
end
