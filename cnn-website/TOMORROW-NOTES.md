# C&N ENTERPRISE Website - Tomorrow's Notes

## 🚗 Project Overview
**Business**: C&N ENTERPRISE - Automotive Electrical Shop  
**Specialty**: Alternators, Starter Motors, Wiring Diagnostics  
**Goal**: Informational website with WhatsApp-first contact  
**Brand Color**: Bright Yellow  

## 📁 Project Location
```
C:\Users\ricky\OneDrive\Desktop\test-project
```

## 🔧 How to Start Tomorrow

### 1. Open Cursor
- Launch Cursor application
- Go to `File → Open Folder`
- Navigate to: `C:\Users\ricky\OneDrive\Desktop\test-project`
- Click "Select Folder"

### 2. Open Terminal in Cursor
- Press `Ctrl + `` (backtick) OR
- Go to `Terminal → New Terminal`

### 3. Start Your Website
```bash
npm run dev
```
- Your website will open at: `http://localhost:3000`

## 📋 What We Built Today

### ✅ Completed:
- Created `CLAUDE.md` with project instructions
- Set up Next.js 15 project with TypeScript
- Configured Tailwind CSS v4
- Planned website structure and components

### 🚧 Next Steps (Tomorrow's Tasks):
1. **Create content structure** (`src/content/` folder)
2. **Build WhatsApp utility** (`src/lib/whatsapp.ts`)
3. **Add floating WhatsApp component** (`FloatingWhatsApp`)
4. **Replace homepage** with C&N ENTERPRISE branding
5. **Create services pages** (alternator, starter motor, wiring)
6. **Add contact page** with WhatsApp integration

## 🎯 Key Features to Build

### Contact Methods (No Forms, Direct Links):
- **WhatsApp**: `0168029559` (pre-filled messages)
- **Phone Call**: Direct `tel:` links
- **Directions**: Google Maps integration
- **No email forms** - everything goes to WhatsApp/call

### Pages to Create:
- `/` - Home with hero and CTAs
- `/services` - Service overview
- `/services/alternator-repair` - Detailed service page
- `/services/starter-repair` - Detailed service page
- `/services/wiring-diagnostics` - Detailed service page
- `/about` - Company info
- `/contact` - Contact options
- `/reviews` - Customer testimonials

## 🎨 Design Guidelines

### Brand Colors:
- **Primary**: Bright Yellow (accent color)
- **Background**: Dark/Charcoal theme
- **Style**: Sleek, modern, automotive-tech aesthetic

### Components to Build:
- `Header` with navigation
- `Hero` section with strong CTAs
- `ServiceCard` for service listings
- `FloatingWhatsApp` (sticky contact)
- `StickyCTA` (bottom action bar)

## 🔑 Important Commands

### Development:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
```

### Package Management:
```bash
npm install package-name    # Install new package
npm uninstall package-name  # Remove package
npm update                  # Update packages
```

## 📱 WhatsApp Integration Details

### Phone Numbers:
- **Display**: `0168029559`
- **International**: `+60168029559` (for wa.me links)
- **Environment Variable**: `NEXT_PUBLIC_WHATSAPP_NUMBER`

### WhatsApp URL Format:
```
https://wa.me/0168029559?text=Hello! I need help with my alternator.
```

## 🚫 What NOT to Add

### Never Include:
- ❌ User login/signup
- ❌ Payment systems
- ❌ Shopping cart
- ❌ Database (use file-based content)
- ❌ Email forms (only WhatsApp/call)

## 📚 Useful Resources

### Next.js Documentation:
- [Next.js 15 Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### Tailwind CSS:
- [Tailwind v4 Docs](https://tailwindcss.com/docs)
- [Color Palette Generator](https://uicolors.app)

### WhatsApp Business:
- [WhatsApp Business API](https://business.whatsapp.com/)
- [WhatsApp Link Generator](https://wa.me/)

## 🎯 Tomorrow's First Task

1. **Open the project in Cursor**
2. **Start the dev server**: `npm run dev`
3. **Create the content folder structure**:
   ```
   src/
   ├── content/
   │   ├── site.json
   │   ├── services/
   │   └── reviews.json
   ├── lib/
   │   └── whatsapp.ts
   └── components/
       ├── FloatingWhatsApp.tsx
       └── StickyCTA.tsx
   ```

## 💡 Tips for Tomorrow

- **Start small**: Build one component at a time
- **Test often**: Check `http://localhost:3000` after each change
- **Use Claude**: Ask for help with specific components
- **Save frequently**: Ctrl + S after each change
- **Check console**: Look for errors in browser dev tools

## 📞 Need Help?

- **Claude in Cursor**: Press `Ctrl + K` to chat
- **Browser Dev Tools**: F12 to see errors
- **Terminal Output**: Check for build errors
- **Next.js Error Pages**: They're very helpful!

---

**Good luck tomorrow! Your website is going to be awesome! 🚗⚡✨**


