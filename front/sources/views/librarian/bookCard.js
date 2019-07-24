import { JetView } from 'webix-jet';
import booksModel from '../../models/books';
import FilesModel from '../../models/files';
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

		const addBookFile = {
			view: 'uploader',
			label: '<i class="fas fa-file-upload"></i> Upload text file',
			localId: 'bookFile',
			type: 'htmlbutton',
			width: 150,
			upload: 'http://localhost:3000/files/upload',
			on: {
				'onFileUpload': (file, response) => {
					if (response.status == "server") {
						file.book_id = this.bookId;
						FilesModel.addItem(file);
					}
				},
				'onFileUploadError': () => {
					webix.message('Uploading failed');
				}
			}
		};

		const bookCard = {
			localId: 'bookCardLibrarian',
			view: 'form',
			elements: [
				{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'book_title' },
				{ view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'author_name' },
				{ view: 'combo', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', options: [
					'', 'Fiction', 'Fantasy', 'Thriller', 'Horror', 'Mystery', 'Historical', 'Westerns', 'Family', 'Dark comedy'
				]},
				{ view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'country_of_publication' },
				{ view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishing_house' },
				{ view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'available_copies' },
				{ view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'number_of_pages' },
				{ view: 'text', label: 'Cover photo', labelWidth: 130, width: 310, labelAlign: 'right', name: 'cover_photo' }
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
					bookCover, 
					bookCard,
					{
						paddingY: 10,
						paddingX: 15,
						margin: 10,
						cols: [
							{}, saveBtn, {}
						]
					},
					addBookFile
				]
			}
		};
	}

	init() {
		this.form = this.$$('bookCardLibrarian');
	}

	showPopup(book) {
		this.isNew = book ? false : true;

		if(this.isNew) {
			this.$$('bookCover').hide();
		}
		else {
			this.book = book;
			this.bookId = book.id;

			this.form.setValues(book);
			this.$$('bookCover').setValues(book.cover_photo || dummyCover);			
		}		

		this.getRoot().show();	
	}

	saveForm() {
		const data = this.form.getValues();

		const successAction = () => {
			this.webix.message('Success');
			this.hideWindow();
		};
		
		if(this.form.validate()) {
			if(this.isNew) {
				addItem(booksModel, data, successAction);				
			}

			else {
				updateItem(booksModel, data, successAction);
			}
		}		
	}

	hideWindow() {
		this.form.clearValidation();
		this.form.clear();
		this.getRoot().hide();
	}
}