# Context

The Albinet.co Company  (from here on 'the Company') has been created on 2020-04-22 in France by Pierre-Etienne ALBINET.

The Company has 2 puposes:
- 1. Create Tools to Model & Administrate any type of organization
- 2. Advise Companies on how to implement & manage Tools and Processes

The Procmin tool is hosted on the procmin.net website and is directly answering purpose 1.

# Procmin Guidelines
- 1. Always go the simplest route
- 2. Favor set and forget
- 3. Always show what data is known and being used by the system
- 4. Toggles to hide/show technical details and focus

Out topic: 7 'lies' of Belief: Purpose/Outcome/Responsibility/Focus/People/Play/Commit

# Procmin Modules
-  2lettersCode - 1wordCode - Description

- 0. IN - Connect - Connection management (Web/App/API) 
- 1. ID -  Identities - Identification module to get user to their ID from all entry points
- 2. HB - Hub - Routing & Access rights
- 4. DB - Memory - Relationship, API, Saving & Database management
- 5. AD - Admin - Administration
Future
- 6. RC - Recovery - Disaster Recovery
- 7. BC - Blockchain - Blockchain technology

# ID
By default random guest number with no password
SubElements: login / personal / device (>browser)

# HB

# VW
top bar with Procmin logo - Copyright 2020 <a>Albinet.co</a> SAS - ID - HB - DB - down / up
small arrow up bar
Main content
small arrow down bar

# DB
Use Graph Structure:
node table:
_id > Auto Generated
parent > id
name > String
type > id
value > String

edge table:
_id > Auto Generated
type > id
from > id
to > id

# Misc
Trace back everything pertaining to data entry -> eg finances, keep records of the files uploaded with transactions and/or API calls and allow drilldown from dashboards by default.
