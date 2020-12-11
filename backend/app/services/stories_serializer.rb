
class StoriesSerializer
    def initialize(story_obj)
        @Story = story_obj
    end
    def to_serialized_json
        @Story.to_json(:include => {
            :comments => {
                :except => [:updated_at]
            }},
            :except => [:created_at, :updated_at])
    end
end