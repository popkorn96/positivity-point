
class PostitsSerializer
    def initialize(post_it_obj)
        @post_it = post_it_obj
    end
    def to_serialized_json
        @post_it.to_json(:except => [:updated_at])
    end
end