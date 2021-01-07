class AddSavedToStories < ActiveRecord::Migration[6.0]
  def change
    add_column :stories, :saved, :boolean, default: false
  end
end
