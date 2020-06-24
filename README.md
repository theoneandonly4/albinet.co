# albinet.co
albinet.co Company Website

# Context

The Albinet.co Company  (from here on 'the Company') has been created on 2020-04-22 in France by Pierre-Etienne ALBINET.

The Company has 2 puposes:
- 1. Create Tools to Model & Administrate any type of organization
- 2. Advise Companies on how to implement & manage Tools and Processes

# Website Details

This Readme pertains to the creation & details of the Website for the Company (from here on 'the Website')
The Website will be hosted on OVH and accessible through www.albinet.co
The Website will be displayed primarily in English with a dropdown list of available languages which will include English and French for starters to be expended as foreign interest grows

# Website Objectives

The Website will serve the following purposes:
- 1. Inform about the tools and link to the relevant Websites for starting experiencing the tools - www.procmin.net
- 2. Gather news about the Company and the Tools development in a Blog section
- 3. Showcase Projects and Advisory experience

# 1- Tools Presentation
Dynamic Master Data Translated in Several language
Data to be saved in the main website resource Database

# Z-Notes
(N/A since NodeJS move) Turn on Development Server on MacOS: sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist
(N/A since NodeJS move) Apache setup done with Catalina specific guide https://discussions.apple.com/docs/DOC-250001766
(N/A since NodeJS move) Sites folders uses link to other places such as Onedrive, the folder needs to be chmod a+x to work with Apache.

Added the following .htaccess file content in the /www folder in Production server to force HTTPS:
RewriteEngine On
RewriteCond %{HTTP:X-Forwarded-Port} 80
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]

# ZZ-Next Steps
Create DB with Texts in different languages
Create API for Texts
Create DB for blog posts & comments
Create API for blog posts & comments
