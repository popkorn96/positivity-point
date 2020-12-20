class PostItsController < ApplicationController
    before_action :post_it, :only => [:show, :update, :destroy]
    def index 
        post_its = PostIt.all
        render json: PostitsSerializer.new(post_its).to_serialized_json
    end
    def create 
        render json: PostIt.create(post_it_params)
    end
    def show
        render json: PostitsSerializer.new(@post_it).to_serialized_json
    end
    def update
        @post_it.update(post_it_params)
            if @post_it.save
                render json: PostitsSerializer.new(@post_it).to_serialized_json
            else 
                render json: {errors: @post_it.errors.full_messages}
        end
    end
    def destroy
        render json: @post_it.destroy
    end
    private
    def post_it
        @post_it = PostIt.find(params[:id])
    end
    def post_it_params
        params.permit(:user_id, :content)
    end
end
