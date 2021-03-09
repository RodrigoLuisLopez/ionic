export interface Estudiante {
	id?: number;
	c_clinica_id?: number;
	c_profesional_id?: number;
	nombre?: string;
	telefono?: string;
	correo?: string;
	localidad?: string;
	created_at?: any;
	updated_at?: any;
	deleted_at?: any;
}

export interface Estudiantes {
	current_page: number;
	data: Estudiante[];
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