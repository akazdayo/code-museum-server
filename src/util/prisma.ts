import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function UploadSource(
	title: string,
	description: string,
	source_code: string,
) {
	return prisma.code
		.create({
			data: {
				title: title,
				description: description,
				code: source_code,
			},
		})
		.catch((error) => {
			console.error(error);
		});
}

export function GetRankings() {
	return prisma.code
		.findMany({
			orderBy: {
				likes: "desc",
			},
		})
		.catch((error) => {
			console.error(error);
		});
}

export function GetRandoms() {
	const images = prisma.code.findMany().catch((error) => {
		console.error(error);
		return [];
	});
	return images.then((data) => data.sort(() => Math.random() - 0.5));
}
