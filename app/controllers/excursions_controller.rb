class ExcursionsController < ApplicationController
  def index
    @excursions = Excursion.all
  endœ
end
