Pusher::Application.routes.draw do
  resources :samples, :only => [:index, :create]

  root :to => 'samples#index'
end
