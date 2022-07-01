json.extract! chat, :id, :chat_type, :name, :description, :admin_id, :workspace_id

json.users do
  json.array! chat.users, :id, :email, :username
end

# json.messages do
#   json.array! chat.messages, :id, :body, :user_id
# end