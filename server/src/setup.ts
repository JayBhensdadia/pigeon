
import { PrismaClient } from '@prisma/client';
import { hashIt } from './utils/hash';

const prisma = new PrismaClient();

async function main() {
    console.log('seeding the database......');


    const userdata = [
        { firstname: 'Tony', lastname: 'Stark', email: 'tonystark@example.com', password: 'tonystark' },
        { firstname: 'Peter', lastname: 'Parker', email: 'peterparker@example.com', password: 'peterparker' },
        { firstname: 'Steve', lastname: 'Rogers', email: 'steverogers@example.com', password: 'steverogers' },
        { firstname: 'Natasha', lastname: 'Romanoff', email: 'natasharomanoff@example.com', password: 'natasharomanoff' },
    ];


    const hashedData = await Promise.all(userdata.map(async (user) => {
        const { firstname, lastname, email, password } = user;
        const hashedPassword = await hashIt(password);
        return { firstname, lastname, email, password: hashedPassword };
    }));


    await prisma.user.createMany({
        data: hashedData
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });