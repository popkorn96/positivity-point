class CommentsController < ApplicationController
    before_action :comment, :only => [:show, :update, :destroy]
    def index 
        comments = Comment.all
        render json: CommentsSerializer.new(comments).to_serialized_json
    end
    def create 
        render json: Comment.create(comment_params)
    end
    def show
        render json: CommentsSerializer.new(@comment).to_serialized_json
    end
    def update
        @comment.update(comment_params)
            if @comment.save
                render json: CommentsSerializer.new(@comment).to_serialized_json
            else 
                render json: {errors: @comment.errors.full_messages}
        end
    end
    def destroy
        render json: @comment.destroy
    end
    private
    def comment
        @comment = Comment.find(params[:id])
    end
    def comment_params
        params.permit(:user_id, :story_id, :content)
    end
end
