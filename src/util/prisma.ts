import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function UploadImage(
	title: string,
	description: string,
	base64_image: string,
) {
	return prisma.code
		.create({
			data: {
				title: title,
				description: description,
				code: base64_image,
			},
		})
		.catch((error) => {
			console.error(error);
		});
}
