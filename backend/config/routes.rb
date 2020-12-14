Rails.application.routes.draw do
  
  resources :goals
  resources :post_its
  resources :comments
  resources :stories
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
