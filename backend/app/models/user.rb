class User < ApplicationRecord
    has_many :stories
    has_many :comments
    has_many :post_its
    has_many :goals
end
