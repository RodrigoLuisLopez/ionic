export interface Tipo {
	id?: number;
	nombre?: string;
	descripcion?: string;
	created_at?: string;
	updated_at?: string;
	deleted_at?: any;
}

export interface Tipos {
	current_page: number;
	data: Tipo[];
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