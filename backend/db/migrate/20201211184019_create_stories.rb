class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
