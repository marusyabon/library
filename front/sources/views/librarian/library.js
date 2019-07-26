import {JetView} from "webix-jet";
import Library from '../common/library';
import BookCard from './bookCard';

export default class libLibrary extends JetView {
	config() {
		

		const libraryConfig = {
			role: 'librarian'
		};

		const addBookBtn = {
			view: 'button',
			value: 'Add book',
			type: 'form',
			width: 100,
			click: () => {
				library.addBook();
			}
		};
		const library = new Library(this.app, libraryConfig, BookCard);
		return {
			rows: [
				library,
				{
					cols: [{},addBookBtn,{}]
				}				
			]
		};
	}
}