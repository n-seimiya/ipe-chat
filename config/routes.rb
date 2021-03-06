Rails.application.routes.draw do
  root 'messages#index'
  get "messages/:id/index", to: "messages#index"
  post "messages/create", to: "messages#create"
  get "messages/:id/edit", to: "messages#edit", as: "messages_edit"
  patch "messages/:id/update", to: "messages#update", as: "messages_update"
  delete "messages/:id/delete", to: "messages#destroy", as: "messages_delete"
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#login'
  get '/signup', to: 'sessions#signup'
  post '/signup', to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy', as: "logout"

  namespace :api do
    get '/messages', to: 'messages#index', defaults: { format: 'json' }
    post '/messages', to: 'messages#create', defaults: {format: 'json'}
  end
end