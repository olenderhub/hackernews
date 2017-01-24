Rails.application.routes.draw do
  namespace :api do
    get 'fetch-news', to: 'index#fetch_news'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
