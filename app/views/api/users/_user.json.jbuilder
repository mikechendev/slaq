json.extract! user, :id, :email, :username

json.workspaces do
  json.array! user.workspaces, :id, :name
end

json.chats do
  json.array! user.chats, :id, :chat_type, :name, :description
end