# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
content = Faker::Lorem.sentence(word_count: 15)
date = Faker::Date.between(from: '1980-09-23', to: '2001-09-25')
User.create!(name:  "Example User",
             email: "example@railstutorial.org",
             password: "foobar",
             dob: date,
             admin:     true)
             
5.times do |n|
name  = Faker::Name.name
email = "example-#{n+1}@railstutorial.org"
password = "password"
date = Faker::Date.between(from: '1980-09-23', to: '2001-09-25')
User.create!(name:  name,
            email: email,
            password: password,
            dob: date)
end

users = User.order(:created_at).take(6)
15.times do
  content = Faker::Lorem.sentence(word_count: 15)
  users.each { |user| user.stories.create!(content: content) }
end

users = User.all
user  = users.first