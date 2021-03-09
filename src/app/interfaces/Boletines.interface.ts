export interface Boletin {
	id?: number;
	c_profesional_id?: number;
	titulo?: string;
	subtitulo?: string;
	contenido?: string;
	autor?: string;
	created_at?: any;
	updated_at?: any;
	deleted_at?: any;
}

export interface Boletins {
	current_page: number;
	data: Boletin[];
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