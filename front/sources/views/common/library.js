import { JetView } from 'webix-jet';
import booksModel from '../../models/books';

export default class Library extends JetView {
	constructor(app, libraryConfig, bookCard) {
		super(app);
		this.libraryConfig = libraryConfig;
		this.bookCard = bookCard;
	}

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
				},
				{
					id: 'editCol',
					header: 'Edit',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-edit"></i>'
				},
				{
					id: 'removeCol',
					header: 'Remove',
					css: 'center',
					width: 70,
					template: '<i class="fas fa-trash"></i>'
				}
			],
			onClick: {
				'fa-eye': (e, id) => {
					this.showBookCard(id);
				},
				'fa-edit': (e, id) => {
					this.showBookCard(id);
				},
				'fa-trash': (e, id) => {
					this.removeBook(id);
				}
			}
		};

		return {
			rows: [header, dtable]
		};
	}

	init() {
		this.grid = $$('dt_library');

		switch (this.libraryConfig.role) {
			case 'reader': {
				this.grid.getColumnConfig('editCol').hidden = true;
				this.grid.getColumnConfig('removeCol').hidden = true;
			}
				break;
			case 'librarian': {
				this.grid.getColumnConfig('viewCol').hidden = true;
			}
				break;
		}
		this.grid.refreshColumns();

		const user_id = this.getParam("id", true);
		booksModel.getDataFromServer(user_id).then((dbData) => {
			const booksArr = dbData.json();

			this.grid.parse(booksArr);
			this.booksArr = booksArr;
		});

		this._bookCard = this.ui(this.bookCard);
	}

	showBookCard(id) {
		const book = this.booksArr.find(el => el.id == id);
		this._bookCard.showPopup(book);
	}

	removeBook(id) {
		booksModel.removeItem(id);
		return this.grid.remove(id);
	}

	addBook() {
		this._bookCard.showPopup();
	}
}