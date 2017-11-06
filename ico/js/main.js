$(function () {
    initStickyMenu();
    initMenuLinksActivation();
    initNavigationLinks();
    initFormLabels();
    
    initCountDown('Nov 14, 2017 00:00:00', function () {
        console.log('Countdown finished!');
    });

    initCharts({
        dataset:
        [{
            label: 'Investments',
            color: '#195ce3',
            value: 23,
            maxValue: 38.5
        },
        {
            label: 'Team',
            color: '#f2450a',
            value: 24,
            maxValue: 38.5
        },
        {
            label: 'Bounties',
            color: '#f2730a',
            value: 8,
            maxValue: 38
        },
        {
            label: 'Advisors & Partners',
            color: '#f1b718',
            value: 37,
            maxValue: 40
        }],
        tooltipFormat: function (value) {
            return value + 'm JAR';
        },
        doughnut: {
            line1Text: "63000000",
            line1Font: "20px Roboto",
            line1Color: "#313030",
            line1Padding: 10,
            line2Text: "TOTAL SUPPLY",
            line2Font: "13px Roboto",
            line2Color: "#b1b1b1",
            line2Padding: 15,
        },
        bars: {
            paddingTop: 30,
            percentageFontSize: 13,
            percentageFontFamily: 'Roboto',
            percentageColor: '#b1b1b1',
        }
    });
});

/**
 * Implementation below
 */

function initStickyMenu() {
    $('#nav-wraper').wrap('<div class="nav-placeholder"></div>');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 39) {
            $('#nav-wraper').addClass('default').fadeIn('slow');
        } else {
            $('#nav-wraper').removeClass('default').fadeIn('slow');
        }
    });
}

function initFormLabels() {
    $('.user-input').focus(function () {
        $(this).parent().addClass('focus');
        scrollToTopOnIOS();
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).parent().removeClass('focus');
        }
    });
}

function scrollToTopOnIOS() {
    var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3/.test(ua);

    // ios 11 bug caret position
    if ( iOS && iOS11 ) {
        window.scrollTo(0, 0);
    }
}

function initMenuLinksActivation() {
	var navItems = $('.menu-item a');
	var win = $(window);
	var items = $('.item');

	navItems.click(function(e){
		var item = $(this);
		
		$('.menu-item a.active').removeClass('active');
		item.addClass('active');
	});

	win.scroll(function(e){
		$('.menu-item a.active').removeClass('active');
		$.each(items, function(key, value){
			var item = $(value);
			if(win.scrollTop() >= item.offset().top - 10){
				$('.menu-item a.active').removeClass('active');
				var id = item.attr('id');

				$.each(navItems, function(key, value){
					var navItem = $(value);
					if(navItem.attr('href') == '#'+id) navItem.addClass('active');
				});
			}
		});
	});
}

function initNavigationLinks() {
    $('a[data-target^="anchor"]').on('click', function () { 
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('.navbar-collapse').removeClass('in');
        $('body, html').animate({ scrollTop: bl_top}, 1000);
        return false;
    });
}



function initCountDown(dateString, finishedCallback) {
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    var countDown = new Date(dateString).getTime(),
        x = setInterval(function () {

            var now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerHTML = appendZero(Math.max(Math.floor(distance / (day)), 0));
            document.getElementById('hours').innerHTML = appendZero(Math.max(Math.floor((distance % (day)) / (hour)), 0));
            document.getElementById('minutes').innerHTML = appendZero(Math.max(Math.floor((distance % (hour)) / (minute)), 0));
            document.getElementById('seconds').innerHTML = appendZero(Math.max(Math.floor((distance % (minute)) / second), 0));

            function appendZero(num) {
                var str = num.toString();
                return str.length === 1
                    ? "0" + str
                    : str;
            }

            if (distance < 0) {
                clearInterval(x);

                finishedCallback();
            }

        }, second);
}

