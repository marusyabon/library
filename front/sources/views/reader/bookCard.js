import { JetView } from 'webix-jet';
import LikesModel from '../../models/likes';

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
	
	showPopup(book) {
		this.bookId = book.id;
		this.userId = this.getParam("id", true);

		const dummyCover = 'https://i.pinimg.com/originals/ad/fd/58/adfd5873be3841f0660e6aaa00cde18e.jpg';
		this.$$('bookCard').setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || dummyCover);

		if(book.book_file) {
			this.$$('downloadBook').show();
		}
		else {
			this.$$('downloadBook').hide();
		}
		
		if(book.available_copies) {
			this.$$('orderBook').show();
		}
		else {
			this.$$('orderBook').hide();
		}

		if(book.user_id == this.userId) {
			this.$$('likeButton').define('label', '<i class="fas fa-heart"></i>');
			this.$$('likeButton').refresh();
		}
		else {
			this.$$('likeButton').define('label', '<i class="far fa-heart"></i>');
			this.$$('likeButton').refresh();
		}

		this.getRoot().show();
	}

	orderBook() {
		
	}

	likeBook() {
		const userId = this.userId;
		const bookId = this.bookId;
		
		LikesModel.addLike(userId, bookId).then((response) => {
			const status = response.json().serverStatus;
			if(status == 2) {
				this.$$('likeButton').define('label', '<i class="fas fa-heart"></i>');
				this.$$('likeButton').refresh();
			}
		});
	}
}