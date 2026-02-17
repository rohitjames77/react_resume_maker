# React Resume Maker  
An interactive React Resume maker where users can create, edit, and preview their professional resumes in real-time. 
## Live Demo


https://github.com/user-attachments/assets/37e52722-1312-438b-a4e1-a9c60804302c



**Live Site:** [https://curious-cendol-7209e9.netlify.app/]

---

##  Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [My Journey: Challenges & Solutions](#my-journey-challenges--solutions)
- [Ideas for v2.0 of this project](#Ideas-for-v2.0-of-this-project)
  

---

## About The Project

This was an introductory project to React development as part of The Odin Project's curriculum. I wanted to create something practical that would help me understand core React concepts like components, state, and props - and that I (and others) could actually use. And let users input their personal info, education, and work experience, then display it all in a clean, professional format. 

---

##  Features

- **Personal Information Section**
  - Users can add their name, email, and phone number
  - I added real-time input validation to catch mistakes early
  
- **Education Section**
  - Support for multiple education entries (because some of us went to more than one school!)
  - Tracks school name, degree/title, and study dates
  
- **Work Experience Section**
  - Add as many jobs as you've had
  - Captures company name, position, responsibilities, and employment dates
  
- **Edit & Submit Functionality**
  - This was tricky! Users can toggle between editing and viewing their CV
  - All data stays intact when switching modes 
  
---

##  Technologies Used

- **React.js** - UI component library
- **Vite** - Build tool and development server
- **CSS3** - Styling and layout
- **JavaScript (ES6+)** - Core programming language
- **Git & GitHub** - Version control
- **[Netlify/Vercel/Cloudflare Pages]** - Deployment platform
- **Material-UI**  -Icon library

---

##  Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/rohitjames77/react_resume_maker.git
   ```

2. Navigate to the project directory
   ```bash
   cd react_resume_maker
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---


##  My Journey: Challenges & Solutions

### The Wins 

**State Management**
- Before this project, state and props were just abstract concepts. Now I actually understand them!
- I learned how to lift state up when multiple components need the same data
- Passing functions down through props to update parent state became second nature

**Clean Component Structure**
- Breaking everything into logical components felt natural by the end
- I learned that smaller, focused components are way easier to debug

### The Struggles

**"Why Is Everything Logging Twice?!"**
- Early on, I was freaking out because my console.logs were appearing double
- Turns out React.StrictMode does this on purpose in development to help catch bugs
- **Lesson learned:** It's a feature, not a bug! And it won't happen in production
- 
- **State mutation**
- Sometimes data would just... vanish when I least expected it
- Turned out I was mutating the state directly instead of creating new copies
- **Solution:** Started using the spread operator.

**The State Management (Lifting up the state)**
- This one took me a while. Switching between edit and view modes was not working
- The problem: My states were not managed as per React conventions. I was not following the **"lift up state"** convention
- **Solution:** I learned to use controlled components and keep all important data in the parent state

---

## Ideas for v2.0 of this project:

- [ ] **PDF Export** - Let users download their CV as a PDF (this is a big one!)
- [ ] **Multiple Templates** - Give users different design options to choose from
- [ ] **Local Storage** - Save progress so users don't lose their work if they close the tab
- [ ] **Better Validation** - Add helpful error messages when users miss required fields
- [ ] **Drag and Drop** - Let users reorder their experience and education entries
- [ ] **Dark Mode** - Because who doesn't love dark mode?


## 👤 About Me

**Rohit James**

I'm learning web development and documenting my journey. This was my first React project, and I'm proud of how far I've come!

- GitHub: [@rohitjames77](https://github.com/rohitjames77)
- LinkedIn:(www.linkedin.com/in/rohitjames77)

---
