# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
date = Faker::Date.between(from: '1980-09-23', to: '2001-09-25')
User.create!(name:  "Example User",
             email: "examples@railstutorials.org",
             password: "foobar",
             dob: date,
             admin:     true)
             
5.times do |n|
name  = Faker::Name.name
email = "examples-#{n+1}@railstutorials.org"
password = "password"
date = Faker::Date.between(from: '1980-09-23', to: '2001-09-25')
User.create!(name:  name,
            email: email,
            password: password,
            dob: date)
end

users = User.order(:created_at).take(5)
10.times do
  title = Faker::Lorem.sentence(word_count: 5)
  content = Faker::Lorem.sentence(word_count: 30)
  users.each { |user| user.stories.create!(
    title: title,
    content: content) }
end

5.times do
  title = Faker::Lorem.sentence(word_count: 5)
  content = Faker::Lorem.sentence(word_count: 15)
  users.each { |user| user.goals.create!(
    title: title,
    content: content) }
end

10.times do
  content = Faker::Lorem.sentence(word_count: 15)
  users.each { |user| user.post_its.create!(content: content) }
end

stories = Story.order(:created_at).take(5)
15.times do 
  user_id = Faker::Number.between(from: 1, to: 5)
  content = Faker::Lorem.sentence(word_count: 5)
  stories.each{ |story| story.comments.create!(user_id: user_id, content: content)}
end 

users = User.all
user  = users.first
# stories = Story.order(:created_at).take(6)
# 5.times do |n|
#   user_id = Faker::Number.between(from: 1, to: 5)
#   story_id  = Faker::Number.between(from: 1, to: 15)
#   content = Faker::Lorem.sentence(word_count: 10)
#   stories.each { |story| story.comments.create!(content: content)}
# end

# users = User.order(:created_at).take(6)
# 7.times do |n|
#   user_id = Faker::Number.between(from: 1, to: 5)
#   content = Faker::Lorem.sentence(word_count: 50)
#   users.each { |user| user.goals.create!(content: content)}
# end

# 12.times do |n|
#   user_id = Faker::Number.between(from: 1, to: 5)
#   content = Faker::Lorem.sentence(word_count: 20)
#   users.each { |user| user.post_its.create!(content: content)}
# end

# users = User.all
# user = users.first