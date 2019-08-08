import { JetView } from "webix-jet";
import booksModel from '../../models/books';

export default class bookTops extends JetView {
	config() {

		return {
			cols: [
				{
					view: 'list',
					width: 250,
					select: true,
					data: [
						{
							id: 'showOldestBooks',
							value: 'Oldest books'
						},
						{
							id: 'showNewestBooks',
							value: 'Newest books'
						},
						{
							id: 'showMostPagesBooks',
							value: 'Most pages books'
						},
						{
							id: 'showBooksWithLongNames',
							value: 'Books with longest names'
						},
					],
					on: {
						onItemClick: id => this[id]()	
					}
				},
				{
					id: 'booksTop',
					view: 'datatable',
					columns: [
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
							id: 'country_of_publication',
							sort: 'text',
							width: 80,
							css: 'center',
							header: 'Country'
						},
						{
							id: 'year_of_publication',
							sort: 'date',
							width: 80,
							css: 'center',
							format: webix.Date.dateToStr("%Y"),
							header: 'Year'
						},
						{
							id: 'number_of_pages',
							width: 60
						}
					],
					hidden: true
				}
			]
		};
	}

	init() {
		this.grid = $$('booksTop');
		booksModel.getDataFromServer().then((dbData) => {
			let booksArr = dbData.json();
			booksArr = booksArr.map((el) => {
				el.year_of_publication = new Date(el.year_of_publication);
				return el;
			});
			this.booksArr = booksArr;
		});
	}

	showOldestBooks() {
		let data = [...this.booksArr];
		data.sort((a, b) => {
			return a.year_of_publication - b.year_of_publication;
		});
		this.showRsults(data);
	}

	showNewestBooks() {
		let data = [...this.booksArr];
		data.sort((a, b) => {
			return b.year_of_publication - a.year_of_publication;
		});
		this.showRsults(data);
	}

	showMostPagesBooks() {
		let data = [...this.booksArr];
		data.sort((a, b) => {
			return b.number_of_pages - a.number_of_pages;
		});
		this.showRsults(data);
	}

	showBooksWithLongNames() {
		let data = [...this.booksArr];
		data.sort((a, b) => {
			return b.book_title.length - a.book_title.length;
		});
		this.showRsults(data);
	}

	showRsults(data) {
		data = data.slice(0, 10);
		this.grid.clearAll();
		this.grid.parse(data);
		this.grid.show();
	}
}