function openNav() {
	    document.getElementById("popup").style.visibility = "visible";
		}
		function closeNav() {
			document.getElementById("popup").style.visibility = "hidden";
		}

		$('.order__count').click(function () {
			var select = '.select' + $(this).attr('data-num');
			$(select).css('visibility','visible');
		});

		$('.select1 ul li').click(function () {
			var text = $(this).text();
			$('.num1').text(text);
			$('.select1').css('visibility','hidden');
		});

		$('.select2 ul li').click(function () {
			var text = $(this).text();
			$('.num2').text(text);
			$('.select2').css('visibility','hidden');
		});

		$('.select3 ul li').click(function () {
			var text = $(this).text();
			$('.num3').text(text);
			$('.select3').css('visibility','hidden');
		});

		$('.select4 ul li').click(function () {
			var text = $(this).text();
			$('.num4').text(text);
			$('.select4').css('visibility','hidden');
		});

    $('.select').jScrollPane();