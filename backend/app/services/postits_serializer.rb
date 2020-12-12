
class PostitsSerializer
    def initialize(user_obj)
        @User = user_obj
    end
    def to_serialized_json
        @User.to_json(:except => [:updated_at])
    end
end