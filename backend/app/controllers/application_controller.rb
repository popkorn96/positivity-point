class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
#     csrf token verification not required 
    helper_method :current_user, :login!, :logged_in?, :authorized_user?, :logout!, :set_user
    helper_method 
        
    def login!
          session[:user_id] = @user.id
    end
    def logged_in?
          !!session[:user_id]
    end
    def authorized_user?
           @user == current_user
    end
    def logout!
           session.clear
    end
    def set_user
        @user = User.find_by(id: session[:user_id])
    end 
end
