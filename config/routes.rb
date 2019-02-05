Rails.application.routes.draw do
  root 'regions#index'

  devise_for :users



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
      resources :excursions, only: :show
    end
  end

end
