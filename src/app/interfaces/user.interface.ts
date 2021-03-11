export interface User {
	id?: number;
	name?: string;
	email?: string;
	email_verified_at?: any;
	created_at?: string;
	updated_at?: string;
}


export interface UserCreate {
	name?: string;
	email?: string;
    password?: any;
    password_confirmation?: any;
}

export interface UserLogin {
	email?: string;
    password?: any;
}