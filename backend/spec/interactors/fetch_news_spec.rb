require "rails_helper"
RSpec.describe FetchNews, type: :interactor do
  context "for ycombinator pattern" do
    subject(:context) { FetchNews.call(target: "ycombinator") }

    context "when there is no news" do
      describe ".call" do
        it "succeeds" do
          stub_request(:any, "https://news.ycombinator.com/news?p=1").
            to_return(status: 200, body: "stubbed response", headers: {})
          expect(context).to be_a_success
          expect{context}.not_to change{News.count}
        end
      end
    end
  end
end
