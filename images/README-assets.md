# Favicon and Image Assets

This directory should contain the following favicon and image assets for optimal browser and device support:

## Required Files

1. **Favicon**

    - `favicon.ico` (32x32 or 16x16)
    - `favicon-16x16.png` (16x16)
    - `favicon-32x32.png` (32x32)

2. **Apple Touch Icons**

    - `apple-touch-icon.png` (180x180)
    - `safari-pinned-tab.svg` (SVG for Safari pinned tabs)

3. **Android/Chrome**

    - `android-chrome-192x192.png` (192x192)
    - `android-chrome-512x512.png` (512x512)

4. **Windows Tiles**

    - `mstile-70x70.png` (70x70)
    - `mstile-144x144.png` (144x144)
    - `mstile-150x150.png` (150x150)
    - `mstile-310x150.png` (310x150)
    - `mstile-310x310.png` (310x310)

5. **Social Media**
    - `og-image.jpg` (1200x630) - For social sharing

## How to Generate These Files

1. **Using a Favicon Generator**

    - Go to [realfavicongenerator.net](https://realfavicongenerator.net/)
    - Upload your source image (recommended size: 512x512 or larger)
    - Configure the options as needed
    - Generate the package and download it
    - Extract the files to the `public` directory

2. **Using Command Line (for developers)**

    ```bash
    # Install required tools
    npm install -g sharp-cli

    # Generate favicon.ico from a source image
    sharp -i source-image.png -o favicon.ico 32x32

    # Generate other sizes
    sharp -i source-image.png -o favicon-16x16.png 16x16
    sharp -i source-image.png -o favicon-32x32.png 32x32
    sharp -i source-image.png -o apple-touch-icon.png 180x180
    sharp -i source-image.png -o android-chrome-192x192.png 192x192
    sharp -i source-image.png -o android-chrome-512x512.png 512x512
    sharp -i source-image.png -o mstile-150x150.png 150x150
    ```

3. **For SVG Icons**
    - Create or obtain an SVG file
    - Optimize it using [SVGO](https://jakearchibald.github.io/svgomg/)
    - Save as `safari-pinned-tab.svg` in the public directory

## Notes

- The `og-image.jpg` should be 1200x630 pixels for optimal social media sharing
- Ensure all PNG files are optimized for web use
- The SVG file should use the `currentColor` for the icon color to support dark/light mode
- Update the `site.webmanifest` and `browserconfig.xml` files if you change any file names or paths
