# 🌌 AI Paste - Smart Notes Saver

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)

> A futuristic note-taking application that combines persistent storage with the power of Google Gemini AI to summarize your thoughts instantly.

---

## 🚀 Live Demo
**[CLICK HERE TO VIEW LIVE DEMO](#)** *(Replace this with your Vercel link after deployment)*

---


## ✨ Features

*   **📝 CRUD Operations:** Create, Read, Update, and Delete notes seamlessly.
*   **🤖 AI Integration:** Integrated **Google Gemini AI** to summarize long notes into concise bullet points with one click.
*   **💾 Local Persistence:** Notes are saved to `localStorage` via Redux, ensuring data persists even after refreshing.
*   **🎨 Sci-Fi UI:** A stunning "Space/Glassmorphism" design using Tailwind CSS, backdrop filters, and the **Orbitron** font.
*   **🔍 Smart Search:** Filter through your archives instantly by title.
*   **🔗 Share Functionality:** Uses the **Web Share API** to share notes natively or copies the link to the clipboard.
*   **🔔 Interactive Feedback:** Beautiful toast notifications using `react-hot-toast`.

---

## 🛠️ Tech Stack

*   **Frontend Library:** React (Vite)
*   **State Management:** Redux Toolkit
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM v6
*   **AI Model:** Google Generative AI (Gemini 1.5 Flash)
*   **Icons & Fonts:** FontAwesome / Google Fonts (Orbitron)
*   **Deployment:** Vercel

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-paste.git
cd ai-paste
2. Install Dependencies
code
Bash
download
content_copy
expand_less
npm install
3. Setup Environment Variables

Create a .env file in the root directory and add your Google Gemini API Key:

code
Env
download
content_copy
expand_less
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here

(You can get a free key from Google AI Studio)

4. Run the Development Server
code
Bash
download
content_copy
expand_less
npm run dev

Open your browser and navigate to http://localhost:5173.

📂 Project Structure
code
Bash
download
content_copy
expand_less
src/
├── components/
│   ├── Home.jsx       # Create/Edit Paste Interface
│   ├── Navbar.jsx     # Navigation Bar
│   ├── Paste.jsx      # Archives/List View
│   └── ViewPaste.jsx  # Detailed View with AI
├── redux/
│   ├── pasteSlice.js  # Redux Logic & LocalStorage
│   └── store.js       # Redux Store Configuration
├── App.jsx            # Layout & Routing
└── main.jsx           # Entry Point
🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeature).

Open a Pull Request.

📄 License

This project is open-source and available under the MIT License.

🌟 Show your support

Give a ⭐️ if you like this project!
***

### 💡 Final Tip for Screenshots:
Since your app looks cool, take 2 screenshots (one of the Home screen with the earth background, one of the AI split screen).
1.  Upload them to your GitHub repo (maybe make a folder called `screenshots`).
2.  Replace the `https://via.placeholder.com...` links in the Markdown above with the actual relative path to your images (e.g., `screenshots/home.png`).
