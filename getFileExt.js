//14. Write a JavaScript exercise to get the extension of a filename.

var filename = "sampleFile.doc";

function getFileExt(file) {

	return filename.split('.').pop();

}

console.log(getFileExt(filename));

