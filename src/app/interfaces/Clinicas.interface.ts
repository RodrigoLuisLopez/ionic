export interface Clinica {
	id?: number;
	nombre?: string;
	direccion?: string;
	telefono?: string;
	correo?: string;
	created_at?: any;
	updated_at?: any;
	deleted_at?: any;
}


export interface Clinicas {
	current_page: number;
	data: Clinica[];
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