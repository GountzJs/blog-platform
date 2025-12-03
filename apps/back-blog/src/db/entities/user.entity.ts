import { Column, Entity } from "typeorm";
import { BaseCustomEntity } from "./base-custom-entity";

@Entity({ name: "user" })
export class UserEntity extends BaseCustomEntity {
	@Column({ nullable: false, unique: true, type: "varchar", length: 255 })
	email: string;

	@Column({ nullable: false, type: "varchar" })
	password: string;
}
