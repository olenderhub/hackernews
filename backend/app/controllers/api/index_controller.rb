class Api::IndexController < ApplicationController
  def fetch_news
    result = FetchNews.call()
    if result.success?
      render json: result.news, status: :ok
    end
  end
end
