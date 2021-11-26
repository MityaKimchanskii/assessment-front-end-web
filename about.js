
let form = document.querySelector('form#contact');

let logoImage = document.querySelector('#logo')


function handleSubmit(evt) {
	evt.preventDefault();
	window.alert("The form has been submitted successfully!")
}


form.addEventListener('submit', handleSubmit);


logoImage.addEventListener('mouseover', () => {
	window.alert('Nice job!')
})


	