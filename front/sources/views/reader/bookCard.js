import { JetView } from 'webix-jet';
import likesModel from '../../models/likes';
import {toggleElement, formatDate} from '../../scripts'; 
import {DUMMYCOVER, SUCCESS} from '../../consts'; 
import filesModel from '../../models/files';
import commentsModel from '../../models/comments';

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
			localId: 'bookCardReader',			
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

		const availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			template: "#name#" +
					"<span class='list_button'><i class = 'fas fa-download'></i></span>",
			on: {
				onItemClick: (id) => {
					const bookName = this.$$('availableTextFiles').getItem(id).name;

					filesModel.downloadItem(id).then((res) => {
						webix.html.download(res, bookName);
					});
				}
			}
		};

		const availableAudioFiles = {
			view: "activeList",
			localId: "availableAudioFiles",
			type:{
				height:100
			},
			template: "#name#<audio controls src='http://localhost:3000/audio/#id#'></audio>"
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
			css: 'like_button',
			type: 'icon', 
			icon: 'far fa-heart',
			width: 45,
			click: () => { 
				this.likeBook();
			}
		};

		const toggleCommentsBtn = {
			view: 'button',
			localId: 'commentButton',
			type: 'htmlbutton',
			label: 'Comments <i class="fas fa-angle-down">',
			width: 120,
			click: () => { 
				this.toggleComments();
			}
		};

		const addComment = {
			margin: 5,
			paddingY: 10,
			paddingX: 17,
			rows: [
				{
					view:'textarea',
					localId: 'userComment',
					label: 'Comment',
					labelPosition: 'top',
					height: 80
				},
				{
					cols: [
						{},
						{
							view: 'button',
							localId: 'saveCommentBtn',
							type: 'form',
							label: 'Send',
							width: 80,
							click: () => {
								this.saveComment();
							}
						}
					]
				}
			]
		};

		const comments = {
			rows: [
				{
					paddingY: 10,
					cols: [
						{}, toggleCommentsBtn, {}
					]
				},
				{
					localId: 'commentLayout',
					hidden: true,
					rows: []
				}
			]
		};

		return {
			view: 'popup',
			position:'center',
			maxHeight: 550,
			body:{
				view: 'scrollview',
				body: {
					rows: [
						bookCover, bookCard, availableTextFiles, availableAudioFiles,
						{
							paddingY: 10,
							paddingX: 15,
							margin: 10,
							cols: [
								orderBook, downloadBook, {}, likeBook
							]
						},
						addComment,
						comments
					] 
				}
			}
		};
	}
	
	showPopup(book) {
		this.likeButton = this.$$('likeButton');
		this.form = this.$$('bookCardReader');
		this.filesList = this.$$('availableTextFiles');
		this.toggleCommentsBtn = this.$$('commentButton');
		this.commentLayout = this.$$('commentLayout');
		this.book = book;
		this.bookId = book.id;
		this.userId = this.getParam("id", true);
		
		this.clearForm();
		this.form.setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || DUMMYCOVER);
		this.likeButton.define('badge', book.count_likes || '0');
		this.getFiles();
		this.getComments();		
		
		toggleElement(book.book_file, this.$$('downloadBook'));
		toggleElement(book.available_copies, this.$$('orderBook'));
		this.toggleLike(book.user_id == this.userId);

		this.getRoot().show();
	}

	getFiles() {
		filesModel.getItems(this.bookId).then((dbData) => {
			const filesArr = dbData.json();

			const textFiles = [];
			const audioFiles = [];

			filesArr.forEach((file) => {
				switch(file.data_type) {
					case 'text': 
						textFiles.push(file);
						break;
					case 'audio': 
						audioFiles.push(file);
						break;
				}
			});
			this.$$('availableTextFiles').parse(textFiles);
			this.$$('availableAudioFiles').parse(audioFiles);
		});
	}

	orderBook() {
		
	}

	likeBook() {
		if(this.book.user_id == this.userId) {
			likesModel.removeLike(this.userId, this.bookId).then((response) => {
				const status = response.json().serverStatus;
				if(status == SUCCESS) {
					this.unsetLike();
				}
			});
		}
		else{
			likesModel.addLike(this.userId, this.bookId).then((response) => {
				const status = response.json().serverStatus;
				if(status == SUCCESS) {
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
		this.likeButton.define('icon', 'fas fa-heart');
		this.likeButton.refresh();
	}

	unsetLike() {
		this.likeButton.define('icon', 'far fa-heart');
		this.likeButton.refresh();
	}

	saveComment() {
		const commentInput = this.$$('userComment');
		const commentText = commentInput.getValue();
		const comment = {
			'user_id': this.userId,
			'book_id': this.bookId,
			'content': commentText,
			'commentDate': new Date()
		};

		commentsModel.addItem(comment).then((response) => {
			if(response) {
				this.clearForm();
				this.getComments();
				this.commentLayout.refresh();
				this.commentLayout.show();
			}
		});
	}

	addChildComments(arr, item) {
		let i = 0;
		while(i < arr.length) {
			const el = arr[i];
			if (el.comment_id === item.id) {
				const commentItem = this.composeComment(el);
				$$(`comment_${item.id}`).addView(commentItem);
				arr.splice(i, 1);

				if(arr.length > 0) {
					this.addChildComments(arr, el);
				}
			} else {
				i++;
			}
		}
	}

	getComments() {
		this.commentsGot = true;
		commentsModel.getItems(this.bookId).then((dbData) => {
			const commentsArr = dbData.json();

			let i = 0;
			while(i < commentsArr.length) {
				const comment = commentsArr[i];
				if (!comment.comment_id) {
					const commentItem = this.composeComment(comment);
					this.commentLayout.addView(commentItem);
					commentsArr.splice(i, 1);

					if(commentsArr.length > 0) {
						this.addChildComments(commentsArr, comment);
					}
				} else {
					i++;
				}
			}
		});
	}

	toggleComments() {
		const isVisible = this.commentLayout.isVisible();
		if(isVisible) {
			this.toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-down"></i>');
			this.commentLayout.hide();
		}
		else {
			this.toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-up"></i>');
			if(!this.commentsGot) {
				this.getComments();
			}
			this.commentLayout.show();
		}
	}

	composeComment(comment) {
		const commentDate = formatDate(comment.comment_date);
		const commentAuthor = `${comment.user_name} ${comment.user_surname}`;

		return {
			id: `comment_${comment.id}`,
			css: 'comment_item',
			padding: {left: 10},
			rows: [
				{
					view: "template",
					autoheight: true,
					borderless: true,
					css: 'template',
					template:  `<div class="comment_info">\
									<div class = "comment_author">${commentAuthor}</div>\
									<div class = "comment_date">${commentDate}</div>\
								</div>
								<div>${comment.content}</div>`,
					onClick: {
						'template': () => this.replyToComment(comment.id)
					}
				}
			]
			
		};
	}

	replyToComment(commentId) {
		
		console.log(commentId);
	}

	clearForm (){
		this.form.clear();
		this.filesList.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
		this.$$('userComment').setValue('');

		const comments = this.commentLayout.getChildViews();

		if(comments) {
			const commentsCopy = [...comments];

			commentsCopy.forEach((comment) => {
				this.commentLayout.removeView(comment);
			});			
		}
	}
}