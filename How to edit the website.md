# How to edit the website

This is a simple one-page website for 9hows. Most future changes can be made by editing the files inside the `content` folder.

## 1. Website files

- `index.html` controls the page structure.
- `styles.css` controls colors, spacing and layout.
- `content/site-content.js` contains almost all website text, buttons, lists and offers.
- `content/blog-posts.js` contains optional blog post previews.
- `assets/logo-9hows.png` is the 9hows logo.
- `assets/founder-marcel.png` is the founder photo.

## 2. Change text

1. Open `content/site-content.js`.
2. Find the section you want to change, for example `hero`, `problem`, `founder` or `offers`.
3. Change the text between the quotation marks.
4. Save the file.
5. Refresh the website in your browser.

Important: keep the quotation marks and commas in place.

## 3. Change button links

1. Open `content/site-content.js`.
2. At the top, find `cta`.
3. Change these fields:
   - `primaryHref`
   - `secondaryHref`
4. Use a full booking link, for example `https://calendly.com/your-name/20min`, or an email link, for example `mailto:name@example.com?subject=20-minute%20fit%20call`.
5. Also update `finalCta.buttonHref` if you want the final button to use the same link.

## 4. Add or remove a bullet

1. Open `content/site-content.js`.
2. Find the bullet list you want to change.
3. Add a new line inside the square brackets.

Example:

```js
bullets: [
  "First bullet",
  "Second bullet",
  "New bullet"
]
```

Every line needs quotation marks. Every line except the last one needs a comma.

## 5. Add a new section

For simple text changes, use the existing sections first. To add a completely new section:

1. Open `index.html`.
2. Copy an existing section block.
3. Paste it where you want the new section to appear.
4. Change the visible labels or the `data-content` names.
5. Add matching text in `content/site-content.js`.

If you are not comfortable changing HTML, ask a developer to do this part once. After that, the text can stay editable in `content/site-content.js`.

## 6. Add blog posts

Blog previews are optional. The blog section is hidden until you add at least one post.

1. Open `content/blog-posts.js`.
2. Replace the example comment with blog posts like this:

```js
window.BLOG_POSTS = [
  {
    title: "How to choose the first European market",
    date: "2026-06-01",
    summary: "A short summary of the blog post.",
    url: "https://example.com/blog-post"
  }
];
```

To add more posts, separate them with commas:

```js
window.BLOG_POSTS = [
  {
    title: "First post",
    date: "2026-06-01",
    summary: "Summary of the first post.",
    url: "https://example.com/first"
  },
  {
    title: "Second post",
    date: "2026-06-15",
    summary: "Summary of the second post.",
    url: "https://example.com/second"
  }
];
```

## 7. Change images

To replace the logo:

1. Put the new logo in the `assets` folder.
2. Name it `logo-9hows.png`.
3. Replace the old file.

To replace the founder photo:

1. Put the new photo in the `assets` folder.
2. Name it `founder-marcel.png`.
3. Replace the old file.

## 8. Preview locally

Open `index.html` in a browser. Because this is a static website, it does not need a build step.

## 9. Deploy to Vercel

1. Create a free account at `https://vercel.com`.
2. Create a new project.
3. Upload this website folder or connect a GitHub repository that contains these files.
4. Use these settings:
   - Framework preset: `Other`
   - Build command: leave empty
   - Output directory: leave empty or use `.`
5. Click Deploy.

After deployment, Vercel gives you a live website link. You can later connect your own domain in the Vercel project settings.
