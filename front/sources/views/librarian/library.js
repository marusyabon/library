import {JetView} from "webix-jet";
import Library from '../common/library';
import BookCard from './bookCard';

export default class libLibrary extends JetView {
	config() {
		const l_config = {
			role: 'librarian'
		};

		const addBookBtn = {
			view: 'button',
			value: 'Add book',
			type: 'form',
			width: 100,
			click: () => {
				this.addBook();
			}
		};

		return {
			rows: [
				new Library(this.app, l_config, BookCard),
				{
					cols: [{},addBookBtn,{}]
				}				
			]
		};
	}

	init() {
		this._bookCard = this.ui(BookCard);
	}

	addBook() {
		this._bookCard.showPopup();
	}
}