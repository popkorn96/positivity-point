class Story < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :user_id, presence: true
  validates :title, presence: true, length: { min: 3}
  validates :content, presence: true, length: { maximum: 3000 }
end
