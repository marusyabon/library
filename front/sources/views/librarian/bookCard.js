import { JetView } from 'webix-jet';
import booksModel from '../../models/books';
import { dummyCover } from '../../consts';
import { toggleElement, addItem, updateItem } from '../../scripts'; 
import filesModel from '../../models/files';

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
			localId: 'bookCardLibrarian',
			view: 'form',
			borderless: true,
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

		const addTextFile = {
			view: 'uploader',
			label: '<i class="fas fa-file-upload"></i> Upload text file',
			localId: 'bookFile',
			type: 'htmlbutton',
			autosend: false,
			width: 150,
			formData: () => {
				return {
					user_id: this.userId,
					book_id: this.bookId
				};
			},
			accept: 'text/plain, application/pdf, .doc, .docx',
			upload: 'http://localhost:3000/files/upload/text',
			link: 'filesList'
		};

		const filesList = {
			view: 'list',
			type: 'uploader',
			id: 'filesList',
			autoheight:true, 
			borderless:true
		};

		const addAudioFile = {
			view: 'uploader',
			label: '<i class="fas fa-music"></i> Upload audio',
			localId: 'bookFile',
			type: 'htmlbutton',
			// autosend: false,
			width: 150,
			accept: '.mp3',
			upload: 'http://localhost:3000/files/upload/audio',
			link: 'audioList',
			on: {
				'onAfterFileAdd': (file) => {
					console.log('file')
					// if (response.status == "server") {
					// 	file.book_id = this.bookId;
					// 	FilesModel.addItem(file);
					// }
				},
				'onFileUploadError': () => {
					webix.message('Uploading failed');
				}
			}
		};

		const audioList = {
			view: 'list',
			type: 'uploader',
			id: 'audioList',
			autoheight:true, 
			borderless:true
		};

		const availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			template: "#name#" +
					"<span class='list_button'><i class = 'fas fa-times'></i></span>",
		};

		const availableAudioFiles = {
			view: "activeList",
			localId: "availableAudioFiles",
			template: "#name#" +
					"<span class='list_button download'><i class='fas fa-file-download'></i></span>",
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
			maxHeight: 550,
			body: {
				view: 'scrollview',
				body: {
					rows: [
						bookCover, 
						bookCard,
						availableTextFiles,
						availableAudioFiles,
						filesList,
						audioList,
						{ 
							localId: 'addingFilesButtons',
							margin: 10,
							cols: [ {}, addTextFile, addAudioFile, {} ] 
						},
						{height: 1},
						{
							paddingY: 10,
							paddingX: 15,
							margin: 10,
							borderless: true,
							cols: [{}, saveBtn, {}]
						}
					]
				}				
			}
		};
	}

	init() {
		this.form = this.$$('bookCardLibrarian');
	}

	showPopup(book) {
		filesModel.getDataFromServer().then((dbData) => {
			const filesArr = dbData.json();
			this.$$('availableTextFiles').parse(filesArr);
		});

		this.clearForm();
		this.isNew = book ? false : true;
		this.book = book ? book : '';
		this.bookId = book ? book.id : '';
		this.userId = book ? book.user_id : '';

		toggleElement(!this.isNew, this.$$('bookCover'));
		toggleElement(!this.isNew, this.$$('addingFilesButtons'));

		if(!this.isNew) {
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

			const fileUploader = this.$$('bookFile');

			fileUploader.send((response) => {
				if(response){
					this.webix.message(response.message);
				}
			});
		}		
	}

	hideWindow() {
		this.clearForm();
		this.getRoot().hide();
	}

	clearForm (){
		this.form.clearValidation();
		this.form.clear();
	}
}