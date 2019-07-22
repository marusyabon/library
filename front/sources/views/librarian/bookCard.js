import { JetView } from 'webix-jet';
import BooksModel from '../../models/books';
import { dummyCover } from '../../consts';
import {addItem, updateItem} from '../../scripts'; 

export default class BookCard extends JetView {
	config() {

		const bookCover = {
			localId: 'bookCover',
			width: 120,
			height: 180,
			css: 'book_cover',
			template: (url) => {
				return `<div style="background-image: url(${url})" ></div>`;
			}
		};

		const bookCard = {
			localId: 'lb_bookCard',
			view: 'form',
			elements: [
				{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'book_title' },
				{ view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'author_name' },
				{ view: 'text', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres' },
				{ view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'country_of_publication' },
				{ view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishing_house' },
				{ view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'available_copies' },
				{ view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'number_of_pages' }
			]
		};

		const saveBtn = {
			view: 'button',
			type: 'form',
			label: 'Save',
			width: 80,
			click: () => {
				this.saveForm();
			}
		};

		return {
			view: 'popup',
			position: 'center',
			body: {
				rows: [
					bookCover, bookCard,
					{
						paddingY: 10,
						paddingX: 15,
						margin: 10,
						cols: [
							{}, saveBtn, {}
						]
					}
				]
			}
		};
	}

	init() {
		this.form = this.$$('lb_bookCard');
	}

	showPopup(book) {
		this.book = book;
		this.bookId = book.id;

		this.form.setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || dummyCover);

		this.getRoot().show();	
	}

	saveForm() {
		const data = this.form.getValues();

		const successAction = (message) => {
			this.webix.message(message);
			this.hideWindow();
		};
		
		if(this.form.validate()) {
			if(this.isNew) {
				addItem(BooksModel, data, successAction('Saved'));				
			}

			else {
				updateItem(BooksModel, data, successAction('Updated'));
			}
		}		
	}

	hideWindow() {
		this.form.clearValidation();
		this.form.clear();
		this.getRoot().hide();
	}
}