
$(document).ready(function(){
	var computer = [];
	var user = [];


	function compNumbers() {
		for(var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random()*4);
			computer.push(num);
		}
	}

	compNumbers();
	console.log(computer);

	$('#red').click(function(){
		if(user.length === 4) {
			return;
		}

		user.push(0);
		var self = this;
		$(this).addClass('opacity');
		setTimeout(function(){
			$(self).removeClass('opacity')
		}, 500);
		console.log(user);
		winLose();
	})

	$('#yellow').click(function(){
		if(user.length === 4) {
			return;
		}

		user.push(1);
		var self = this;
		$(this).addClass('opacity');
		setTimeout(function(){
			$(self).removeClass('opacity')
		}, 500);
		console.log(user);
		winLose();
	})

	$('#blue').click(function(){
		if(user.length === 4) {
			return;
		}
		user.push(2);
		var self = this;
		$(this).addClass('opacity');
		setTimeout(function(){
			$(self).removeClass('opacity')
		}, 500);
		console.log(user);
		winLose();
	})

	$('#green').click(function(){;
		if(user.length === 4) {
			return;
		}

		user.push(3);
		var self = this;
		$(this).addClass('opacity');
		setTimeout(function(){
			$(self).removeClass('opacity')
		}, 500);
		console.log(user);
		winLose();
	})

	function winLose() {
			if(computer.toString === user.toString && user.length === 4) {
				console.log('win');
				$('#win').removeClass('disable');
				setTimeout(function(){
					$('#win').addClass('disable')
				}, 2000)
			}
		};
});