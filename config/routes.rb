Rails.application.routes.draw do
  root 'regions#index'
  devise_for :users
  resources :regions, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
