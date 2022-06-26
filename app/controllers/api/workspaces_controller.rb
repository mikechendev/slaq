class Api::WorkspacesController < ApplicationController

  def create
    @workspace = Workspace.new(workspace_params)
    if @workspace.save
      render 'api/workspaces/show'
    else
      render json: @workspace.errors.full_messages, status: 422
    end
  end

  def index
    @workspaces = Workspace.all
    render 'api/workspaces/index'
  end

  def show
    @workspace = Workspace.find_by(id: params[:id])
    render 'api/workspaces/show'
  end

  def destroy
    @workspace = Workspace.find_by(id: params[:id])
    @workspace.destroy
  end

  private

  def workspace_params
    params.require(:workspace).permit(:name, :admin_id)
  end
end
