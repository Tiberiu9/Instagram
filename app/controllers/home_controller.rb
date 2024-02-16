class HomeController < ApplicationController
  def index
    # show all post
    @posts = Post.all
    # show current user posts
    # @posts = current_user.posts if user_signed_in?
  end
end
