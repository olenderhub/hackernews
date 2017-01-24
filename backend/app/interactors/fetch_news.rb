class FetchNews
  include Interactor

  def call
    page = 1
    loop do
      doc = Nokogiri::HTML(open("https://news.ycombinator.com/news?p=" + page.to_s))
      break if doc.css('.athing').blank?
      doc.css('.athing').each do |news|
        create_or_update(news)
      end
      page += 1
    end
    context.news = News.all
  end

  private

  def hash_from_news(news)
    {
      hacker_news_id: news.attributes['id'].value.to_i,
      rank: news.css('td')[0].text.chop!.to_i,
      title: news.css('td:nth-of-type(3) a').first.text,
      url: news.css('td:nth-of-type(3) a').first.attr('href')
    }
  end

  def create_or_update(news)
    if record = News.find_by(hacker_news_id: news.attributes['id'].value.to_i)
      record.update!(hash_from_news(news))
    else
      News.create!(hash_from_news(news))
    end
  end
end
