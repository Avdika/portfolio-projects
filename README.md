# Portfolio Projects

This repository contains several projects, each in its own folder. Some projects have multiple implementations using different technologies.

## Projects

1. **Rock Paper Scissors**
   - **Plain JS**: [`rock-paper-scissors-extended/plain-js`](./rock-paper-scissors-extended/plain-js)
   - **React.js**: [`rock-paper-scissors-extended/react`](./rock-paper-scissors-extended/react)

(More projects and implementations will be added over time.)

## Cloning or Downloading Specific Projects

If you are interested in cloning or downloading a specific project, you can use the following methods:

### Method 1: Using Sparse Checkout

Sparse checkout allows you to clone only specific folders from a repository. Here’s how to do it:

1. **Clone the Repository**:

   - Clone the repository with the `--no-checkout` option:

     ```sh
     git clone --no-checkout https://github.com/Avdika/portfolio-projects.git
     cd portfolio-projects
     ```

2. **Enable Sparse Checkout**:

   - Enable sparse checkout:

     ```sh
     git config core.sparseCheckout true
     ```

3. **Specify the Folder to Checkout**:

   - Create a `.git/info/sparse-checkout` file and add the paths of the folders you want to checkout.
     For example, to checkout only the `rock-paper-scissors-extended/plain-js` folder:

     ```sh
     echo "rock-paper-scissors-extended/plain-js/" >> .git/info/sparse-checkout
     ```

4. **Update the Checkout**:

   - Checkout the specific folder:

     ```sh
     git checkout main
     ```

### Method 2: Using GitHub Web Interface

You can navigate to the specific folder in the GitHub web interface and download the folder as a ZIP file using a third-party service:

1. **Navigate to the Folder**:

   - Go to the GitHub repository in your web browser.
   - Navigate to the specific folder you want to download.

2. **Download Folder**:
   - Use a service like [DownGit](https://minhaskamal.github.io/DownGit/) to generate a download link for the specific folder.

### Example for Rock Paper Scissors (Plain JS)

If you want to clone only the Plain JS version of the Rock Paper Scissors project:

1. **Clone the Repository**:

   - Clone the repository with the `--no-checkout` option:

     ```sh
     git clone --no-checkout https://github.com/Avdika/portfolio-projects.git
     cd portfolio-projects
     ```

2. **Enable Sparse Checkout**:

   - Enable sparse checkout:

     ```sh
     git config core.sparseCheckout true
     ```

3. **Specify the Folder to Checkout**:

   - Add the path of the `plain-js` folder to the `.git/info/sparse-checkout` file:

     ```sh
     echo "rock-paper-scissors-extended/plain-js/" >> .git/info/sparse-checkout
     ```

4. **Update the Checkout**:

   - Checkout the specific folder:

     ```sh
     git checkout main
     ```

By following these instructions, you can easily clone or download specific projects from this repository.
