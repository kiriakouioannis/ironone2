# Sanity CMS Complete Setup Guide

## Overview
Your entire website is now connected to Sanity CMS. You can edit all content through the Sanity Studio dashboard at `http://localhost:3000/studio`.

---

## 🎯 What's Been Connected

### 1. **Hero Section** ✓
- Badge text
- Main heading
- Description
- Primary & Secondary buttons
- Feature points
- Hero image
- Floating badge
- Stats card
- Trust brands

### 2. **Services Section** ✓
- Section header (badge, title, subtitle)
- Individual services (with icons)
- "Why Hosts Love" section with features
- Image gallery with captions
- CTA section

### 3. **Navigation Bar** ✓
- Logo image & text
- Navigation links
- CTA button
- Language selector settings

### 4. **Footer** ✓
- CTA section with buttons
- Branding text
- Contact information
- Social media links
- Legal links
- Copyright text

### 5. **Site Settings** ✓
- Site name & description
- Logo & favicon
- Contact details
- Social media profiles
- SEO settings (meta tags, keywords, OG image)

---

## 🚀 How to Use Sanity Studio

### Step 1: Access the Dashboard
1. Open your browser
2. Navigate to: `http://localhost:3000/studio`
3. You'll see the Sanity Studio interface

### Step 2: Edit Content

#### **To Edit Hero Section:**
1. Click on "Hero Section" in the left sidebar
2. Click on the existing document or create a new one
3. Edit any field:
   - Add/change badge text
   - Update heading
   - Modify description
   - Change button texts and links
   - Upload hero image
   - Update stats card numbers
4. Click "Publish" to save changes

#### **To Edit Services:**
1. Click on "Services Section"
2. Edit section header (badge, title, subtitle)
3. Add/edit/remove services:
   - Click "+ Add item" to add a new service
   - Choose an icon from the dropdown
   - Add title and description
   - Drag to reorder services
4. Edit "Why Hosts Love" section:
   - Update the title
   - Add/edit columns with features
   - Choose icons for each column
5. Update gallery images:
   - Upload images via Sanity
   - Add captions for each image
   - Add fallback URLs (optional)
6. Edit CTA section
7. Click "Publish"

#### **To Edit Navigation:**
1. Click on "Navigation Bar"
2. Update logo image or text
3. Add/edit navigation links:
   - Click "+ Add item"
   - Enter link name and URL
   - Drag to reorder
4. Update CTA button text and link
5. Enable/disable language selector
6. Click "Publish"

#### **To Edit Footer:**
1. Click on "Footer"
2. Edit CTA section (title, description, buttons, features)
3. Update branding text
4. Add contact information (email, phone, address)
5. Add social media URLs (Instagram, Facebook, etc.)
6. Update legal links
7. Custom copyright text (optional)
8. Click "Publish"

#### **To Edit Site Settings:**
1. Click on "Site Settings"
2. Update site name and description
3. Upload logo and favicon
4. Add contact details
5. Add social media profiles
6. SEO settings:
   - Meta title and description
   - Keywords (add multiple)
   - Open Graph image for social sharing
7. Click "Publish"

---

## 📋 Content Guidelines

### **Images:**
- **Hero Image:** Recommended size: 800x1000px (4:5 ratio)
- **Gallery Images:** 600x800px minimum
- **Logo:** 200x200px, transparent background PNG
- **OG Image:** 1200x630px for social media sharing

### **Text Lengths:**
- **Headings:** 50-60 characters max
- **Descriptions:** 150-200 characters for better readability
- **Button Text:** 2-4 words max

### **Icons Available:**
Choose from these icons for services and features:
- WashingMachine
- Shirt
- Truck
- Sparkles
- CheckCircle
- Clock
- Leaf

---

## 🔄 How Changes Appear on Your Website

1. **Edit content** in Sanity Studio
2. Click **"Publish"** button
3. **Refresh** your website page
4. Changes appear **immediately**!

---

## 📝 Common Tasks

### Adding a New Service:
1. Go to "Services Section"
2. Scroll to "Services List"
3. Click "+ Add item"
4. Fill in:
   - Title (e.g., "Express Service")
   - Description
   - Icon (choose from dropdown)
5. Publish

### Changing Navigation Links:
1. Go to "Navigation Bar"
2. Find "Navigation Links"
3. Edit existing or add new links
4. Each link needs:
   - Name (displayed text)
   - Href (URL path like "/about")
5. Publish

### Updating Contact Information:
1. Go to "Footer" or "Site Settings"
2. Find "Contact Information"
3. Update email, phone, address
4. Publish

### Changing Social Media Links:
1. Go to "Footer" or "Site Settings"
2. Find "Social Media"
3. Paste full URLs (e.g., https://instagram.com/yourhandle)
4. Publish

---

## 🎨 Best Practices

1. **Use High-Quality Images:** Upload clear, professional photos
2. **Keep Text Concise:** Short, impactful messages work best
3. **Test on Mobile:** Check how changes look on mobile devices
4. **Consistent Branding:** Use same tone and style throughout
5. **SEO Optimization:** Fill in all SEO fields in Site Settings
6. **Regular Updates:** Keep content fresh and up-to-date

---

## 🐛 Troubleshooting

### Changes Not Appearing?
1. Make sure you clicked "Publish" (not just Save Draft)
2. Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors
4. Restart the development server

### Images Not Loading?
1. Ensure images are published in Sanity
2. Check image format (PNG, JPG, WebP supported)
3. Verify image size (max 10MB recommended)

### Studio Not Loading?
1. Check that `http://localhost:3000` is running
2. Navigate specifically to `/studio` path
3. Clear browser cache and cookies

---

## 🔐 Production Deployment

When deploying to production:
1. Set environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
2. Deploy Sanity Studio separately or use embedded studio
3. Configure CORS in Sanity project settings
4. Set up webhooks for instant updates (optional)

---

## 📞 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all required fields are filled
3. Ensure images are properly uploaded
4. Check that all links are valid

---

## ✨ Quick Start Checklist

- [ ] Access Sanity Studio at `http://localhost:3000/studio`
- [ ] Create/edit Hero Section content
- [ ] Set up Services Section
- [ ] Configure Navigation links
- [ ] Update Footer information
- [ ] Fill in Site Settings
- [ ] Upload all images
- [ ] Add social media links
- [ ] Configure SEO settings
- [ ] Publish all changes
- [ ] Test on the live site

---

Your website is now fully manageable through Sanity! All changes you make in the studio will reflect on your website immediately after publishing. 🎉
