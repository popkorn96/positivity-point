
class GoalsSerializer
    def initialize(goals_obj)
        @Goals = goals_obj
    end
    def to_serialized_json
        @Goals.to_json(:except => [:created_at, :updated_at])
    end
end