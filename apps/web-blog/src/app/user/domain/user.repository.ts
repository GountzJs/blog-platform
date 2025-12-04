import type { User } from "./user";

export interface UserRepository {
	getUser(): Promise<User>;
	login(email: string, password: string): Promise<User>;
	register(email: string, username: string, password: string): Promise<User>;
	updateOne(user: User): Promise<User>;
}
