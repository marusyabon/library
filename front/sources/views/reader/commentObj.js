
import {formatDate} from '../../scripts'; 
import commentsModel from '../../models/comments';

export class Comment {
	saveComment (commentInput, parentCommentId) {
		const commentText = commentInput.getValue();
		const comment = {
			'user_id': this.userId,
			'book_id': this.bookId,
			'content': commentText,
			'commentDate': new Date(),
			'comment_id': parentCommentId || null
		};

		commentsModel.addItem(comment).then((response) => {
			if (response) {
				this.clearComments();
				this.getComments();
				this.commentLayout.refresh();
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

	getComments(bookId, commentLayout) {
		commentsModel.getItems(bookId).then((dbData) => {
			const commentsArr = dbData.json();

			let i = 0;
			
			while (i < commentsArr.length) {
				const comment = commentsArr[i];
				if (!comment.comment_id) {
					const commentItem = this.composeComment(comment);
					commentLayout.addView(commentItem);
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

	toggleComments (commentLayout, IsCommentsGot, toggleCommentsBtn) {
		const isVisible = commentLayout.isVisible();
		if (isVisible) {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-down"></i>');
			commentLayout.hide();
		}
		else {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-up"></i>');
			if (!IsCommentsGot) {
				this.getComments();
			}
			commentLayout.show();
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

	clearComments (commentLayout) {
		const comments = commentLayout.getChildViews();

		if (comments) {
			const commentsCopy = [...comments];

			commentsCopy.forEach((comment) => {
				commentLayout.removeView(comment);
			});
		}
	}
};

export default new Comment();