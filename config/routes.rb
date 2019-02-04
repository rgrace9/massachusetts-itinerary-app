Rails.application.routes.draw do
  root 'regions#index'

  get "/excursions", to: "excursions#search"
  devise_for :users
  resources :regions, only: [:index, :show] do
    resources :cities, only: [:index, :show]
  end

  resources :excursions, only: :index

  resources :cities, only: [:index, :show] do
    resources :excursions, only: [:index, :show, :new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :regions, only: [:show]
      resources :comments, only: [:create, :new]
      resources :excursions
        post 'excursions/search', to: 'excursions#search'
    end
  end

end
