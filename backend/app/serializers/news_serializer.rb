class NewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :rank, :hacker_news_id
end
