
class UsersSerializer
    def initialize(user_obj)
        @User = user_obj
    end
    def to_serialized_json
        @User.to_json(:include => {
            :stories => {
                :except => [:created_at]
            },
            :goals => {
                :except => [:updated_at]
            },
            :stories => {
                :except => [:updated_at]
            },
            :comments => {
                :except => [:updated_at]
            },
            :post_its => {
                :except => [:created_at, :updated_at]
            }},
            :except => [:updated_at])
    end
end