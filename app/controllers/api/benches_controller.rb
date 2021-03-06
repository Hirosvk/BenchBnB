class Api::BenchesController < ApplicationController
  def index
    bounds = JSON.parse(params["bounds"])
    @benches = Bench.inbounds(bounds)
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages
    end
  end

private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
