class RenameColumnInNews < ActiveRecord::Migration[5.0]
  def change
    rename_column :news, :hacker_news_id, :news_id
  end
end
