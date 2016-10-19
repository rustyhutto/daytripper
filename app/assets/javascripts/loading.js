$(function() {
    window.onload = function onLoad() {
        var circle = new ProgressBar.Circle('#loading', {
            color: '#33A532',
            strokeWidth: 3,
            trailWidth: 1,
            duration: 4000,
            easing: 'easeInOut',
            text: {
                // autoStyleContainer: false
            },
            from: { color: '#F9152F', width: 1 },
            to: { color: '#33A532', width: 4 },
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

            }


        });

        circle.animate(1);
    };
});