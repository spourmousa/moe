
# Get Started for local development

- Fork the repo
    
    - Login to github.com with your account and navigate to `https://github.com/moe-1/moe`
    - Click on the `fork` button on the repo page. This will fork the repo in to your account and navigate to your fork repo page.
- Clone the fork

    - Open the terminal (Command + Space and then type `terminal`)
    - `cd` to your home directory : `cd ~`
    - Create a working directory for your apps if you don't have one " `mkdir apps`"
    - `cd` to your apps directory `cd apps`
    - Copy the repo url for your fork (e.g. https://github.com/<your github account>/moe)
    - Clone your fork of the repo into your local: `git clone <forked repo url>`
    - `cd` to the cloned repo: `cd moe`

- Create a local branch
    - `git branch update-docs` to create a new branch
    - `git checkout update-docs` to checkout the newly created branch.
    - Alternatively you could do `git checkout -b update-docs` to do both the above steps at once.
- Make changes and commit locally
    - Add files or update files
    - `git add .` to stage all your changes to commit
    - `git commit -m "put some description about your changes here.."` to make a local commit
    - `git log` to see the commit history and confirm that the new commit is there.
- Push changes to your fork
    - `git push origin update-docs`
- Make a pull request to the upstream `moe-1/moe`
    - Navigate to your github fork
    - 