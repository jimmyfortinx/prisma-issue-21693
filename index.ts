import { Currency, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.billingSettings.create({ data: { currency: Currency.CAD } });

  console.log(
    "ALL CAD SETTINGS",
    await prisma.billingSettings.findMany({ where: { currency: Currency.CAD } })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
