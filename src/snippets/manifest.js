{
  "name": "0sample chrome extension",
  "version": "0.1",
  "content_scripts": [
        {
            "matches": ["<all_urls>"],
            "js": ["content.js"]
        }
  ],
  "manifest_version": 2,
}