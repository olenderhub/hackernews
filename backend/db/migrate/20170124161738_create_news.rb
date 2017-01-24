class CreateNews < ActiveRecord::Migration[5.0]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.integer :rank, null: false
      t.integer :hacker_news_id, null: false
    end
  end
end
