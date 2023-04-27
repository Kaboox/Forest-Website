const nameInput = document.querySelector(".name");
const mailInput = document.querySelector(".email");
const mailError = document.querySelector('.email-error')
const textarea = document.querySelector(".message");
const submitBtn = document.querySelector(".submit");
let errCount = 0;

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const checkInput = (input) => {
	const box = input.closest("div");
	const error = box.querySelector(".form__error");
	if (input.value == "") {
		error.style.display = "inline";
        errCount++;
	} else {
		error.style.display = "none";
	}

	if (!(mailInput.value.match(regex))) {
		errCount++;
		mailError.style.display = 'inline'
	} else {
		mailError.style.display = 'none'
	}
};

submitBtn.addEventListener("click", (e) => {
	errCount = 0;
	e.preventDefault()
	checkInput(nameInput);
	checkInput(mailInput);
	checkInput(textarea);

	if (errCount == 0) {
		alert('Wysłano formularz')
		nameInput.value = '';
		mailInput.value = '';
		textarea.value = '';
	}

    

});
