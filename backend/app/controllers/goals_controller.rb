class GoalsController < ApplicationController
    before_action :goal, :only => [:show, :update, :destroy]
    def index 
        goals = Goal.all
        render json: GoalsSerializer.new(goals).to_serialized_json
    end
    def create 
        render json: Goal.create(goal_params)
    end
    def show
        render json: GoalsSerializer.new(@goal).to_serialized_json
    end
    def update
        @goal.update(goal_params)
            if @goal.save
                render json: GoalsSerializer.new(@goal).to_serialized_json
            else 
                render json: {errors: @goal.errors.full_messages}
        end
    end
    def destroy
        render json: @goal.destroy
    end
    private
    def goal
        @goal = Goal.find(params[:id])
    end
    def goal_params
        params.permit(:user_id, :content)
    end
end
