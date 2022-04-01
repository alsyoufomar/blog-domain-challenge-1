const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed () {

  // Add your code here
  const createdUsers = await prisma.user.create({
    data: {
      username: 'Yorika!',
      email: "123@123.youri",
      password: "oioioioi"
    }
  });

  console.log(`${createdUsers.count} users created`, createdUsers);


  const createdProfile = await prisma.profile.create({
    data: {
      dob: "10.20.2019",
      picture: "http://example.com",
      bio: "loremnmsdnksndssdkjskdnskdnsndkns",
      user: {
        connect: {
          id: createdUsers.id
        }
      }
    }
  })


  const createdPost = await prisma.post.create({
    data: {
      title: "Kebab Shop 2",
      content: "How to make garlic sauce, step by step!",
      isPublished: true,
      picture: "http://kebab.com",
      user: {
        connect: {
          id: createdUsers.id
        }
      }
    }
  })

  const createComment = await prisma.comment.create({
    data: {
      content: "Too much content to create",
      user: {
        connect: {
          id: createdUsers.id
        }
      },
      post: {
        connect: {
          id: createdPost.id
        }
      }
    }
  })



  // Don't edit any of the code below this line
  process.exit(0);
}

seed()
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  })