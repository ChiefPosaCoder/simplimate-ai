# With Docker

This examples shows how to use Docker with Next.js based on the [deployment documentation](https://nextjs.org/docs/deployment#docker-image). Additionally, it contains instructions for deploying to Google Cloud Run. However, you can use any container-based deployment host.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-docker nextjs-docker
# or
yarn create next-app --example with-docker nextjs-docker
```

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

## Git Commit to Vercel Standard Process

First run build locally and make the changes you need.

1. In Github create a new issue. In this example Issue 8

2. In local repo type in CLI from main branch (`git checkout main` and `git pull origin main`, be sure latest code is pulled), `git checkout -b feature/issues-8` (issue number should correspond to the issue number you raised.)
   This creates a new branch.

Output should be something like:
Switched to a new branch 'feature/issues-8'

3.1 If new files are added. Type in: `git add .`

3.2 If files are changed. Type in: `git commit -am "commit comment, e.g. fixed issue 8"`

Output:
[feature/issues-8 923cbc4] fix issue 8
1 file changed, 1 insertion(+), 1 deletion(-)

3.3 If you adde new file. Type in: `git add .`, `git commit -am "commit comment, e.g. fixed issue 8"`  

4. Type in: `git push origin feature/issues-8.`

Output example:
Enumerating objects: 81, done.
Counting objects: 100% (76/76), done.
Delta compression using up to 8 threads
Compressing objects: 100% (55/55), done.
Writing objects: 100% (55/55), 10.05 KiB | 5.02 MiB/s, done.
Total 55 (delta 41), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (41/41), completed with 13 local objects.
remote:
remote: Create a pull request for 'feature/issues-8' on GitHub by visiting:
remote: https://github.com/posa20/with-docker/pull/new/feature/issues-8
remote:
To github.com:posa20/with-docker.git \* [new branch] feature/issues-8 -> feature/issues-8

5. Go to GitHub - `Pull Requests > Files Changed` and review the changes.
   If you're happy, you can go to `Commits` and merge the changes to main branch.
6. Vercel will automatically detect changes and will deploy to produciton.

## Running Locally

First, run the development server:

**If running yarn for the first time type "yarn" from the CLI else errors will occur.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
