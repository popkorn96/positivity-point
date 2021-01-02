class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:email])
      
        if @user && @user.authenticate(params[:password])
          login!
          render json: {
            status: 200,
            logged_in: true,
            user: UsersSerializer.new(@user)
          }
        elsif @user 
          render json: {
            status: 500,
            passwordError: ["*Wrong Password!"],
          }
        else
            render json: {
            status: 500,
            email_error: ["*Email Not Found!"]
          }
        end
    end
    # def logged_in
    #   if @current_user 
    #     render json: {
    #       logged_in: true,
    #       user: @current_user
    #     }
    #   else 
    #     render json: {
    #       logged_in: false
    #     }
    #   end
    # end
    def is_logged_in?
      if !!session[:user_id] && current_user
          render json: {
              logged_in: true,
              user: UsersSerializer.new(current_user)
          }
      else 
          render json: {
              logged_in: false,
              message: 'no such user'
          }
      end
    end
    def logout
          logout!
          render json: {
            status: 200,
            logged_out: true
          }
    end
    private
    def session_params
          params.require(:user).permit(:email, :password)
    end
end 