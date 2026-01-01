


## 📚 B-Lib — Book Library App

**B-Lib** is a responsive, interactive digital library built with React and Tailwind CSS. It allows users to search for books using the Open Library API, view detailed information, manage favorites, and simulate downloads. Designed for learning and showcasing frontend development skills.

---

### 🛠️ Technologies Used

- **React** (with Vite)
- **Tailwind CSS** (utility-first styling)
- **React Router** (page navigation)
- **Open Library API** (book data)
- **LocalStorage** (favorites and downloads persistence)
- **HTML & CSS** (semantic structure and styling)
- **JavaScript** (state and interactivity)

---

### 📦 Features

#### 🔍 Search & Browse
- Search books by title, author, or keyword
- Filter by categories: Productivity, Business, Fiction, etc.
- Responsive grid of book cards with cover, title, author, and description

#### 📖 Book Details
- Click any book to view:
  - Description
  - Publication date
  - ISBN
  - Publisher
  - Page count
  - Subjects/genres

#### ⭐ Favorites & 📥 Downloads
- Toggle favorites (★/☆) and view them in the Favorites tab
- Mock download button increments count and shows toast
- Downloads tab shows all downloaded books

#### 👤 Profile & ⚙️ Settings
- Profile page with avatar and favorite list
- Settings page includes:
  - Dark mode toggle
  - Grid density toggle (comfortable/compact)
  - Reset data button (clears LocalStorage)

#### 🧠 Accessibility
- Keyboard navigable
- ARIA labels for search, buttons, and toggles
- Focus rings and semantic HTML

---

### 📁 Project Structure

```
book-library/
├── src/ 
│   ├── components/ 
│   │   ├── SideBar.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx 
│   │   ├── CategoriesFilters.jsx 
│   │   ├── BookCard.jsx
│   │   ├── BookGrid.jsx
│   │   ├── Toast.jsx 
│   ├── pages/    
│   │   ├── Library.jsx
│   │   ├── Favorites.jsx
│   │   ├── Downloads.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   ├── BookDetails.jsx
│   ├── utils/    
│   │   └── filters.js
│   ├── hooks/  
│   │   └── useLocalStorage.js
│   ├── data/    
│   │   └── books.js
│   ├── assets/ 
│   │   └── react.svg
│   ├── App.jsx 
│   ├── App.css 
│   ├── main.jsx 
│   └── index.css  
├── public/     
│   ├── vite.svg   
├── node_modules/     
├── index.html     
├── package.json     
├── package-lock.json     
├── vite.config.js     
├── tailwindcss.config.js     
├── eslint.config.js       
├── .gitignore       
└── README.md   

 
```

---

### 🔧 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/b-lib.git
   cd b-lib
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app locally**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

### 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```
---

### 📚 API Reference

#### 🔎 Search books
```bash
https://openlibrary.org/search.json?q=harry+potter
```

#### 📘 Book details by ISBN
```bash
https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data
```

#### 🖼️ Book cover images
```bash
https://covers.openlibrary.org/b/id/{cover_id}-M.jpg
```

---

### 🧪 Stretch Goals

- ✅ User authentication
- ✅ Reading list with progress tracking
- ✅ Book reviews and ratings
- ✅ Browse by genre
- ✅ Dark mode toggle

---

### 🙌 Acknowledgments

- [Open Library](https://openlibrary.org/developers/api)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

---

### 📬 Contact

Built by **Ben** over 14 days 
Feel free to connect or share feedback!

