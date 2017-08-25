$(document).ready(function () {

    $(document).foundation();
    
		$('.tlt').textillate({
			in: {
				sequence: true,
		    effect: 'fadeInDown',
		    delayScale: 3,
		    delay: 50
	  	}
		});

		$('.tlt2').textillate({
			initialDelay: 1000,
			in: {
				shuffle: true,
		    effect: 'fadeInLeftBig',
		    delayScale: 3,
		    delay: 20
	  	}
		});

		$('.tlt3').textillate({
			initialDelay: 1000,			
			in: {
				reverse: true,
		    effect: 'fadeInLeftBig',
		    delayScale: 3,
		    delay: 30
	  	}
		});

		$('.tlt2').on('end.tlt', function () {
  		function typeEffect(element, speed) {
				var text = $(element).text();
				$(element).html('');
	
				var i = 0;
				var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
			}

			$( document ).ready(function() {
			  var speed = 5;
			  setTimeout(function(){
			    $('.about-desc1').css('display', 'inline-block');
			    typeEffect($('.about-desc1'), speed);
			    setTimeout(function(){
				    $('.about-desc2').css('display', 'inline-block');
				    typeEffect($('.about-desc2'), speed);
				    setTimeout(function(){
					    $('.about-desc3').css('display', 'inline-block');
					    typeEffect($('.about-desc3'), speed);
				  	}, 1000);
			    }, 1000);
			  }, 1000);
			});
		});
		

    $('a[data-target^="anchor"]').on('click', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('.wraper').animate({scrollTop: bl_top}, 2000);
        return false;
    });


    $('.about-right-btn').on('mouseenter', function() {
    	$(this).removeClass('hover');
    });
    $('a[href^="#contact"]').on('click', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('.wraper').animate({scrollTop: bl_top - (bl_top/2)}, 2000);
        $('.about-right-btn').addClass('hover');
        return false;
    });

    $('.wraper').scroll(function() {
      if ($(this).scrollTop() > $(this).height()) {
        $('.top').addClass('active');
      } else {
        $('.top').removeClass('active');
      }
    });
    $('.top').click(function() {
        $('.wraper').stop().animate({scrollTop:0}, 'slow', 'swing');
    });


    //TRANSLATOR
    var arrLang = new Array();
    arrLang['en'] = new Array();
    arrLang['ru'] = new Array();

    arrLang['en']['about'] = 'About';
    arrLang['en']['services'] = 'Services';
    arrLang['en']['portfolio'] = 'Portfolio';
    arrLang['en']['contact'] = 'Contact';
    arrLang['en']['name'] = 'Taras Sydor';
    arrLang['en']['developer'] = 'I am web developer';
    arrLang['en']['things'] = 'I make wonderful things';
    arrLang['en']['about-desc1'] = 'I have experience in the most popular front-end development areas. HTML5\CSS3 (SASS), responsive website development, and other skills which can be needed for creating the front-end part of the website.';
    arrLang['en']['about-desc2'] = 'I am a member of a group of highly experienced web-developing specialists. It gives me the possibility to delegate tasks and carry out your project faster if you are interested it.';
    arrLang['en']['about-desc3'] = "Also, I have to say the cost for my work is less than standard ones because you don't need to pay for office rent, workplace equipment, taxation and other costs which always exist in the company or organization. I working on my own, in my house, using my skills for doing your work, and doing it well.";
    arrLang['en']['front-end'] = "Frontend developer";
    arrLang['en']['specialist'] = "Specialist in the ";
    arrLang['en']['birthday'] = 'DATE OF BIRTHDAY: 03 July 1988';
    arrLang['en']['job'] = 'JOB: Freelancer';
    arrLang['en']['skype'] = 'Skype: art-artkin';
    arrLang['en']['email'] = 'EMAIL: ';
    arrLang['en']['hire'] = "Hire me";
    arrLang['en']['skills-title'] = 'Creative and professional';
    arrLang['en']['skills-desc'] = "I always prefer creativity in all my projects and try to print your mind on a web page.I like happy clients and that's only possible when they meet success. Each client comes with a different mind. My main focus is to provide the best out of me according to the demand of each client. I promise quick turnaround times, unlimited revisions, great customer service and 100% quality work.";
    arrLang['en']['services-header'] = "Services";
    arrLang['en']['services-title1'] = "Web development";
    arrLang['en']['services-title2'] = "Responsive design";
    arrLang['en']['services-title3'] = "Crossbrowser compatibility";
    arrLang['en']['portfolio-title'] = "Latest work";
    
    

    arrLang['ru']['about'] = 'Обо мне';
    arrLang['ru']['services'] = 'Сервисы';
    arrLang['ru']['portfolio'] = 'Портфолио';
    arrLang['ru']['contact'] = 'Контакты';
    arrLang['ru']['name'] = 'Тарас Сыдор';
    arrLang['ru']['developer'] = 'Я веб разработчик';
    arrLang['ru']['things'] = 'Я делаю замечательные вещи';
    arrLang['ru']['about-desc1'] = 'У меня есть опыт в самых популярных областях разработки. HTML5 \ CSS3 (SASS), отзывчивая разработка веб-сайта и другие навыки, которые могут понадобиться для создания фронтенд части веб-сайта.';
    arrLang['ru']['about-desc2'] = 'Я являюсь членом группы высоко квалифицированных специалистов по веб-разработке. Это дает мне возможность делегировать задания и выполнять ваш проект быстрее, если вам это интересно.';
    arrLang['ru']['about-desc3'] = 'Кроме того, я должен сказать, что стоимость моей работы меньше стандартных, потому что вам не нужно платить за аренду офиса, оборудование на рабочем месте, налогообложение и другие расходы, которые всегда существуют в компании или организации. Я работаю самостоятельно, в своем доме, используя свои навыки для выполнения вашей работы и делаю это хорошо.';
    arrLang['ru']['front-end'] = "Фронтенд разработчик";
    arrLang['ru']['specialist'] = "Специалист по ";
    arrLang['ru']['birthday'] = 'ДАТА РОЖДЕНИЯ: 03 Июля 1988';
    arrLang['ru']['job'] = 'РАБОТА: Фрилансер';
    arrLang['ru']['skype'] = 'СКАЙП: art-artkin';
    arrLang['ru']['email'] = 'ЕМЕЙЛ: ';
    arrLang['ru']['hire'] = 'Нанять меня';
    arrLang['ru']['skills-title'] = 'ТВОРЧЕСКИЙ И ПРОФЕССИОНАЛЬНЫЙ';
    arrLang['ru']['skills-desc'] = 'Я всегда предпочитаю творчество во всех своих проектах и стараюсь передать Ваши мысли на веб-странице. Мне нравятся счастливые клиенты, и это возможно только тогда, когда они встречают успех. Каждый клиент приходит с разными мыслями. Мой основной упор делается на то, чтобы обеспечить лучшее в соответствии с требованием каждого клиента. Я обещаю быстрое время отработки, неограниченные изменения, отличное обслуживание клиентов и 100% качественную работу.';
    arrLang['ru']['services-header'] = 'Сервисы';
    arrLang['ru']['services-title1'] = 'Веб разработка';
    arrLang['ru']['services-title2'] = 'Отзывчивый дизайн';
    arrLang['ru']['services-title3'] = 'Кроссбраузерная совместимость';
    arrLang['ru']['portfolio-title'] = 'Последние работы';
    


    $(document).ready(function () {
    	$('.translate').click(function() {
    		var lang = $(this).attr("id");

    		$('.lang').each(function() {
    			$(this).text(arrLang[lang][$(this).attr('key')]);
    		});
    	});
    });


		    // Fill polyfill
		if (!Array.prototype.fill) {
		  Object.defineProperty(Array.prototype, 'fill', {
		    value: function(value) {

		      // Steps 1-2.
		      if (this == null) {
		        throw new TypeError('this is null or not defined');
		      }

		      var O = Object(this);

		      // Steps 3-5.
		      var len = O.length >>> 0;

		      // Steps 6-7.
		      var start = arguments[1];
		      var relativeStart = start >> 0;

		      // Step 8.
		      var k = relativeStart < 0 ?
		        Math.max(len + relativeStart, 0) :
		        Math.min(relativeStart, len);

		      // Steps 9-10.
		      var end = arguments[2];
		      var relativeEnd = end === undefined ?
		        len : end >> 0;

		      // Step 11.
		      var final = relativeEnd < 0 ?
		        Math.max(len + relativeEnd, 0) :
		        Math.min(relativeEnd, len);

		      // Step 12.
		      while (k < final) {
		        O[k] = value;
		        k++;
		      }

		      // Step 13.
		      return O;
		    }
		  });
		}

		var startTime,
			isMovingHeading = false,
			finishedAnimating = false;

		var wordBank = [
		    "interactive",
		    "CSS3",
		    "HTML5",
		    "responsive",
		    "animated",
				"JavaScript",
		    "Bootstrap",
		    "Foundation"
		];
		var currentNum = 0,
			currentIteration = 0;
		var wordHighlight = document.querySelector(".word-highlight"),
		    word = document.querySelector(".word"),
		    maxNumIterations = 13,
		    minNumIterations = 10,
		    wordString = [],
		    letterBank = "abcdefghijklmnopqrstuvwxyz";

		function getIterations(initWord, finWord, iterationNum) {
			if(wordHighlight) {
			    var iterations = [],
			        correctLetters = [finWord.length].fill(false),
			        proportion = iterationNum / 2;
	    
		    for(var i = 0; i < iterationNum; i++) {
		    	var iteration = i > 0 ? iterations[i - 1]: initWord.split("");
		    	
		        iteration.length -= Math.round((iteration.length - finWord.length) / (iterationNum - i));
		        
		        for(var j = 0; j < iteration.length; j++) {
		            var changeMe = Math.random() <= 0.5 ? true : false;
		            
		            if(changeMe && proportion < i) {
		                    // Unscramble the second half of iterations
		                    iteration[j] = finWord[j];
		                    correctLetters[i] = true;
		            } else if((changeMe && proportion >= i)
		                   || (!correctLetters[i] && proportion < i)) {
		                    // Scramble the first half of iterations
		                    var randLetter = letterBank.charAt( Math.floor( Math.random() * letterBank.length ) );
		                    iteration[j] = randLetter;
		               
		            			}
		        }
		        
		        // Assure the last iteration is correct
		        if(i === iterationNum - 1) {
		            iteration = finWord.split("");
		        }
		        
		        iterations.push(iteration.slice(0));
		    }
	    	return iterations;
			}
		}



		var startTime,
			lastChangedTime,
			singleDuration = 60,
		    totalDuration = 4000,
		    wordIterations = [];



		function animateThings(currTime) {
			if(window.pageYOffset  != 0) {
				document.body.classList.add("scrolled");
			} else {
				document.body.classList.remove("scrolled");
			}

			if(wordHighlight) {
			    // Animate the text scrambling
			    if(!startTime)
			    	startTime = currTime;
			    
			    if(!lastChangedTime)
			    	lastChangedTime = currTime;
			    
			    var progress = currTime - startTime;
			    if(progress > totalDuration) {
			    	currentNum++;
			        if(currentNum >= wordBank.length) {
			            currentNum = 0;
			        }
					
			        var numIterations = Math.ceil(Math.random() * (maxNumIterations - minNumIterations)) + minNumIterations;
			        
			        wordIterations = getIterations(word.innerText, wordBank[currentNum], numIterations);
			        
			        currentIteration = 0;
			        
			    	startTime = currTime;
			    }
			    
			    var progress3 = currTime - lastChangedTime;
			    if(progress3 > singleDuration) {
			      if(typeof wordIterations[currentIteration] != "undefined") {
			        	word.innerText = wordIterations[currentIteration++].join("");
			            wordHighlight.style.width = word.offsetWidth + "px";
			        }
			        
			        lastChangedTime = currTime;
				}
				window.requestAnimationFrame(animateThings);
			}
		}
		window.requestAnimationFrame(animateThings);

});

$(window).on('load', function() {
  $('.preloader').delay(1000).fadeOut('slow');
});