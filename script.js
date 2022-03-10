const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'cert.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	const nameCaps = nameInput.value.charAt(0).toUpperCase() + nameInput.value.slice(1);
	ctx.textBaseline = 'middle'; 
	ctx.textAlign = 'center'; 
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '80px namaFontBaru'
	ctx.fillStyle = '#ae2328'
	ctx.fillText(nameCaps, 960, 290)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})
