
class UserSerializer
    def initialize(user_obj)
        @User = user_obj
    end
    def to_serialized_json
        @User.to_json(:include => {
            :gifts => {
                :except => [:created_at]
            }},
            :except => [:created_at, :updated_at])
    end
end