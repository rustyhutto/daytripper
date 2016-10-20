$(function() {
    $("#nav-icon").hide();
    window.onload = function onLoad() {
        var circle = new ProgressBar.Circle('#loading', {
            color: '#A9A9A9',
            strokeWidth: 3,
            trailWidth: 1,
            duration: 4425,
            easing: 'easeInOut',
            text: {
                // autoStyleContainer: false
            },
            from: { color: '#F8F8FF', width: 1 },
            to: { color: '#A9A9A9', width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }
                if (value === 100) {
                    changeButtonColor();
                    $("#nav-icon").show();


                }
            }


        });

        circle.animate(1);
    };

    $("#launch").on("click", function() {
        $("#loading").hide();
    })

    $("#search-button").on("click", function() {
        $("#loading").hide();
    })

});