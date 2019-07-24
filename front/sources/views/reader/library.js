import {JetView} from "webix-jet";
import Library from '../common/library';
import BookCard from './bookCard';

export default class readerLibrary extends JetView {
	config() {
		const l_config = {
			role: 'reader'
		};

		return {
			rows: [
				new Library(this.app, l_config, BookCard)
			]
		};
	}
}