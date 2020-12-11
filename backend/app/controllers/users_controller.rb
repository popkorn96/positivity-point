class UsersController < ApplicationController
    before_action :user, :only => [:show, :update, :destroy]
    def index 
        users = User.all
        render json: userSerializer.new(users).to_serialized_json
    end
    def create 
        render json: User.create(user_params)
    end
    def show
        render json: UserSerializer.new(@user).to_serialized_json
    end
    def update
        @user.update(user_params)
            if @user.save
                render json: UserSerializer.new(@user).to_serialized_json
            else 
                render json: {errors: @user.errors.full_messages}
        end
    end
    def destroy
        render json: @user.destroy
    end
    private
    def user
        @user = User.find(params[:id])
    end
    def user_params
        params.permit(:name, :age, :favorite_color)
    end
end
