class Event < ApplicationRecord
  before_validation :set_event_start

  belongs_to :itinerary
  belongs_to :business

  def start_event_day
    if !@start_event_day_string
      @start_event_day_string = self.start_day_time.strftime("%A %-m/%d/%Y")
    end
      @start_event_day_string
  end

  def start_event_time
    if !@start_event_time_string
      @start_event_time_string = self.start_day_time.strftime("%-l:%M %p")
    end
  @start_event_time_string
  end

  def start_event_day=(date_string)
    @start_event_day_string=(date_string)
  end

  def start_event_time=(time_string)
    @start_event_time_string = time_string
  end

  protected

  def set_event_start
    if @start_event_day_string && @start_event_time_string
      self.start_day_time = Time.parse("#{@start_event_day_string} #{@start_event_time_string}")
    end
  end

end
