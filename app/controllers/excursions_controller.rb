class ExcursionsController < ApplicationController

  def index
    @excursions = Excursion.all
  end

  def show
  end

end
