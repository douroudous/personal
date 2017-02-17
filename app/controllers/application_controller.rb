class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!, except: [:index]

  protected

  def configure_permitted_parameters
    update_attrs = [:password, :password_confirmation, :username, :current_password, :email]
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :username, :photo])
    devise_parameter_sanitizer.permit(:account_update, keys: [:photo])
  end

  def full_title(song)
    title = "#{song.title}"
    if song.version > 1
      title = title + " (#{song.version.to_s})"
    end
    title
  end

  helper_method :full_title
end
