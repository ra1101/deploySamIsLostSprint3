## Forecast 
**Forecast:** 13  
**Rationale for your forecast:** Based on sprint 1 data and number of days we have 

## Sprint Planning activities
Only development team members pulled stories from the top of the product backlog into the sprint backlog.  
The total points of the sprint backlog does not exceed the forecast.  
## Kanban board URL
https://team-turtle.atlassian.net/jira/software/projects/SIL/boards/2

Overview of the kanban board for Sprint 2
![sprint2_kanban](/project-part-2/sprint2_overview.png)

Detailed view broken down by task for each story
![sprint2_kanban](/project-part-2/sprint2_subtask.png)

## Burndown chart URL
https://team-turtle.atlassian.net/jira/software/projects/SIL/boards/2/reports/burndown  (select sprint 2 in Sprint dropdown) 
## Daily scrum detail
### What did you do?
* Amanda Price (Developer)
  * Updated the mock API to include new data needed 
* Jeff Chen (Developer)
  * Finished the UI mockup for the detail page 
* Sanae Benchaaboun (Developer)
  * Started the detail page UI
  * Published agenda for meetings 
  * Updated list view to have working link to the detail page 
* Ray Archer (Developer)
  * Facilitated meeting to help others to set up environment 
  * Asked professor where to put technical stories 
  * Started setting up CI/CD
### What do you plan to do?
* Amanda Price (Developer)
  * Finish the how-to set up environment documentation for new developer in the future 
  * Testing the new page
* Jeff Chen (Developer)
  * Add unit tests
* Sanae Benchaaboun (Developer)
  * Fix CSS for the detail page 
  * Testing the new page
  * Add sighting date time to listing page 
* Ray Archer (Developer)
  * Complete setting up CI/CD
### Impediments?
* Do you see any impediment that prevents you or the Development Team from meeting the Sprint Goal? No
* What are the impediments? None
* What is your impediment removal plan? None needed 
## Burndown chart updates screenshots 
![sprint2day1](/project-part-2/sprint2_burndown_day1.png)
## Paired or mobbed programming evidence 
* mob programming sessions
![sprint2mob1](/project-part-2/sprint2_mob_programming1.png)
![sprint2mob2](/project-part-2/sprint2_mob_programming2.png)
## Continuous Integration evidence 
TBD
## Continuous Delivery evidence 
[Recording of Deployment](https://harvard.zoom.us/rec/share/cd_UcxAiYFLpTOAtlZhdMwHebh1BNI92b6uCuIkwCIFuIkfDolWq0WBIBxBWifmB.Z-sKrWucEfLBP6Bs)
## 10 micro-scale unit tests in the test suite 
https://github.com/adejeffchen/sam-is-lost/blob/main/ui/samislost/tests/unit/UI.spec.js
![sprint2_unit_tests](/project-part-2/sprint2_unit_tests.png)
## Working software URL
https://sam-is-lost-hfr8c.ondigitalocean.app
## Sprint Review
* held with stakeholder Rob on 7/3 10am with Rob
## Stakeholder review evidence
Screenshot ![sprint2_sprint_review_stakeholder](/project-part-2/sprint2_sprint_review_stakeholder.png)
* Revised product backlog based on the feedback received: 
TBD add link to new stories 
  * Would like to filter the list by animal type -> already have a user story https://team-turtle.atlassian.net/browse/SIL-2
  * Would like to see a map of current location or sighted location -> https://team-turtle.atlassian.net/browse/SIL-76
  * Current location may need more context about -> https://team-turtle.atlassian.net/browse/SIL-77
  * Current location should be editable by anyone -> https://team-turtle.atlassian.net/browse/SIL-78
  * List view sorting by sighted date/time -> https://team-turtle.atlassian.net/browse/SIL-79
  * Tag information of animal can be an optional field -> https://team-turtle.atlassian.net/browse/SIL-80
## Sprint Retrospective detail 
* What did we do well?
  * We accomplished a lot in 2 days 
  * More efficient meetings 
  * Prioritized stakeholder feedback and stakeholder is happy 
  * Workload splitting is more evenly between development team members 
  * We adjusted the plan and the forecast accordingly to holidays 
  * Able to add more tests and keep the passing 
* What can be improved?
  * Pull request is not being pulled in time due to timezone differences 
  * Code changes are not clear for which user stories or tasks 
* Action identified: 
  * Integrate Jira with Git so we can associate code changes to user stories 
  * Integrate Git to Slack so people can be notified with Pull Requests or Merged 
* Action plan converted to a product backlog item done
* The new PBI is at the top of the product backlog
  * ![sprint2_retro_actions](/project-part-2/sprint2_retro_actions.png)
