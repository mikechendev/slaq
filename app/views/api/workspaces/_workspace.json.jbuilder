json.extract! workspace, :id, :name, :admin_id

json.users do
  json.array! workspace.users, :id, :email, :username
end