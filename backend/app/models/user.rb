class User < ApplicationRecord
    has_many :stories
    has_many :comments
    has_many :post_its
    has_many :goals

    validates :name,  presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: true
    has_secure_password
    validates :password, presence: true, length: { minimum: 6 }, allow_nil: true

    # attr_accessor :remember_token, :activation_token, :reset_token
    # before_save   :downcase_email
    # before_create :create_activation_digest
end
