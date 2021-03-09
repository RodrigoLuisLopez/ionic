export interface Caso {
	id?: number;
	nombre?: string;
	descripcion?: string;
	fecha?: string;
	c_profesional_id?: number;
	t_usuario_id?: number;
	c_estado_id?: number;
	created_at?: any;
	updated_at?: any;
	deleted_at?: any;
}

export interface Casos {
	current_page: number;
	data: Caso[];
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