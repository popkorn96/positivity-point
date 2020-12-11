class CreatePostIts < ActiveRecord::Migration[6.0]
  def change
    create_table :post_its do |t|
      t.references :user, null: false, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end