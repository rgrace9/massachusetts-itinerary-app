class ExcursionsController < ApplicationController

  def index
    @excursions = Excursion.all
  end


end
