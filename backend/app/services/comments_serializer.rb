
class CommentsSerializer
    def initialize(comment_obj)
        @comment = comment_obj
    end
    def to_serialized_json
        @comment.to_json(
            :except => [:updated_at])
    end
end