import type { User } from "../../domain/user";
import type { UserRepository } from "../../domain/user.repository";

type UserLoginCommand = {
	email: string;
	password: string;
};

export async function userLogin(
	userRepository: UserRepository,
): Promise<(command: UserLoginCommand) => Promise<User>> {
	return async ({ email, password }: UserLoginCommand) => {
		return userRepository.login(email, password);
	};
}
