Rails.application.routes.draw do
  root 'regions#index'
  devise_for :users
  resources :regions, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :regions, only: [:show]
      resources :comments, only: [:create, :new]
    end
  end

end
