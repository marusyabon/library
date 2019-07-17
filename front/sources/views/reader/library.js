import { JetView } from 'webix-jet';
import BooksModel from '../../models/books';
import BookCard from './bookCard';

export default class Library extends JetView {
	config() {
		const header = {
			type: 'header',
			template: '<i class="fas fa-book"></i> List of books',
			css: 'center page_header'
		};

		const dtable = {
			view: 'datatable',
			id: 'dt_library',
			select: true,
			columns: [
				{
					id: 'id',
					hidden: true,					
				},
				{
					id: 'book_title',
					sort: 'text',
					fillspace: 1,
					header: 'Title'
				},
				{
					id: 'author_name',
					sort: 'text',
					fillspace: 1,
					header: 'Author'
				},
				{
					id: 'genres',
					sort: 'text',
					width: 80,
					css: 'center',
					header: 'Genres'
				},
				{
					id: 'available_copies',
					width: 80,
					css: 'center',
					header: 'Available'
				},
				{
					id: 'viewCol',
					header: 'View',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-eye"></i>'
				}
			],
			onClick: {
				'fa-eye': (e, id) => {
					this.showBookCard(id);
				},
			}
		};

		return {
			rows: [header, dtable]
		};
	}

	init() {
		BooksModel.getDataFromServer().then((dbData) => {
			const booksArr = dbData.json();
			$$('dt_library').parse(booksArr);
			this.booksArr = booksArr;
		});

		this._bookCard = this.ui(BookCard);
	}

	showBookCard(id) {
		const book = this.booksArr.find(el => el.id == id);
		this._bookCard.showPopup(book);
	}
}