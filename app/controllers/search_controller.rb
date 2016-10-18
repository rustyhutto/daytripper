class SearchController < ApplicationController
    def index
        p params[:search]
    end
end
