import { JetView } from 'webix-jet';
import likesModel from '../../models/likes';
import {toggleElement} from '../../scripts'; 
import {dummyCover} from '../../consts'; 

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
			localId: 'bookCard',			
			view: 'form',
			elements: [
				{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'book_title', readonly: true },
				{ view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'author_name', readonly: true },
				{ view: 'text', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', readonly: true },
				{ view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'country_of_publication', readonly: true },
				{ view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishing_house', readonly: true },
				{ view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'available_copies', readonly: true },
				{ view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'number_of_pages', readonly: true }
			]			
		};

		const orderBook = {
			view: 'button',
			localId: 'orderBook',
			type: 'htmlbutton',
			label: '<i class="far fa-hand-paper"></i> Order',
			width: 100,
			click: () => { 
				this.orderBook();
			}
		};

		const downloadBook = {
			view: 'button',
			localId: 'downloadBook',
			type: 'icon',
			icon: 'fas fa-download',
			width: 60,
			click: () => { 
				this.orderBook();
			}
		};

		const likeBook = {
			view: 'button',
			localId: 'likeButton',
			type: 'htmlbutton',
			css: 'like_button',
			label: '<i class="far fa-heart"></i>',
			width: 25,
			click: () => { 
				this.likeBook();
			}
		};

		return {
			view: 'popup',
			position:'center',
			body:{
				rows: [
					bookCover, bookCard, 
					{
						paddingY: 10,
						paddingX: 15,
						margin: 10,
						cols: [
							orderBook, downloadBook, {}, likeBook
						]
					}
				] 
			}
		};
	}

	init() {
		this.likeButton = this.$$('likeButton');
	}
	
	showPopup(book) {
		this.book = book;
		this.bookId = book.id;
		this.userId = this.getParam("id", true);

		this.$$('bookCard').setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || dummyCover);

		toggleElement(book.book_file, this.$$('downloadBook'));
		toggleElement(book.available_copies, this.$$('orderBook'));
		this.toggleLike(book.user_id == this.userId);

		this.getRoot().show();
	}

	orderBook() {
		
	}

	likeBook() {
		const userId = this.userId;
		const bookId = this.bookId;

		if(this.book.user_id == this.userId) {
			likesModel.removeLike(userId, bookId).then((response) => {
				const status = response.json().serverStatus;
				if(status == 2) {
					this.unsetLike();
				}
			});
		}
		else{
			likesModel.addLike(userId, bookId).then((response) => {
				const status = response.json().serverStatus;
				if(status == 2) {
					this.setLike();
				}
			});
		}		
	}	

	toggleLike(condition) {
		if(condition) {
			this.setLike();
		}
		else {
			this.unsetLike();
		}
	}

	setLike() {
		this.likeButtone.define('label', '<i class="fas fa-heart"></i>');
		this.likeButton.refresh();
	}

	unsetLike() {
		this.likeButton.define('label', '<i class="far fa-heart"></i>');
		this.likeButton.refresh();
	}
}