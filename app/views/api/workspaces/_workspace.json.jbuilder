json.extract! workspace, :id, :name, :admin_id

json.users do
  json.array! workspace.users, :id, :email, :username
end

json.chats do
  json.array! workspace.chats, :id, :chat_type, :name, :description, :admin_id, :workspace_id
end