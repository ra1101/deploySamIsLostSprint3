## Forecast 
  * Forecast: 13
  * Rationale for your forecast: Based on sprint 1 and sprint 2 data and number of days we have
## Sprint Planning activities
Only development team members pulled stories from the top of the product backlog into the sprint backlog.
The total points of the sprint backlog does not exceed the forecast.
![sprint3_sprint_backlog](/project-part-2/sprint3_sprint_backlog.png)

For tasks breakdown for the PBI, please access the stories from https://team-turtle.atlassian.net/jira/software/projects/SIL/boards/2/reports/burndown

## Kanban board URL
https://team-turtle.atlassian.net/jira/software/projects/SIL/boards/2
![sprint3_kanban_initial](/project-part-2/sprint3_kanban_initial.png)

## Burndown chart URL
https://team-turtle.atlassian.net/jira/software/projects/SIL/boards/2/reports/burndown (select sprint 3 in Sprint dropdown)

## Daily scrum detail
### What did you do?
* Amanda Price (Developer)
  * created API for adding and deleting entry 
* Jeff Chen (Developer)
  * completed the search unit tests
  * updated the UI change story 
* Sanae Benchaaboun (Developer)
  * created create entry design mockup
  * started create entry UI 
* Ray Archer (Developer)
  * started externalize config into .env file
### What do you plan to do?
* Amanda Price (Developer)
  * include the python tests as part of CI 
  * add more tests for entry CRUD actions 
  * testing with Chrome
* Jeff Chen (Developer)
  * fix title for detail page 
  * add tests for create entry page 
  * set up a Miro board and grab the template for preso & share with team 
* Sanae Benchaaboun (Developer)
  * complete create entry UI 
  * integrate create entry UI with API call
  * testing with Chrome 
* Ray Archer (Developer)
  * complete externalize config into .env file
  * complete CI set up
### Impediments?
* Do you see any impediment that prevents you or the Development Team from meeting the Sprint Goal? 
  * Yes
* What are the impediments?
  * Difficulty with framework config impacting CI/CD set up
* What is your impediment removal plan? 
  * More research needed 
  * Sanae will look into it as well 
## Burndown chart updates screenshots 
![sprint3_burndown_initial](/project-part-2/sprint3_burndown_initial.png)

## Paired or mobbed programming evidence 
![sprint3_mob_programming1](/project-part-2/sprint3_mod_programming1.png)
![sprint3_mob_programming2](/project-part-2/sprint3_mod_programming2.png)
![sprint3_pair_programming3](/project-part-2/pair_0707.png)

## Continuous Integration Continuous Delivery evidence 
TBD Ray to provide screenshot and verbage 

Screenshot of the API data create/get/delete tests completion in IDE
![api data test](/project-part-2/api_test.png)

## 10 more micro-scale unit tests in the test suite 
* unit tests https://github.com/adejeffchen/sam-is-lost/tree/main/ui/samislost/tests/unit
* run result
![sprint3_unit_tests](/project-part-2/sprint3_unit_tests.png)

## Working software URL
https://sam-is-lost-hfr8c.ondigitalocean.app/

## Sprint Review rehearsal evidence  
![sprint3_review_prep](/project-part-2/sprint3_review_prep.png)

## Sprint Retrospective detail 
* Held on 7/8/2021 
* All team members participated in the sprint retrospective
* What did we do well?
  * Fast decision making
  * Good team dynamics
  * Effective meetings
  * Quality solution
  * Plan well
  * All team members adapted to the new technology
* What can be improved?
  * Solution discussion sometimes interfered with sprint ceremony
  * Have more time in the spint to work together (pair/mob programming)
  * Would like to have more solution discussions
  * Recognize & converge more quickly on a micro test issue solution
  * Product Vision & backlog was very large, rein it in, be realistic
* One helpful change to improve our effectiveness together 
  * Action Plan: Have even BETTER team dynamics
  * Detail:
    * Shared dev tools
    * Environment improvements
    * More pair/mob programming sessions
    * Additional Jira/Slack/Github integrations
  * Acceptance Criteria:
    * We are more productive: Feature turnaround time improved (tasks are completed within 24 hrs after started), Sprint velocity improved from 13 to 16 for the next two sprints
    * Each person pair programmed with at least 2 other teammates (knowledge share)
