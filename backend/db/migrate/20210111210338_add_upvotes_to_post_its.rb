class AddUpvotesToPostIts < ActiveRecord::Migration[6.0]
  def change
    add_column :post_its, :upvotes, :integer
  end
end
