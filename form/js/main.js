$(function() {
    updateStats();
    
    $('.skills-control-checkbox').change(function() {
        var currentArea = $('.my-skill').attr('data-area');
        updateStats(currentArea);
    });

    
    $('.stats-chart-piece').on('mouseenter', function() {
        $('.is-active').removeClass('is-active');
        
        $(this).addClass('is-active');
        $('.stats-chart .stats-chart-piece:not(.is-active)').addClass('is-minimized');
        
        var area = $(this).attr('data-area');
        
        var mySkill;
        switch(area) {
            case 'js':
            mySkill = 'JavaScript';
            break;
            case 'css':
            mySkill = 'CSS';
            break;
            case 'framework':
            mySkill = 'Frameworks';
            break;
        }
        $('.stats-area').text(mySkill).attr('data-area', area);
        updateStats();
    })

    $('.stats-chart-piece').on('mouseleave', function() {
        $(this).removeClass('is-active');
        $('.is-minimized').removeClass('is-minimized');
    });
    
    function updateStats() {
        var area = $('.stats-area').attr('data-area');
        var percentage = calculatePercentagePerField('check-' + area);
        $('.stats-counter').text(percentage)
        .removeClass('counter-js counter-css counter-framework')
        .addClass('counter-' + area);
        var degree = getDegree(percentage);
        $('.icon-arrow').css('transform', 'rotate(' + degree +'deg)');
    }

    function getDegree(percentage){
        return parseInt(198 * percentage / 100) + 319;
    }
    
    function calculatePercentagePerField(checkboxClass) {
        var checkboxes = $('.' + checkboxClass);
        var total = checkboxes.length;
        if (total === 0) {
            return 0;
        }
        var selected = 0;
        checkboxes.each(function() {
            if ($(this).prop('checked')) {
                selected++;
            }
        });

        return parseInt(selected * 100 / total);
    }
});