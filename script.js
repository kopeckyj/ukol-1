function f() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		console.log (this.responseText)
	}
	xhttp.open('GET','https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_std.cgi?ico=27074358')
	xhttp.send()
}
