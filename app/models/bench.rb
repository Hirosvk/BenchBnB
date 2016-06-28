class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :presence => true

  def self.inbounds(bounds)
    lat_max = [bounds["northEast"]["lat"], bounds["southWest"]["lat"]].max
    lat_min = [bounds["northEast"]["lat"], bounds["southWest"]["lat"]].min
    lng_max = [bounds["northEast"]["lng"], bounds["southWest"]["lng"]].max
    lng_min = [bounds["northEast"]["lng"], bounds["southWest"]["lng"]].min

    self.where("lat between ? and ?", lat_min, lat_max).where("lng between ? and ?", lng_min, lng_max)
  end
end
