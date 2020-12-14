class SignupsController < ApplicationController
    def create
        @user = User.create!(
            name: signup_params[:name],
            dob: signup_params[:dob],
            email: signup_params[:email],
            password: signup_params[:password]
            )
        if @user
            login!
            render json: {
              status: :created,
              user: @user
            }
        else
            render json: { 
              status: 500,
              errors: ['error, please try again']
            }
        end
    end
    private
    def signup_params
        params.require(:user).permit(:name, :dob, :email, :password)
    end
end
