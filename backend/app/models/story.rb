class Story < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 500 }
end
