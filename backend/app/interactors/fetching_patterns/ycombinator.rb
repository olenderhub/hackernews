class FetchingPatterns::Ycombinator
  def html_doc(page)
    Nokogiri::HTML(open("https://news.ycombinator.com/news?p=" + page.to_s))
  end

  def news_from_doc(doc)
    doc.css('.athing')
  end

  def hash_from_news(news)
    hash = {
      news_id: news.attributes['id'].value.to_i,
      rank: news.css('td')[0].text.chop!.to_i,
      title: news.css('td:nth-of-type(3) a').first.text,
    }
    url = news.css('td:nth-of-type(3) a').first.attr('href')
    hash.merge!(url: url.include?('http') ? url : 'https://news.ycombinator.com/' + url )
  end
end
