# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Workspace.destroy_all
UserChat.destroy_all
UserWorkspace.destroy_all

demouser = User.create!({email: 'demouser@demo.demo', username:'demoUser', password: 'password'})

aaworkspace = Workspace.create!({name: 'App Academy', admin_id: "#{demouser.id}"})
demosub = UserWorkspace.create!({user_id: "#{demouser.id}", workspace_id: "#{aaworkspace.id}"})
aageneral = Chat.create!({name: 'General', chat_type: 'channel', description: 'This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations.', admin_id: "#{demouser.id}", workspace_id: "#{aaworkspace.id}"})
UserChat.create!({user_id: "#{demouser.id}", chat_id: "#{aageneral.id}"})

testworkspace = Workspace.create!({name: 'Memes', admin_id: "#{demouser.id}"})
demosub2 = UserWorkspace.create!({user_id: "#{demouser.id}", workspace_id: "#{testworkspace.id}"})
twgeneral = Chat.create!({name: 'General', chat_type: 'channel', description: 'This is the one channel that will always include everyone. It’s a great spot for announcements and team-wide conversations.', admin_id: "#{demouser.id}", workspace_id: "#{testworkspace.id}"})
UserChat.create!({user_id: "#{demouser.id}", chat_id: "#{twgeneral.id}"})

user2 = User.create!({email: 'testuser1@test.test', username:'Kin Ka', password: 'password'})
user2sub = UserWorkspace.create!({user_id: "#{user2.id}", workspace_id: "#{aaworkspace.id}"})
UserChat.create!({user_id: "#{user2.id}", chat_id: "#{aageneral.id}"})
user2sub2 = UserWorkspace.create!({user_id: "#{user2.id}", workspace_id: "#{testworkspace.id}"})
UserChat.create!({user_id: "#{user2.id}", chat_id: "#{twgeneral.id}"})

user3 = User.create!({email: 'testuser2@test.test', username:'Ayce', password: 'password'})
user3sub = UserWorkspace.create!({user_id: "#{user3.id}", workspace_id: "#{aaworkspace.id}"})
UserChat.create!({user_id: "#{user3.id}", chat_id: "#{aageneral.id}"})
user3sub2 = UserWorkspace.create!({user_id: "#{user3.id}", workspace_id: "#{testworkspace.id}"})
UserChat.create!({user_id: "#{user3.id}", chat_id: "#{twgeneral.id}"})

user4 = User.create!({email: 'testuser3@test.test', username:'Spencer', password: 'password'})
user4sub = UserWorkspace.create!({user_id: "#{user4.id}", workspace_id: "#{aaworkspace.id}"})
UserChat.create!({user_id: "#{user4.id}", chat_id: "#{aageneral.id}"})
user4sub2 = UserWorkspace.create!({user_id: "#{user4.id}", workspace_id: "#{testworkspace.id}"})
UserChat.create!({user_id: "#{user4.id}", chat_id: "#{twgeneral.id}"})

user5 = User.create!({email: 'testuser4@test.test', username:'John', password: 'password'})
user5sub = UserWorkspace.create!({user_id: "#{user5.id}", workspace_id: "#{aaworkspace.id}"})
UserChat.create!({user_id: "#{user5.id}", chat_id: "#{aageneral.id}"})
user5sub2 = UserWorkspace.create!({user_id: "#{user5.id}", workspace_id: "#{testworkspace.id}"})
UserChat.create!({user_id: "#{user5.id}", chat_id: "#{twgeneral.id}"})

aageneral.messages.create!({user_id: user2.id, chat_id: aageneral.id, body:"does this actually work?"})
aageneral.messages.create!({user_id: user3.id, chat_id: aageneral.id, body:"of course it does!"})
aageneral.messages.create!({user_id: user4.id, chat_id: aageneral.id, body:"wow"})
aageneral.messages.create!({user_id: user5.id, chat_id: aageneral.id, body:"you can't see me"})

twgeneral.messages.create!({user_id: user2.id, chat_id: twgeneral.id, body:"html is the best programming language"})
twgeneral.messages.create!({user_id: demouser.id, chat_id: twgeneral.id, body:"lol"})
