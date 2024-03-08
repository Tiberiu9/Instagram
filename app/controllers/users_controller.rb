class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    if params[:search_query].present?
      @users = User.where("username LIKE ?", "%#{params[:search_query]}%")
    else
      @users = []
    end

    if turbo_frame_request?
      if params[:tag_name] == 'side_nav_search_form'
        render partial: "layouts/shared/search_results_side", locals: { users: @users }
      else
        render partial: "layouts/shared/search_results_top", locals: {users: @users}
      end
    end

  end

  def show
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

end
