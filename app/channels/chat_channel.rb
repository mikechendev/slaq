class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "fun_stream_name"
    stream_for Chat.find_by(id: params[:id])
  end
end