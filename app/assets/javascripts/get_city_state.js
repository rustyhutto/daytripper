function reverseGeocode(pos) {
  // console.log(pos)
  var lat = pos.lat
  var long = pos.long
  var query = lat + "," + long
  // console.log(query)
  var queryUrl = "https://dt-geocoder.herokuapp.com/reverse_geocode?params=" + query
  $.ajax({
      url: queryUrl
  }).done(function(response) {
    // console.log(response)
    parseAddress(response, queryWikipedia)
  });

}

function parseAddress(address, cb) {
    var city = address.split(", ")[1]
    var state = address.split(", ")[2].split(" ")[0]
    var cityState = city + ", " + state
    // console.log(cityState)
    cb(cityState)
    // console.log(state);
    if (state === "AL") {
        $('body').css('background', "url(assets/alabama.png)");
    } else if (state === "AK") {
        $('body').css('background', "url(assets/alaska.png)");
    } else if (state === "AZ") {
        $('body').css('background', "url(assets/arizona.png)");
    } else if (state === "AR") {
        $('body').css('background', "url(assets/arkansas.png)");
    } else if (state === "CA") {
        $('body').css('background', "url(assets/california.png)");
    } else if (state === "CO") {
        $('body').css('background', "url(assets/colorado.png)");
    } else if (state === "CT") {
        $('body').css('background', "url(assets/connecticut.png)");
    } else if (state === "DE") {
        $('body').css('background', "url(assets/delaware.png)");
    } else if (state === "FL") {
        $('body').css('background', "url(assets/florida.png)");
    } else if (state === "GA") {
        $('body').css('background', "url(assets/georgia.png)");
    } else if (state === "HI") {
        $('body').css('background', "url(assets/hawaii.png)");
    } else if (state === "ID") {
        $('body').css('background', "url(assets/idaho.png)");
    } else if (state === "IL") {
        $('body').css('background', "url(assets/illinois.png)");
    } else if (state === "IN") {
        $('body').css('background', "url(assets/indiana.png)");
    } else if (state === "IA") {
        $('body').css('background', "url(assets/iowa.png)");
    } else if (state === "KS") {
        $('body').css('background', "url(assets/kansas.png)");
    } else if (state === "KY") {
        $('body').css('background', "url(assets/kentucky.png)");
    } else if (state === "LA") {
        $('body').css('background', "url(assets/louisiana.png)");
    } else if (state === "ME") {
        $('body').css('background', "url(assets/maryland.png)");
    } else if (state === "MD") {
        $('body').css('background', "url(assets/maine.png)");
    } else if (state === "MA") {
        $('body').css('background', "url(assets/massachusetts.png)");
    } else if (state === "MI") {
        $('body').css('background', "url(assets/michigan.png)");
    } else if (state === "MN") {
        $('body').css('background', "url(assets/minnesota.png)");
    } else if (state === "MS") {
        $('body').css('background', "url(assets/mississippi.png)");
    } else if (state === "MO") {
        $('body').css('background', "url(assets/missouri.png)");
    } else if (state === "MT") {
        $('body').css('background', "url(assets/montana.png)");
    } else if (state === "NE") {
        $('body').css('background', "url(assets/nebraska.png)");
    } else if (state === "NV") {
        $('body').css('background', "url(assets/nevada.png)");
    } else if (state === "NH") {
        $('body').css('background', "url(assets/new_hampshire.png)");
    } else if (state === "NJ") {
        $('body').css('background', "url(assets/new_jersey.png)");
    }  else if (state === "NM") {
        $('body').css('background', "url(assets/new_mexico.png)");
    }  else if (state === "NY") {
        $('body').css('background', "url(assets/new_york.png)");
    }  else if (state === "NC") {
        $('body').css('background', "url(assets/north_carolina.png)");
    }  else if (state === "ND") {
        $('body').css('background', "url(assets/north_dakota.png)");
    }  else if (state === "OH") {
        $('body').css('background', "url(assets/ohio.png)");
    }  else if (state === "OK") {
        $('body').css('background', "url(assets/oklahoma.png)");
    }  else if (state === "OR") {
        $('body').css('background', "url(assets/oregon.png)");
    }  else if (state === "PA") {
        $('body').css('background', "url(assets/pennsylvania.png)");
    }  else if (state === "RI") {
        $('body').css('background', "url(assets/rhode_island.png)");
    }  else if (state === "SC") {
        $('body').css('background', "url(assets/south_carolina.png)");
    }  else if (state === "SD") {
        $('body').css('background', "url(assets/south_dakota.png)");
    }  else if (state === "TN") {
        $('body').css('background', "url(assets/tennessee.png)");
    }  else if (state === "TX") {
        $('body').css('background', "url(assets/texas.png)");
    }  else if (state === "UT") {
        $('body').css('background', "url(assets/utah.png)");
    }  else if (state === "VT") {
        $('body').css('background', "url(assets/vermont.png)");
    }  else if (state === "VA") {
        $('body').css('background', "url(assets/virginia.png)");
    }  else if (state === "WA") {
        $('body').css('background', "url(assets/washington.png)");
    }  else if (state === "WV") {
        $('body').css('background', "url(assets/west_virginia.png)");
    }  else if (state === "WI") {
        $('body').css('background', "url(assets/wisconsin.png)");
    }  else {
        $('body').css('background', "url(assets/wyoming.png)");
    }
}
