export interface Usuario {
	id?: number;
	c_tipo_id?: number;
	nombre?: string;
	edad?: number;
	localidad?: string;
	created_at?: any;
	updated_at?: any;
	deleted_at?: any;
}

export interface Usuarios {
	current_page: number;
	data: Usuario[];
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