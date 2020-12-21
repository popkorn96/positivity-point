Rails.application.routes.draw do
  resources :signups, :only => [:create]

  get :status, to: "sessions#is_logged_in?"
  post :login, to: "sessions#create"
  delete :logout, to: "sessions#logout"
  
  resources :goals
  resources :post_its
  resources :comments
  resources :stories
  resources :users

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
