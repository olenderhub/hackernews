class News < ApplicationRecord
  validates :url, :title, :rank, :hacker_news_id, presence: true
end
