
import {formatDate} from '../../scripts'; 
import commentsModel from '../../models/comments';

export default class Comment {
	constructor(userId, bookId, commentLayout) {
		this.userId = userId;
		this.bookId = bookId;
		this.commentLayout = commentLayout;
	}

	saveComment (commentInput, parentCommentId) {
		const commentText = commentInput.getValue();
		const comment = {
			'user_id': this.userId,
			'book_id': this.bookId,
			'content': commentText,
			'commentDate': new Date(),
			'comment_id': parentCommentId || 0
		};

		commentsModel.addItem(comment).then((response) => {
			if (response) {
				this.clearComments();
				if(!parentCommentId) {
					commentInput.setValue('');
				}
				this.getComments();
				this.commentLayout.show();
			}
		});
	}

	addChildComments (arr, item) {
		let i = 0;
		while (i < arr.length) {
			const el = arr[i];
			if (el.comment_id === item.id) {
				const commentItem = this.composeComment(el);
				$$(`comment_${item.id}`).addView(commentItem);
				arr.splice(i, 1);

				if (arr.length > 0) {
					this.addChildComments(arr, el);
				}
			} else {
				i++;
			}
		}
	}

	getComments() {
		commentsModel.getItems(this.bookId).then((dbData) => {
			const commentsArr = dbData.json();

			let i = 0;
			
			while (i < commentsArr.length) {
				const comment = commentsArr[i];
				if (!comment.comment_id) {
					const commentItem = this.composeComment(comment);
					this.commentLayout.addView(commentItem);
					commentsArr.splice(i, 1);

					if (commentsArr.length > 0) {
						this.addChildComments(commentsArr, comment);
					}
				} else {
					i++;
				}
			}
		});
	}

	toggleComments (isCommentsGot, toggleCommentsBtn) {
		const isVisible = this.commentLayout.isVisible();
		if (isVisible) {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-down"></i>');
			this.commentLayout.hide();
		}
		else {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-up"></i>');
			if (!isCommentsGot) {
				this.getComments();
			}
			this.commentLayout.show();
		}
	}

	composeComment (comment) {
		const commentDate = formatDate(comment.comment_date);
		const commentAuthor = `${comment.user_name} ${comment.user_surname}`;

		return {
			id: `comment_${comment.id}`,
			css: 'comment_item',
			padding: { left: 10 },
			rows: [
				{
					view: "template",
					autoheight: true,
					borderless: true,
					css: 'template',
					template: `<div class="comment_info">\
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

	replyToComment (commentId) {
		const replyToCommentLayout = {
			padding: 10,
			rows: [
				{
					view: 'textarea',
					id: 'replyUserComment',
					height: 60
				},
				{
					cols: [
						{},
						{
							view: 'button',
							localId: 'saveCommentBtn',
							type: 'form',
							label: 'Send',
							width: 70,
							height: 30,
							click: () => {
								this.saveComment($$('replyUserComment'), commentId);
							}
						}
					]
				}
			]
		};

		if (!$$('replyUserComment')) {
			$$(`comment_${commentId}`).addView(replyToCommentLayout);
		}
	}

	clearComments () {
		const comments = this.commentLayout.getChildViews();
		if (comments) {
			const commentsCopy = [...comments];

			commentsCopy.forEach((comment) => {
				this.commentLayout.removeView(comment);
			});
		}
	}
}