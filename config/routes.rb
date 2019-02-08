Rails.application.routes.draw do
  root 'regions#index'

  devise_for :users
  resources :users, only: :show

  resources :itineraries, only: [:index, :show, :new, :create]

  resources :regions, only: [:index, :show] do
    resources :cities, only: [:index, :show]
  end

  resources :excursions, only: [:index, :show]

  resources :cities, only: [:index, :show] do
    resources :excursions, only: [:index, :show, :new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :cities, only: [:show] do
        get "/excursions", to: "excursions#search"
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :create, :new, :show]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :itineraries, only: [:create, :index]
    end
  end

end
