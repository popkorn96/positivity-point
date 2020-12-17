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
  # namespace :api do 
  #   resources :categories
  #   resources :users, only: [:create, :show]
  #   resources :recipes do 
  #     resources :recipe_ingredients
  #   end
  # end

  # get "api/login/status", to: "api/sessions#is_logged_in?"
  # delete "api/logout/:id", to: "api/sessions#destroy"
  # post "api/login", to: "api/sessions#create"
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
