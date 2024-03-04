const plusIcon = 'assets/icon-plus.svg';
const minusIcon = 'assets/icon-minus.svg';

Array.from(document.getElementsByClassName('accordion')).forEach(element => {
	element.children[0].addEventListener('click', function () {
		const isOpen =
			this.parentElement.getAttribute('data-accordion__isopen') == 'true';
		const questionId = this.id.split('_')[1];
		const answerId = 'answer_' + questionId;

		document.getElementById(answerId).style.display = isOpen ? 'none' : 'block';
		this.children[1].style.content = `url(${isOpen ? plusIcon : minusIcon})`;
		this.parentElement.setAttribute(
			'data-accordion__isopen',
			isOpen ? 'false' : 'true'
		);
	});
});
