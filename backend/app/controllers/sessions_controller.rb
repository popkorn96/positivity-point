class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: session_params[:email])
      
        if @user && @user.authenticate(session_params[:password])
          login!
          render json: {
            status: :created,
            logged_in: true,
            user: UsersSerializer.new(@user)
          }
        else
          render json: { 
            status: 401,
            errors: ['no such user, please try again']
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