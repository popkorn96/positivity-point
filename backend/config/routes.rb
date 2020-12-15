Rails.application.routes.draw do
  resources :sessions, :only => [:create]
  resources :signups, :only => [:create]

  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  
  resources :goals
  resources :post_its
  resources :comments
  resources :stories
  resources :users
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
