class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader

  has_many :itineraries


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
