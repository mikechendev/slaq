class Api::DirectMessagesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @dms = DirectMessage.all
    render :index
  end

  def show
    @dm = DirectMessage.find(params[:id])
    render :show
  end

  def create
    @dm = DirectMessage.new(dm_params)
    @dm.admin_id = current_user.id
  end

  private

  def dm_params
    params.require(:direct_message).permit(:body)
  end
end
