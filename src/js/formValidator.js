const nameInput = document.querySelector(".name");
const mailInput = document.querySelector(".email");
const textarea = document.querySelector(".message");
const submitBtn = document.querySelector(".submit");
let errCount = 0;

const checkInput = (input) => {
	const box = input.closest("div");
	const error = box.querySelector(".form__error");
	if (input.value == "") {
		error.style.display = "inline";
        errCount++;
	} else {
		error.style.display = "none";
        errCount = 0;
	}
};

submitBtn.addEventListener("click", (e) => {
	checkInput(nameInput);
	checkInput(mailInput);
	checkInput(textarea);

    if (errCount != 0) {

        e.preventDefault();
    }

});
