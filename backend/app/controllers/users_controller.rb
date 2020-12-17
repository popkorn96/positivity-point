class UsersController < ApplicationController
    before_action :user, :only => [:show, :update, :destroy]
    def index
        @users = User.all
           if @users
              render json: {
              users: @users
           }
          else
              render json: {
              status: 500,
              errors: ['no users found']
          }
         end
    end
    def show
       @user = User.find(params[:id])
           if @user
              render json: {
              user: @user
           }
           else
              render json: {
              status: 500,
              errors: ['user not found']
            }
           end
      end
    def create
        @user = User.new(user_params)
            if @user.save
                login!  
                render json: {
                status: :created,
                user: UserSerializer.new(@user)
            }
           else 
               render json: {
               status: 500,
               errors: @user.errors.full_messages
           }
           end
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
        params.permit(:name, :dob, :email, :password, :admin)
    end
end
