# Portfolio for Michael Desormeaux

👋 Hey there, this is the github repository for my personal portfolio. This README will have a more personal tone as this will serve as a living document with all my problems, challenges, victories, and final thoughts.

If you have any questions they are probably covered below!

## Technologies Used

### Core Technologies

This portfolio is part of a large self learning effort to build my own personal toolset

The key elements here are: `Nextjs, Tailwind, and Vercel`

At its simplest form, this is just another Nextjs Application written with Tailwind on the CSS side, and then deployed on Vercel. You cannot understand my excitement to get time to redo my portfolio and get adjusted to a personal toolset to built projects in after learning so much in my first year in the industry. 

This is my first real project using **Nextjs** which is the key item I aim to learn, but it also serves as a refresher and sharpener on the knowledge I have been unable to use with **Typescript**. 

Additionally, this serves as my first serious commitment to deploying projects with **Vercel**. So far there are 2 main URLs tied to my deployment! [Prod](https://mdesormeaux.dev/) and [Staging](https://staging.mdesormeaux.dev) are both live and functioning overall, and that alone has been quite a teaching experience.

### Secondary / Develeper Experience

This list will likely be the largest, as much of them will be things I am testing or deciding how I feel about them in my personal project stack.

Some of the important tech used on the developer side is: `Storybook and Wallaby`.

**Storybook** is a technology I am somewhat familiar with due to exposure through work, but I feel I will gain a MUCH deeper understanding with it during this project, and will be looking into if I can add it comfortably to the website.

**Wallaby** is a technology recommended by a college I heavily respect and have found makes testing much smoother. It allows me to test my components faster and as I write the tests! This is magical on it's own, but it is easily twice as fast as running tests manually.

## Challenges

### Initial Complications

#### #1 Manual Jest Install

So when initially setting this project up, i messed up the command and failed to install **Jest** properly with the flag, and ended up having to intall it manually which forced me - in the best way -  to look into the documentation and resolve why it wasn't working for me. This ended up just being me needing to adjust the target directories to search for tests.

#### #2 Wallaby Acting Strange

Due to lacking familiarity with this technology I initially struggled to get it working and have it function as expected. This was instantly resolved after getting **Jest** working properly in issue #1. Luckily this is noted in the [pull request](https://github.com/M-Desormeaux/next-portfolio/pull/5) for both future notation and a blog I will make involving this, seeing as I found limited information on using Wallaby with Nextjs.

## Closing Thoughts

So far, I am very happy with this technology stack, tho setting up Storybook has yet to happen, and will likely be its own challenge.