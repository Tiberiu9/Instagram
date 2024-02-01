class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  # validates_presence_of :true, on: :create, message: "can't be blank"
  validates :body, presence: true
end
