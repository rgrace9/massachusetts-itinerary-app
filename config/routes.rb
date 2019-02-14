Rails.application.routes.draw do
  root 'regions#index'

  devise_for :users

  resources :users, only: :show do
    resources :itineraries, only: [:index, :show, :new, :create]
  end

  # resources :itineraries, only: [:index, :show, :new, :create]

  resources :regions, only: [:index, :show] do
    resources :cities, only: [:index, :show]
  end

resources :excursions, only: :show


  resources :categories, only: :index

  resources :cities, only: :index

  resources :cities, only: :show do
    resources :excursions, only: :show
  end



  namespace :api do
    namespace :v1 do
      resources :cities, only: [:show] do
        post "/excursions", to: "excursions#search"
        get "/businesses", to: "businesses#search"
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :create, :new, :show, :update, :destroy]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :itineraries, only: [:create, :index, :show] do
        resources :events, only: [:index]
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :regions, only: [:index, :show]
  end
end

namespace :api do
  namespace :v1 do
      post "/queries", to: "queries#search"
  end
end


end
