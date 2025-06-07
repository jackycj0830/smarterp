
# RefactorFlow

RefactorFlow is a Next.js application designed to help you manage and synchronize your project documentation, specifically `README.md`, `spec.md`, and `todolist.md` files. It provides a clean, three-column interface for simultaneous editing and leverages AI to suggest updates, ensuring consistency across your documents.

## Core Features

- **File Display and Edit**: View and edit `README.md`, `spec.md`, and `todolist.md` in a side-by-side layout using editable text areas.
- **File Saving**: Save your changes directly to the respective files with dedicated save buttons for each editor.
- **AI-Powered Update Suggestions**: An integrated AI tool analyzes the content of all three documents and provides suggestions to keep them synchronized and up-to-date.
- **Modern UI**: Styled with a professional and clean design, featuring a vibrant blue primary color, light gray background, and soft teal accents. Typography uses 'Space Grotesk' for headlines/UI, 'Inter' for body text, and 'Source Code Pro' for code/file content.

## How to Use

1.  **Launch the Application**: Run the Next.js development server.
2.  **Edit Files**: The application will load `README.md`, `spec.md`, and `todolist.md` from your project root. If these files don't exist, they will be created with default placeholder content. You can edit their content directly in the provided text areas.
3.  **Save Changes**: Click the "Save [filename]" button below each editor to persist your changes to the file system.
4.  **Get AI Suggestions**: Click the "Get AI Suggestions" button. The AI will analyze the current content of all three files and provide suggestions in a dialog box to help you maintain consistency.

## Tech Stack

- Next.js (App Router, Server Components, Server Actions)
- TypeScript
- Tailwind CSS
- ShadCN UI (for UI components)
- Genkit (for AI integration)
- Lucide React (for icons)

## Getting Started (Development)

This application is scaffolded by Firebase Studio.

To get started with development:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    This will start the Next.js app, typically on `http://localhost:9002`.

3.  **Genkit Development (Optional)**:
    If you need to work with the Genkit AI flows:
    ```bash
    npm run genkit:dev
    ```
    Or for watching changes:
    ```bash
    npm run genkit:watch
    ```

This `README.md` file itself, along with `spec.md` and `todolist.md` in the project root, can be edited using RefactorFlow!