function initCharts(config) {
    Chart.elements.Rectangle.prototype.draw = function () {

        var ctx = this._chart.ctx;
        var vm = this._view;
        var left, right, top, bottom, signX, signY, borderSkipped, radius;
        var borderWidth = vm.borderWidth;
        // Set Radius Here
        // If radius is large enough to cause drawing errors a max radius is imposed
        var cornerRadius = 8;

        if (!vm.horizontal) {
            // bar
            left = vm.x - vm.width / 2;
            right = vm.x + vm.width / 2;
            top = vm.y;
            bottom = vm.base;
            signX = 1;
            signY = bottom > top ? 1 : -1;
            borderSkipped = vm.borderSkipped || 'bottom';
        } else {
            // horizontal bar
            left = vm.base;
            right = vm.x;
            top = vm.y - vm.height / 2;
            bottom = vm.y + vm.height / 2;
            signX = right > left ? 1 : -1;
            signY = 1;
            borderSkipped = vm.borderSkipped || 'left';
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
            // borderWidth shold be less than bar width and bar height.
            var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
            borderWidth = borderWidth > barSize ? barSize : borderWidth;
            var halfStroke = borderWidth / 2;
            // Adjust borderWidth when bar top position is near vm.base(zero).
            var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
            var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
            var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
            var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
            // not become a vertical line?
            if (borderLeft !== borderRight) {
                top = borderTop;
                bottom = borderBottom;
            }
            // not become a horizontal line?
            if (borderTop !== borderBottom) {
                left = borderLeft;
                right = borderRight;
            }
        }

        var topOffset = config.bars.paddingTop;
        var reduceRatio = topOffset / this._chart.height;
        var reduceValue = this._chart.height * reduceRatio;
        top = Math.max(top + reduceValue - top * reduceRatio, 0);

        // Corner points, from bottom-left to bottom-right clockwise
        // | 1 2 |
        // | 0 3 |
        var corners = [
            [left, bottom],
            [left, top],
            [right, top],
            [right, bottom]
        ];

        ctx.fillStyle = "#efefef";
        Chart.helpers.drawRoundedRectangle(ctx, left, topOffset, right - left, bottom, cornerRadius)
        ctx.fill();

        var current = this._chart.config.data.datasets[this._datasetIndex].data[0];
        var total = this._yScale.max;

        var percentage = parseInt(current * 100 / total)

        ctx.fillStyle = config.bars.percentageColor;
        ctx.font = config.bars.percentageFontSize + "px " + config.bars.percentageFontFamily;
        ctx.textAlign = "center";
        ctx.fillText(percentage + "%", left + (right - left), config.bars.percentageFontSize);

        ctx.beginPath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = borderWidth;

        // Find first (starting) corner with fallback to 'bottom'
        var borders = ['bottom', 'left', 'top', 'right'];
        var startCorner = borders.indexOf(borderSkipped, 0);
        if (startCorner === -1) {
            startCorner = 0;
        }

        function cornerAt(index) {
            return corners[(startCorner + index) % 4];
        }

        // Draw rectangle from 'startCorner'
        var corner = cornerAt(0);
        ctx.moveTo(corner[0], corner[1]);

        for (var i = 1; i < 4; i++) {
            corner = cornerAt(i);
            nextCornerId = i + 1;
            if (nextCornerId == 4) {
                nextCornerId = 0
            }

            nextCorner = cornerAt(nextCornerId);

            width = corners[2][0] - corners[1][0];
            height = corners[0][1] - corners[1][1];
            x = corners[1][0];
            y = corners[1][1];

            var radius = cornerRadius;

            // Fix radius being too large
            if (radius > height / 2) {
                radius = height / 2;
            } if (radius > width / 2) {
                radius = width / 2;
            }

            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
        }

        ctx.fill();
        if (borderWidth) {
            ctx.stroke();
        }
    };

    var _data = {
        datasets: config.dataset.map(function (current, index) {
            return {
                data: [current.value],
                backgroundColor: current.color,
                yAxisID: 'y-axis-' + (index + 1)
            }
        })
    };

    var _options = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: false,
                barPercentage: 0.2,
                gridLines: {
                    display: false
                },
            }],
            yAxes: config.dataset.map(function (current, index) {
                return {
                    display: false,
                    id: 'y-axis-' + (index + 1),
                    ticks: {
                        suggestedMin: 0,
                        max: current.maxValue
                    }
                }
            })
        },

        tooltips: {
            enabled: false,
            custom: function (tooltipModel) {
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.class = ""
                    tooltipEl.innerHTML = '<div class="tooltip-content"> <div class="tooltip-arrow"></div><span class="tooltip-value"></span></div>'
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var value = tooltipModel.body[0].lines[0];
                    tooltipEl.querySelector('.tooltip-value').innerHTML = config.tooltipFormat(value);
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'fixed';
                tooltipEl.style.left = position.left + tooltipModel.caretX - tooltipEl.offsetWidth / 2 + 'px';
                tooltipEl.style.top = position.top + this._chart.height + 'px';
                tooltipEl.style.fontSize = tooltipModel.fontSize;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            }
        }
    };

    var barChart = new Chart(document.getElementById("bar-chart").getContext("2d"), {
        type: "bar",
        data: _data,
        options: _options
    });

    var doughnutChart = new Chart(document.getElementById("doughnut-chart").getContext("2d"), {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: config.dataset.map(function (data) {
                        return data.value;
                    }),
                    backgroundColor: config.dataset.map(function (data) {
                        return data.color;
                    }),
                }],

            labels: config.dataset.map(function (data) {
                return data.label;
            }),
        },

        plugins: [{
            beforeDraw: function (chart) {
                var width = chart.chart.width,
                    height = chart.chart.height,
                    ctx = chart.chart.ctx;

                ctx.restore();

                ctx.textAlign = "center";
                ctx.fillStyle = config.doughnut.line1Color;
                ctx.font = config.doughnut.line1Font;
                ctx.fillText(config.doughnut.line1Text, chart.chartArea.left / 2 + width / 2, (chart.height / 2) - config.doughnut.line1Padding);
                ctx.fillStyle = config.doughnut.line2Color;
                ctx.font = config.doughnut.line2Font;
                ctx.fillText(config.doughnut.line2Text, chart.chartArea.left / 2 + width / 2, (chart.height / 2) + config.doughnut.line2Padding);

                ctx.save();
            }
        }],
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return config.tooltipFormat(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
                    }
                },
                displayColors: false,
                backgroundColor: '#e1e9f7',
                bodyFontColor: '#195ce3',
                cornerRadius: 10,
                fontSize: 15,
                xPadding: 10,
                yPadding: 8,
            },

            cutoutPercentage: 67,
            legend: {
                display: false,
            }
        }
    });

    document.getElementById('doughnut-legend').innerHTML = doughnutChart.generateLegend();
}