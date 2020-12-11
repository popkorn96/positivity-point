class UsersController < ApplicationController
    before_action :user, :only => [:show, :update, :destroy]
    def index 
        users = User.all
        render json: UsersSerializer.new(users).to_serialized_json
    end
    def create 
        render json: User.create(user_params)
    end
    def show
        render json: UsersSerializer.new(@user).to_serialized_json
    end
    def update
        @user.update(user_params)
            if @user.save
                render json: UsersSerializer.new(@user).to_serialized_json
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
        params.permit(:name,:dob, :email, :password, :admin)
    end
end
