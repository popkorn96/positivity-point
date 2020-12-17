
class UsersSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :email, :id, :dob
  
    has_many :goals
    has_many :post_its
    has_many :stories
    has_many :comments
end