class FetchNews
  include Interactor
  delegate :target, to: :context

  def call
    set_initial_page
    fetch_news
    context.news = News.all
  end

  private

  def set_initial_page
    @page = 1
  end

  def fetch_news
    loop do
      doc = selected_pattern.html_doc(@page)
      news_from_doc = selected_pattern.news_from_doc(doc)
      break if news_from_doc.blank?
      news_from_doc.each { |news| create_or_update(news) }
      @page += 1
    end
  end

  def selected_pattern
    case target
    when 'ycombinator'
      @selected_pattern ||= FetchingPatterns::Ycombinator.new
    end
  end

  def create_or_update(news)
    hash_from_news = @selected_pattern.hash_from_news(news)
    if record = News.find_by(news_id: hash_from_news[:news_id])
      record.update!(hash_from_news)
    else
      News.create!(hash_from_news)
    end
  end
end
