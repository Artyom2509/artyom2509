
	// Timer
	function makeTimer() {
		let endTime = new Date( "december 1, 2020 12:00:00 PDT" );
		let endTime2 = ( Date.parse( endTime ) ) / 1000;

		let now = new Date();
		let now2 = ( Date.parse( now ) / 1000 );

		let timeLeft = endTime2 - now2;

		let days = Math.floor( timeLeft / 86400 );
		let hours = Math.floor( ( timeLeft - ( days * 86400 ) ) / 3600 );
		let minutes = Math.floor( ( timeLeft - ( days * 86400 ) - ( hours * 3600 ) ) / 60 );
		let seconds = Math.floor( ( timeLeft - ( days * 86400 ) - ( hours * 3600 ) - ( minutes * 60 ) ) );

		if ( hours < "10" ) {
			hours = "0" + hours;
		}
		if ( minutes < "10" ) {
			minutes = "0" + minutes;
		}
		if ( seconds < "10" ) {
			seconds = "0" + seconds;
		}

		$( "#days" ).html( days );
		$( "#hours" ).html( hours );
		$( "#minutes" ).html( minutes );
		$( "#seconds" ).html( seconds );
	}

	setInterval( function () {
		makeTimer();
	}, 1000 );
