require "test_helper"

describe StaticPagesController do
  it "should get home" do
    get static_pages_home_url
    value(response).must_be :success?
  end

end
