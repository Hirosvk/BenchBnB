class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, statu: 401
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy if @user
  end

private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
