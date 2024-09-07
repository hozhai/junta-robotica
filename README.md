> EN/US version. Para ver la versiòn del README en español, haga click aquì. (todo)

---

# Primer Festival de Robotica

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Zhai90/festival-robotica/issues)

## About

Santiago's first ever robotics festival @ Lo Barnechea will be here in April of 2025! This will be a series of meetings where like-minded individuals and groups can share, learn, and have fun in a safe and supportive environment!

This website is developed as part of the FesRob project by one of the members of the team, [Hongmeng Zhai](https://github.com/Zhai90/) (that's me!), who has a burning passion for computer science (also me!).

Check out the team behind the project here. (team website todo)

This website was built using [NextJS](https://nextjs.org) and [Figma](https://figma.com), along with [shadcn\ui](https://ui.shadcn.com), [framer-motion](https://www.framer.com/motion/) and [Aceternity UI](https://ui.aceternity.com/).

## TODO
[] Components
- [] Navigation bar
  - [] Modify the current navigation bar
  - [] Sign in, etc. all links
  - [] Update TODO for navbar

[] Home page
- [] Landing/Hero
  - [X] Signal for the user to scroll down
  - [] Revamp landing hero section so as for it to not feel too cramped. Vercel home page is good inspiration, same with [Cursor's](https://cursor.sh).
- [] About (festival) (!)
- [] Timeline (festival)
- [] About (team)
- [] How to participate

[] Languages file
- [] en_us (!)
- [] es_cl (!)
- [] de_de
- [] fr_fr

[] Accounts
- [] Login page
- [] Allow users (teachers/schools) to sign in and register their team
  - [] User login
  - [] School login
- [] Setup probably MongoDB maybe I cba to do some fancy sql db
- [] Some GUI to visualize the data for the team behind the event


## Running your own fork:

If you'd like to run your own fork, please clone the repository and set up your environment like so: 

```sh
$ yarn
$ yarn dev
```

Make sure you have [Yarn](https://yarnpkg.com/) installed on your machine before attempting to use the command.

then open up `http://localhost:3000/` in the browser of your choice.

You will need to add your own login providers' client ID and secret, as those are not supplied for you (for obvious reasons), so take a look at [Next Auth's](https://next-auth.js.org/) documentation for more information.

---

Feel free to open up issues or pull requests if you happen to find and fix unintended behavior, this includes bugs, glitches, unexpected behavior, typos, etc.

---

MIT License
