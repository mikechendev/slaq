# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

demouser = User.create!({email: 'demouser@demo.demo', username:'demoUser', password: 'password'})

aaworkspace = Workspace.create!({name: 'App Academy', admin_id: "#{demouser.id}"})
testworkspace = Workspace.create!({name: 'fake discord', admin_id: "#{demouser.id}"})

demosub = UserWorkspace.create!({user_id: "#{demouser.id}", workspace_id: "#{aaworkspace.id}"})
demosub2 = UserWorkspace.create!({user_id: "#{demouser.id}", workspace_id: "#{testworkspace.id}"})