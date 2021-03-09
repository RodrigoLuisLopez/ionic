export interface Estado {
	id?: number;
	nombre?: string;
	descripcion?: string;
	created_at?: any;
	updated_at?: any;
	deleted_at?: any;
}


export interface Estados {
	current_page: number;
	data: Estado[];
	first_page_url?: string;
	from?: number;
	last_page?: number;
	last_page_url?: string;
	links?: string;
	next_page_url?: any;
	path?: string;
	per_page?: number;
	prev_page_url?: any;
	to: number;
	total: number;
}