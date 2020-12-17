Rails.application.routes.draw do
  resources :sessions, :only => [:create]
  resources :signups, :only => [:create]

  delete :logout, to: "sessions#logout"
  
  resources :goals
  resources :post_its
  resources :comments
  resources :stories
  resources :users

  get :status, to: "sessions#is_logged_in?"
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
