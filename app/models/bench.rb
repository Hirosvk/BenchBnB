class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :presence => true

  def self.inbounds(bounds)
    lat_max = [bounds["northEast"]["lat"], bounds["southWest"]["lat"]].max
    lat_min = [bounds["northEast"]["lat"], bounds["southWest"]["lat"]].min
    lng_max = [bounds["northEast"]["lng"], bounds["southWest"]["lng"]].max
    lng_min = [bounds["northEast"]["lng"], bounds["southWest"]["lng"]].min

    self.connection.execute(<--SQL, lat_min, lat_max, lng_min, lng_max
      SELECT
        *
      FROM
        benches
      WHERE
        (lat BETWEEN ? AND ?) AND
        (lng BETWEEN ? AND ?)
    SQL

  end
end
