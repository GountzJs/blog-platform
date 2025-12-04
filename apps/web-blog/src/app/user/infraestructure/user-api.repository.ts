import type { User } from "../domain/user";
import type { UserRepository } from "../domain/user.repository";

export const userApiImplRepository: UserRepository = {
	getUser: async (): Promise<User> => {
		const response = await fetch("/api/user", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.error);
		}
		return data as User;
	},
	login: async (email: string, password: string): Promise<User> => {
		const response = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify({ user: { email, password } }),
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.error);
		}
		return data as User;
	},
	register: async (
		email: string,
		username: string,
		password: string,
	): Promise<User> => {
		const response = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify({ user: { email, username, password } }),
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.error);
		}
		return data as User;
	},
	updateOne: async (user: User): Promise<User> => {
		const response = await fetch("/api/user", {
			method: "PUT",
			body: JSON.stringify({ user }),
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.error);
		}
		return data as User;
	},
};
