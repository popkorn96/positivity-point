class StoriesController < ApplicationController
    before_action :story, :only => [:show, :update, :destroy]
    def index 
        stories = Story.all
        render json: StorySerializer.new(storys).to_serialized_json
    end
    def create 
        render json: Story.create(story_params)
    end
    def show
        render json: StorySerializer.new(@story).to_serialized_json
    end
    def update
        @story.update(story_params)
            if @story.save
                render json: StorySerializer.new(@story).to_serialized_json
            else 
                render json: {errors: @story.errors.full_messages}
        end
    end
    def destroy
        render json: @story.destroy
    end
    private
    def story
        @story = Story.find(params[:id])
    end
    def story_params
        params.permit(:name, :age, :favorite_color)
    end
end
