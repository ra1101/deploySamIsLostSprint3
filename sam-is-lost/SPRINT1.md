## Forecast
**Forecast**: 16  
**Rationale for your forecast**: Based on how much we think we can accomplish in this first sprint  

## Sprint Planning activities
Only development team members pulled stories from the top of the product backlog into the sprint backlog.  
The total points of the sprint backlog does not exceed the forecast.  
## Kanban board URL
https://team-turtle.atlassian.net/jira/software/projects/SIL/boards/2

**Since the board is not visible after the sprint has closed, below are some screenshots of the completed stories and tasks from Sprint 1**

### [SIL-22](https://team-turtle.atlassian.net/browse/SIL-22)
![SIL22 completed](/project-part-2/sprint1_sil22.png)

### [SIL-6](https://team-turtle.atlassian.net/browse/SIL-6) 
![SIL6completed](/project-part-2/sprint1_sil6.png)

## Burndown chart URL
https://team-turtle.atlassian.net/jira/software/projects/SIL/boards/2/reports/burndown  (select sprint 1 in Sprint dropdown) 
## Daily scrum detail
### What did you do?
* Amanda Price (Developer)
  * started working on API
* Jeff Chen (Developer)
  * Researched unit test framework 
  * set up unit test in code
  * added a test case 
* Sanae Benchaaboun (Developer)
  * working on CSS
  * working on homepage to include the list view 
* Ray Archer (Developer)
  * completed the list view 
  * make list item clickable for detail 
### What do you plan to do?
* Amanda Price (Developer)
  * finish the API and the data returned 
* Jeff Chen (Developer)
  * add more unit tests 
* Sanae Benchaaboun (Developer)
  * finish the list view 
  * check in complete code 
* Ray Archer (Developer)
  * deploy the site, mock API
### Impediments?
* Do you see any impediment that prevents you or the Development Team from meeting the Sprint Goal? No
* What are the impediments? None
* What is your impediment removal plan? Not applicable 
## Burndown chart updates screenshots 
![sprint1day1](/project-part-2/sprint1_burndown_day1.png)
![sprint1end](/project-part-2/sprint1_burndown_end.png)
## Paired or mobbed programming evidence 
* pair programming
  * Screenshot ![paired programming screenshot](/project-part-2/pair_programming.png)
  * Recording: https://github.com/adejeffchen/sam-is-lost/blob/main/project-part-2/GMT20210629-132951_Recording_1920x1050.mp4
* mob programming
  * Screenshot ![mob programming screenshot](/project-part-2/mob_programming.png)
## 10 micro-scale unit tests in the test suite 
https://github.com/adejeffchen/sam-is-lost/blob/main/ui/samislost/tests/unit/UI.spec.js
![unit_tests](/project-part-2/unit_tests.png)
## Working software URL
https://sam-is-lost-hfr8c.ondigitalocean.app
## Sprint Review
* held with stakeholder Rob on 7/1 1pm
## Stakeholder review evidence
![sprint1_review](/project-part-2/sprint1_sprint_review_stakeholder.png)
* Revised product backlog based on the feedback received: 
  * would be good to see a pin drop on the map in detail view -> https://team-turtle.atlassian.net/browse/SIL-51
  * show date/time of sighting to the list view -> https://team-turtle.atlassian.net/browse/SIL-52
  * a filter for animal type for the list view will be useful -> already have a story https://team-turtle.atlassian.net/browse/SIL-2
  * wild animal possibility: wolf -> https://team-turtle.atlassian.net/browse/SIL-53
## Sprint Retrospective detail 
* What did we do well?
  * Decomposition of tasks was good
  * We met our forecast 
  * Knowledge transfer via Slack works well 
  * Used new frameworks successfully 
* What can be improved?
  * Distribution of tasks can be more evenly 
  * Not sure where to add bugs and new tasks for the infrastructure set up (e.g. deployment, CI, CD) 
  * Meetings can be more focused with an agenda 
  * Not sure where to put technical stories 
* Action identified: 
  * Set up a meeting to help each other to have their own environment set up and to run the application and tests via Zoom 
  * Document the how-to from Slack in Git 
  * Set up a recurring Zoom link for daily scrum & clearly list out the agenda in the zoom meeting detail
  * Scrum Master to facilitate/steering meetings by publishing/following the agenda of the meetings 
  * Ask Richard about where to put technical stories 
* Action plan converted to a product backlog item 
* The new PBI is at the top of the product backlog
![sprint1_action](/project-part-2/sprint1_retro_actions.png)
