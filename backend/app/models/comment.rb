class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :story
  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 300}
end
