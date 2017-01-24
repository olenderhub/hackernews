class NewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :rank, :news_id
end
