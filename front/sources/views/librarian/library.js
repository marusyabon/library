import {JetView} from "webix-jet";
import Library from '../common/library';
import BookCard from '../reader/bookCard';

export default class libLibrary extends JetView {
	config() {
		const l_config = {
			role: 'librarian'
		};

		return {
			rows: [
				new Library(this.app, l_config, BookCard)
			]
		};
	}
}