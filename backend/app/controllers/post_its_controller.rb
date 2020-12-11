class PostItsController < ApplicationController
    before_action :post_it, :only => [:show, :update, :destroy]
    def index 
        stories = Post_It.all
        render json: ost_itSerializer.new(post_its).to_serialized_json
    end
    def create 
        render json: Post_It.create(post_it_params)
    end
    def show
        render json: post_itSerializer.new(@post_it).to_serialized_json
    end
    def update
        @post_it.update(post_it_params)
            if @post_it.save
                render json: post_itSerializer.new(@post_it).to_serialized_json
            else 
                render json: {errors: @post_it.errors.full_messages}
        end
    end
    def destroy
        render json: @post_it.destroy
    end
    private
    def post_it
        @post_it = Post_It.find(params[:id])
    end
    def post_it_params
        params.permit(:user_id, :title, :content)
    end
end
