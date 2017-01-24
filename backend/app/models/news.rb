class News < ApplicationRecord
  validates :url, :title, :rank, :news_id, presence: true
end
