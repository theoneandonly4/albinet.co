# albinet.co
albinet.co Company Website

# Context

The Albinet.co Company  (from here on 'the Company') has been created on 2020-04-22 in France by Pierre-Etienne ALBINET.

The Company has 3 puposes:
- 1. Create Tools to Model & Administrate any type of organization
- 2. Advise Companies on how to implement & manage Tools and Processes
- 3. Develop, and promote the use of, FOSS and privacy respectful Tools

# Website Details

This Readme pertains to the creation & details of the Website for the Company (from here on 'the Website')
The Website will be hosted on OVH (until migration to private VPS) and accessible through www.albinet.co
The Website will be displayed primarily in English with a list of available languages which will include English and French for starters to be expended if foreign interest grows.

# Website Objectives

The Website will serve the following purposes:
- 1. Inform about the tools and link to the relevant Websites for starting experiencing the tools
- 2. Gather news about the Company and the Tools development in a Blog section
- 3. Showcase Projects and Advisory experience

# 1-Blog
Static Articles

# 2-Tools Presentation
Procmin
4n0n

# 3-Advisory
In the future include references

# 4-Contact
Static

# Z-Notes
Added the following .htaccess file content in the /www folder in Production server to force HTTPS:
RewriteEngine On
RewriteCond %{HTTP:X-Forwarded-Port} 80
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]

# ZZ-Next Steps
Rewriten without JS as the site is mostly static.
Blogposts will be written in HTML as well for now.
