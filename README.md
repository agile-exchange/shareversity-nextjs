[![Shareversity CI](https://github.com/agile-exchange/shareversity-nextjs/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/agile-exchange/shareversity-nextjs/actions/workflows/node.js.yml)

## Getting Started

After cloning the repository, install all dependencies:
```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project: Shareversity

This is the Canvas Team 1 repository for Fall CSCI-E71

Team Name: Agile Exchange

## 1 Team Dynamics
  
  
  **Roles & Responsibilities:** 

 The Product Owner is also accountable for effective Product Backlog management, which includes:

* Developing and explicitly communicating the Product Goal;
* Set the product vision for the team;
* Communicate with external stakeholders and translate their needs to the team;
* Creating and clearly communicating Product Backlog items;
* Ordering Product Backlog items; and,
* Ensuring that the Product Backlog is transparent, visible and understood.

The Scrum Master serves the Scrum Team in several ways, including:

* Facilitate daily Scrum meetings (also called “daily standups”);
* Lead sprint planning meetings;
* Conduct “retrospective” reviews to see what went well and what can be improved for the following sprint;
* Manage obstacles that arise for the team by communicating with stakeholders outside of the team;
* Coaching the team members in self-management and cross-functionality;
* Helping the Scrum Team focus on creating high-value Increments that meet the Definition of Done;
* Causing the removal of impediments to the Scrum Team’s progress; and,
* Ensuring that all Scrum events take place and are positive, productive, and kept within the timebox.

The Developers are the people in the Scrum Team that are committed to creating any aspect of a usable increment each Sprint. The specific skills needed by the Developers are often broad and will vary with the domain of work: However, the Developers are always accountable for:

* Creating a plan for the Sprint, the Sprint Backlog;
* Help in sprint planning and goal setting;
* Lend expertise to program, design, or improve products;
* Use data to find best practices for development;
* Test products and prototypes, plus other forms of quality assurance;
* Instilling quality by adhering to a Definition of Done;
* Adapting their plan each day toward the Sprint Goal; and,
* Holding each other accountable as professionals.


**Source:https://www.coursera.org/articles/scrum-roles-and-responsibilities** 

**Team Roster:** 
 
Product Owner / Backup Dev: [Elizabeth Koch](https://github.com/bizzyK) 

Scrum Master / Backup Dev: [Andrew Juraschek](https://github.com/ajuraschek) 

Developers: [Juan Matias](https://github.com/juamatx), [Meha Verma](https://github.com/mehaverma625), & [Brian Wagner](https://github.com/BrianWagner-Github)

**Team Resources:** 

Scrum - Jira [Homepage](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1)
![roadmap](https://github.com/agile-exchange/Shareversity/blob/main/images/roadmap.png)
 
Communications - Slack [Invite](https://join.slack.com/t/agile-exchangegroup/shared_invite/zt-1iyw829e9-u_Ty6x7rLva72_0U9ngAbg
)
![slack](https://github.com/agile-exchange/Shareversity/blob/main/images/slack.png)

Documentation -  [Confluence](https://agile-exchange.atlassian.net/wiki/spaces/AGILEEXCHA/overview?homepageId=164048)
![confluence](https://github.com/agile-exchange/Shareversity/blob/main/images/confluence.png)

Google [Calendar](https://calendar.google.com/calendar/embed?src=c_d86a9c46d1636e0a7488599883f92c31dba42415c82bf883ddbd749ae139a124%40group.calendar.google.com&ctz=America%2FNew_York) / Docs [Drive](https://drive.google.com/drive/u/0/folders/1jFoImuQzUL1GwPM0XBCl-rEKa0A1INnh?ths=true)

**GitHub Repo URL:** https://github.com/agile-exchange/shareversity-nextjs

## 2 Product

**Open Source Product:** Shareversity.us (https://shareversity-test1-xsknh.ondigitalocean.app/)

**Product Description:** Platform displaying a user interface for users (students, faculty, admins) to exchange research opportunities, jobs, and items for other needs.

**Actors:**

Faculty

Students

Admin

**Near Vision**: Interface for users (students, faculty, admins) to exchange research opportunities.
* Unique Features include:
    * Faculty post research project needs
        * Route to application portals
        * Include short/long term options; different sizes of projects
    * Students sign up based on interest / availability / skills
    *   User profiles (with .edu account)
         * SSO or ID portal for authentication
    * Include short/long term options; different sizes of projects
    * Broad exchange of items/opportunities among real users

**Far Vision**: Facilitate a cross-university hub where both faculty and students exchange opportunities and goods to create community, share resources, develop professional, and engage in impactful work. Some extra features that can be added are:
 * University pages
  * Housing
   * Items Exchange (Books)
   * Forum for more communication
   * Student-to-student exchanges
        * Internships, fellowships, jobs
   * Chat application

**Elevator Pitch:** 

Craigslist meets Facebook Marketplace & for universities

**Definition of Ready:**

https://docs.google.com/document/d/1LXaiHByOsPmBgDhzMa94bdU5qJQXpYsd3LIJO9vprGA/edit

Our definition of ready is inspired from the ideas of Jeff Sutherland’s guidelines:

<https://www.scruminc.com/definition-of-ready/> 

<https://scrumguides.org/> 

**Here is our definition of Ready:**

To be ready each product backlog item must have the following information:

||Criteria|Description|
| :- | :- | :- |
|1.|A short title|We have a short meaningful title which explains what we will be doing|
|2.|A well defined User story with a clear vision|<p>Each PBI has a user story that explains a software feature written from the perspective of the end user or customer that must result into a business value</p><p></p><p>Customers and project managers requirements are clearly outlined</p><p></p><p>As a < type of user >, I want < some goal > so that < some reason ></p>|
|3.|User story meets the invest principles|User Story Meets the INVEST (**Independent** (i.e. free from external dependencies and there is nothing beyond the team’s control that must be done first in order to complete the story), **Negotiable**, **Valuable**, **Estimable**, **Small** & **Testable**) criteria|
|4.|Use Cases|If there are use cases then they can be used to better describe the different action items of use story|
|5.|Understanding of the current and future behavior and significance of the User story by all team members|All the team members are on the same page and have a shared understanding of the current, future behavior of the story and its results|
|6. |Agreement on the infrastructure and development tools and design principles if any|All the members agreement on the tool and technologies  that will be used to develop the feature|
|7.|Acceptance Criteria |<p>A list of testable conditions that tell us whether we implemented the backlog item successfully</p><p></p><p><https://kasperowski.com/acceptance-criteria-template/> </p><p></p><p><https://www.altexsoft.com/blog/business/acceptance-criteria-purposes-formats-and-best-practices/> </p>|
|8.|Data Storage considerations|Are there any database related considerations for this backlog item. For example, a new table requirement for a PBI.|
|8.|Testing Plan|<p>How are we planning to test the PBI</p><p></p><p>Examples:</p><p>1. Unit test cases</p><p>2. Integration tests</p><p>3. GUI testing</p>|
|9.|Demo Script|This will tell how we will demo the PBI after its successful implementation |
|10.|Security Review|Our PBI’s must be implemented following all the security principles|
|11.|Estimate story points|Every story has an estimated story point. Estimated and sized to be completed in one sprint.|

**Definition of Done:** 

https://docs.google.com/document/d/1UilKWKlqFIFUDQ2WxeH3C8XWb3C-TQSSBjK5FeHaZTw/edit

||Criteria|Description|
| :- | :- | :- |
|1.|<p>Feature is developed</p><p>Feature is tested </p><p>Meets all the Acceptance Criteria</p>|<p>Code is completed</p><p>All individual components testings are done</p><p>Acceptance criteria’s are met</p>|
|2.|Deployed|Deployed in the production|
|3. |Releasable |It should be shippable to the customers|
|4. |Code reviewed and peer reviewed|Our each deliverables are reviewed by peers |
|5. |Documentation updated|Each deliverable is documented in our Project documentation|
|6. |Technical requirements are met and Pass all security checks|Passes all security checks|

**Real Stakeholder:**  University Administrator: Elizabeth Jackson [User Persona](https://agile-exchange.atlassian.net/wiki/spaces/AGILEEXCHA/pages/458802?atlOrigin=eyJpIjoiNGYwNmYxMDVkMWIzNGQ0MDgzNmNkMTg5MzA0YmM3ZjAiLCJwIjoiaiJ9)

![persona1](https://github.com/agile-exchange/Shareversity/blob/main/images/persona1.png)

**Two Additional Stakeholders:** 

Student: John Doe, 20 year old Harvard student 

Faculty: Jane Smith, 50 year old tenured Harvard professor

**Initial Product Backlog Ordering & Rationale:** 

[Initial Product Backlog](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1/backlog) (scroll to the bottom)

![backlog](https://github.com/agile-exchange/Shareversity/blob/main/images/backlog.png)

We have placed the initial items necessary to access our product at the top of the backlog (landing and log in pages), followed by increments that allow users to share their information (profiles) and research opportunities. We then move to features that allow for viewing and sorting opportunities, and adding more sharing capabilities (documents, interests, photos etc.) while also enabling email notifications to our users. Later items in the backlog include advanced privacy management once profiles are created and search capabilities based on the created profiles. Finally, we add the ability to post items other than research opportunities as a different line aimed at drawing in users, include an admin portal to manage the various lines, simplify sign on using SSO, and create the ability for users to communicate directly via direct message, all to enhance the already established user experience. 

## 3 Whole-team relative-size estimating activity

**Estimates for PBIs**:

We used planning poker to estimate PBIs. While the product owner and scrum master were present to support, only developers participated in estimating the PBIs.

[Agile Poker](https://agile-exchange.atlassian.net/projects/AE?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.spartez.jira.plugins.jiraplanningpoker__poker-project-page#!/board/1/sessions-management)

![poker](https://github.com/agile-exchange/Shareversity/blob/main/images/poker.png)

PBI Storage Tool : [Jira](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1/backlog)

### Project Part 2: First Sprint
  
Recordings / Screenshots of Scrum Activities can be found [here](https://drive.google.com/drive/folders/1jFoImuQzUL1GwPM0XBCl-rEKa0A1INnh)

**Sprint Planning**
 
  On 11/2, we conducted two Sprint planning sessions. Recording [here](https://drive.google.com/file/d/13kw4y9fAhlVQsMOTDn156jIUig8FHvQy/view?usp=share_link) for part 1 and [here](https://drive.google.com/file/d/13eYqNkZNe72fZYouQyn-UL98IFpg7nPa/view?usp=share_link) for part 2.

 Sprint forecast: 61 User Story Points
  
  Rationale for Sprint forecast: We forecast that could complete 61 story points for our first sprint based on the team's capacity (3 developers, a product owner and scrum master). This number seemed like a reasonable estimate since the stories we chose are related to one another and because it represents roughly 1/3 of the total story points estimated for all the features to accomplish our near vision for our product in the three sprints available. 
  
Only Developers participated in moving stories from the product backlog into the sprint backlog.
  
User stories were all sized correctly (less than half of total), were broken up into developer tasks, and tracked on [Kanban Board](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1). URL: https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1
  
![Screen Shot 2022-11-12 at 11 12 22 AM](https://user-images.githubusercontent.com/104920023/201483472-5b6466ec-d718-4781-83fb-cc7f2044eb1e.png)
  ![Screen Shot 2022-11-12 at 11 12 06 AM](https://user-images.githubusercontent.com/104920023/201483471-f64b3332-a42c-4c02-ac1f-2dda7bbb4a72.png)
  
Sprint Burndown Chart can be seen [here](https://agile-exchange.atlassian.net/jira/dashboards/10000) and [here](https://agile-exchange.atlassian.net/wiki/spaces/AGILEEXCHA/overview) and was updated automatically as tasks were completed throughout the Sprint (note, due to limitations of Jira, the scale of the burndown chart shows every other day). 

![Screen Shot 2022-11-12 at 11 18 55 AM](https://user-images.githubusercontent.com/104920023/201483848-53a5dda0-e291-4618-bc88-892006ed77fc.png)

**Daily Scrums**
  
We conducted multiple daily scrums both in-person via Zoom and using the Sup app on Slack. Team calendar can be viewed [here](https://calendar.google.com/calendar/u/0?cid=Y19kODZhOWM0NmQxNjM2ZTBhNzQ4ODU5OTg4M2Y5MmMzMWRiYTQyNDE1YzgyYmY4ODNkZGJkNzQ5YWUxMzlhMTI0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20).
  
Example of a Sup stand up, which documents answers to daily scrum questions [here](https://agile-exchangegroup.slack.com/archives/C048S11GPLL/p1667567131195419?thread_ts=1667567131.095949&cid=C048S11GPLL)
  
Recording of Zoom stand up [here](https://drive.google.com/file/d/14-OYV4qkNTW5DeFqK7RFh9EaxINOE5Zn/view?usp=share_link)

Screenshots of other standups (Andrew's self view hidden):
<img width="1512" alt="Screen Shot 2022-11-10 at 9 09 56 AM (2)" src="https://user-images.githubusercontent.com/104920023/201484159-fd4434c6-20e4-4349-af79-32f4a55e9327.png">
<img width="1496" alt="Screen Shot 2022-11-07 at 9 09 25 AM" src="https://user-images.githubusercontent.com/104920023/201484171-56cef07d-e327-4b51-8a03-2589050f1bf2.png">
  
Regular changes to the board throughout the sprint, which updated the burndown chart automatically, can be seen [here](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1).
  
During our sprint, we reassessed our user stories to reflect feedback from the instructor and a reconsideration about the best approach at delivering value to our stakeholder. As a result, we didn't complete the user stories in their entirety, though we completed 90% of the developer subtasks in user stories 1 and 2. We paused on the third user story planned for the sprint as part of our mid-sprint backlog refinement. Following our sprint review and retrospective, we have further refined our backlog and approach to ensure we are able to deliver value in subsequent sprints.

**Test-Drive Development**

![image](https://user-images.githubusercontent.com/20470020/201552680-53b89266-4633-4a3c-9d7c-27819fc5a30f.png)
![image](https://user-images.githubusercontent.com/20470020/201552695-bee26f7e-0c0e-4fed-bbe3-66fab5e0f6e6.png)

All other Screenshots providing evidence of Test-Development can be found in [this folder](https://drive.google.com/drive/folders/1QRG3neD-lK4fGCbLOGhoRuiOIjJKZHsU).

We wrote 24 test cases below is the link,
**TDD Test Cases** [link]: (https://github.com/agile-exchange/Shareversity-Backend/blob/main/src/test/java/com/shareversity/StudentResourceTest.java)

Code [link]: (https://github.com/agile-exchange/Shareversity-Backend/blob/main/src/main/java/com/shareversity/resource/StudentResource.java)

**Pair/Mob Programming**
  
  Screenshots of various pair/mob programming sessions conducted during Sprints 1 and 2 below, which included at least 4 participants over multiple sessions.
  
  <img width="1636" alt="2022-11-08_17-14-07" src="https://user-images.githubusercontent.com/104920023/201484995-a7453396-29e8-452f-80d7-71607ddcbc1a.png">
  
![2022-11-09_19-27-11](https://user-images.githubusercontent.com/104920023/201484996-f4a31c56-3b82-4e2e-a2e3-298dd1c5b6e0.png)
  
  ![image](https://user-images.githubusercontent.com/104920023/201745269-411221b2-fea9-4743-86a0-130d2fd5c543.png)


**Sprint Review**
  
 We deployed working software that is in a publicly accessible system (web server in DigitalOcean). Below is the evidence that our product increment is working software including a feature to validate for .edu emails.
  
FrontEnd URL: https://shareversity-test1-xsknh.ondigitalocean.app/
Backend URL: http://146.190.74.111/shareversity
  
<img width="684" alt="image" src="https://user-images.githubusercontent.com/60664640/199878812-489b0588-ef9d-4256-bb3c-47141edd04d1.png">
<img width="1577" alt="image" src="https://user-images.githubusercontent.com/60664640/199878880-fcac80c6-5f75-4ddd-ba08-e426884e4ec2.png">
  
 On 11/10, we conducted a Sprint Review with our real stakeholder. Recording [here](https://drive.google.com/file/d/14iYvHuN5wtdEC2_IHmLWeV2181T_FRoV/view?usp=share_link) and screenshot [here](https://drive.google.com/file/d/1bJfCOpYbDhcw-7CIPeVqQnCRxLQwnVXk/view?usp=share_link) and [here](https://drive.google.com/open?id=16rByRsPvr240iygQ53gdWOiFYWDmNdsQ&authuser=ajuraschek%40g.harvard.edu&usp=drive_fs)

**Refined Product Backlog**
  
 On 11/6, we met to refine our backlog mid-Sprint. Screenshot below:
  
  <img width="1920" alt="Backlog refinement" src="https://user-images.githubusercontent.com/104920023/201485119-2239e079-7e43-4780-a9ac-7911dc9d519a.png">
  
  Following the Sprint Review with the Stakeholder, we met to refine our product backlog. Recording [here](https://drive.google.com/file/d/15ElmkApys0eQ_ryKVeXYtvt4-W85Qlg_/view?usp=share_link) and screenshots below.
  
 <img width="1512" alt="Screen Shot 2022-11-10 at 9 24 47 PM (2)" src="https://user-images.githubusercontent.com/104920023/201484659-29b1d269-7b71-412f-b159-cf2dfb368ddb.png">
  
 Evidence of a refined backlog can be seen in changes to user stories on our Jira backlog [here](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1/backlog).

**Sprint Retrospective**
  
  On 11/12, we conducted a Sprint Retrospective, recording available [here](https://drive.google.com/file/d/15oLWi_xAk44pJmb36GvxIpyZ72X8Rx-f/view?usp=share_link) and screenshots below.
  
  ![2022-11-12_09-16-20](https://user-images.githubusercontent.com/104920023/201485142-0e4a2a32-52b5-4034-8002-270035772d72.png)

  ![retro](https://user-images.githubusercontent.com/104920023/201485011-82b7a23b-2450-4a4d-890e-566cd4ce6bf4.png)

  ![Screen Shot 2022-11-12 at 9 16 01 AM](https://user-images.githubusercontent.com/104920023/201484763-c12375bb-1753-47cd-810b-70eec8abd828.png)
<img width="1512" alt="Screen Shot 2022-11-12 at 9 16 01 AM (2)" src="https://user-images.githubusercontent.com/104920023/201484764-ceb31800-d95a-4d0f-82e3-45f58afa02ef.png">
  
  Our identified action to improve our effectiveness was created as a user story and put at the top of our product backlog and can be seen [here](https://agile-exchange.atlassian.net/browse/AE-109) and in the below screenshot. It has since been moved to the Sprint Backlog for our next sprint. 
  
  ![Screen Shot 2022-11-12 at 4 23 54 PM](https://user-images.githubusercontent.com/104920023/201495152-50a9c616-f28d-453c-8188-65295d8ac914.png)

Our concrete plan to achieve this is to reorder our backlog, write narrower user stories focused on maximal value, deprioritize building technical functionality that doesn't directly map to the most valuable features for the stakeholder, and identify the simplest technical solution to create allow us to deliver the requested value to the stakeholder.

  
  ### Project Part 3: Second Sprint
  
Recordings / Screenshots of Scrum Activities can be found [here](https://drive.google.com/open?id=17sLW6jsOIHir2zbEYn0mGiouoUTGdFMB&authuser=ajuraschek%40g.harvard.edu&usp=drive_fs) and linked below.

**Sprint Planning**
 
  On 11/13 and 11/14, we conducted two Sprint planning sessions. Recording of first session [here](https://drive.google.com/open?id=16aG3mq1Iv5hTtfjqLCQqvfWQNd1eFIfK&authuser=ajuraschek%40g.harvard.edu&usp=drive_fs) and screenshot of second session below.
  
<img width="1512" alt="Screen Shot 2022-11-14 at 2 52 43 PM (2)" src="https://user-images.githubusercontent.com/104920023/202862992-f312ce30-7128-4992-a742-b4a8da5b98f9.png">

 Sprint forecast: 53 User Story Points
  
  Rationale for Sprint forecast: Based on what the three primary developers were able to do in the last sprint (estimated at 61 points), we estimate we can complete 53 story points since we have a narrower amount of time this sprint and this matches the top related items in our product backlog.
  
Only Developers participated in moving stories from the product backlog into the sprint backlog.
  
User stories were all sized correctly (less than half of total), were broken up into developer tasks, and tracked on [Kanban Board](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1). URL: https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1 Screenshots below.
  
  ![Screen Shot 2022-11-13 at 10 29 36 PM](https://user-images.githubusercontent.com/104920023/202863033-fca292dd-6cc6-460c-a85b-b367b1f828f5.png)
![Screen Shot 2022-11-14 at 2 52 43 PM](https://user-images.githubusercontent.com/104920023/202863034-28950a1e-1ca4-4a52-9c05-96cffccf1be3.png)
  
Sprint Burndown Chart can be seen [here](https://agile-exchange.atlassian.net/jira/dashboards/10000) and [here](https://agile-exchange.atlassian.net/wiki/spaces/AGILEEXCHA/overview) and in screenshots below. It was updated automatically as tasks were completed throughout the Sprint.

![Screen Shot 2022-11-19 at 12 17 10 PM](https://user-images.githubusercontent.com/104920023/202863476-2c6bf905-3b8c-4bfd-b5ae-742f417eede5.png)
![Screen Shot 2022-11-19 at 12 22 42 PM](https://user-images.githubusercontent.com/104920023/202863566-88d56797-4318-4828-8d38-38349eef5d28.png)

**Daily Scrums**
  
We conducted multiple daily scrums both live via Zoom and using the Sup app on Slack. Team calendar can be viewed [here](https://calendar.google.com/calendar/u/0?cid=Y19kODZhOWM0NmQxNjM2ZTBhNzQ4ODU5OTg4M2Y5MmMzMWRiYTQyNDE1YzgyYmY4ODNkZGJkNzQ5YWUxMzlhMTI0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20).
  
Example of a Sup standup, which documents answers to daily scrum questions [here](https://agile-exchangegroup.slack.com/archives/C048S11GPLL/p1668697081126809?thread_ts=1668697081.032459&cid=C048S11GPLL)
  
Recording of a Zoom stand up [here](https://drive.google.com/open?id=17STs_bcEKgYZf4X3LDw9nA8qL-zosiGR&authuser=ajuraschek%40g.harvard.edu&usp=drive_fs)

Screenshots of standups:
  
  <img width="1512" alt="Screen Shot 2022-11-18 at 9 14 58 AM (2)" src="https://user-images.githubusercontent.com/104920023/202862949-76489338-1402-40b6-ab3c-f75fdf3f35ea.png">
<img width="1512" alt="Screen Shot 2022-11-14 at 9 28 06 AM (2)" src="https://user-images.githubusercontent.com/104920023/202862945-5956fc04-d2c2-41e1-a649-0ae103a3a771.png">
<img width="1512" alt="Screen Shot 2022-11-17 at 9 27 37 AM (2)" src="https://user-images.githubusercontent.com/104920023/202862948-5cd088b1-f29b-444a-95d1-1da7b1cc5372.png">

Changes to the board throughout the sprint, which updated the burndown chart automatically, can be seen [here](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1) and via screen shots below.
  
  ![Screen Shot 2022-11-17 at 3 57 05 PM](https://user-images.githubusercontent.com/104920023/202862967-8fd1925f-f689-42aa-a4be-4766b9db35c3.png)
![Screen Shot 2022-11-18 at 9 14 58 AM](https://user-images.githubusercontent.com/104920023/202862968-9ba80ea2-1e1b-45bb-b0c6-fd67161f26d8.png)
![Screen Shot 2022-11-19 at 9 25 23 AM](https://user-images.githubusercontent.com/104920023/202862969-acecff86-13c7-4b57-9809-b2de23daba5e.png)
  
**Pair/Mob Programming**
  
  Screenshots of various pair programming sessions conducted are below during Sprints 1 and 2 below:
  
![image (2)](https://user-images.githubusercontent.com/104920023/202862930-cc774477-23b6-43b5-b2b3-ce4000afe7f0.png)
![image (3)](https://user-images.githubusercontent.com/104920023/202862931-fd957b4d-9e98-4e8d-a8c7-d5ceab7c8e0b.png)
![Screen Shot 2022-11-15 at 5 54 33 PM](https://user-images.githubusercontent.com/104920023/202862932-984f3fd9-86e7-48b7-939f-b88ade341e50.png)
![image (4)](https://user-images.githubusercontent.com/104920023/202883281-34618d7c-07ab-402d-ad53-649cc617bbe6.png)

**Test-Drive Development**
![image](https://user-images.githubusercontent.com/20470020/204352761-6ba2dc72-0be8-47cf-b891-f7e5da6d42ef.png)
![image](https://user-images.githubusercontent.com/20470020/204198797-b98383ee-1500-4498-b7b1-04e725c76b2f.png)
![image](https://user-images.githubusercontent.com/20470020/204198846-51b2e125-e60e-4125-92bd-fd35c11876ff.png)

All other Screenshots providing evidence of Test-Driven Development can be found in [this folder](https://drive.google.com/drive/folders/1gtWoc0dYVSLqAi0PmgSXkmiG89TakOUY).

We wrote 32 test cases below is the link,
<br /> **TDD Test Cases** 
  <br />[link]: (https://github.com/agile-exchange/shareversity-nextjs/blob/main/test/form.test.js)
  <br />[link]: (https://github.com/agile-exchange/shareversity-nextjs/blob/main/test/signup.test.js)

Code [link]: (https://github.com/agile-exchange/shareversity-nextjs)
  
- Steps to run tests : npm run test

BDD
<img width="2082" alt="image" src="https://user-images.githubusercontent.com/60664640/206969634-b3eb730f-24c5-4e78-885c-201829e35393.png">

**Continuous Integration and Continuous Delivery**

**Continous Integration** 

[![Shareversity CI](https://github.com/agile-exchange/shareversity-nextjs/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/agile-exchange/shareversity-nextjs/actions/workflows/node.js.yml)

- Our CI system was setup using GitHub actions and DigitalOcean. Everytime there is a new push to main, the CI workflow is triggered, which then builds and runs all of our unit tests.

- We are alerted via email the instant a test/workflow fails.
<img width="969" alt="image" src="https://user-images.githubusercontent.com/60664640/204225924-d2594c31-9767-4090-a5b4-870a62862dec.png">

- If any of the tests fails, the CI workflow stops and no changes are pushed to DigitalOcean.
- If all tests are successful, the workflow proceeds to push all changes to DigitalOcean for deployment
<img width="1582" alt="image" src="https://user-images.githubusercontent.com/60664640/204228761-f434e68b-5ab3-40ff-ba1b-f69edb09ec25.png">

- This is the YAML file that executes the build, test and deployment of our code.

<img width="929" alt="image" src="https://user-images.githubusercontent.com/60664640/204229781-5e0f4735-608a-42a2-8ab7-683239bb1cfd.png">

Note: Autodeploy was turned off in DigitalOcean. Only the CI workflow can deploy repo changes to DigitalOcean now. 

**Continous Delivery**

Our deployment process relies in a Continuous Delivery system using DigitalOcean.

- Only when the build is green, is considered completed and software is then deployed to our production environment.
<img width="1099" alt="image" src="https://user-images.githubusercontent.com/60664640/204116220-521164b4-2f42-4465-b80e-3ed510c67dc5.png">

- When the build is red, the build process exits, leaving the production environment unaltered and only changes when the build green again.
<img width="1100" alt="image" src="https://user-images.githubusercontent.com/60664640/204116256-2c11af91-bb86-4d84-b8df-f45a820a312b.png">

- Additionally, we have other systems in place to increase the observability of our deployments:

1. We set up alerts that notify us via slack the moment a build fails.
<img width="2081" alt="image" src="https://user-images.githubusercontent.com/60664640/204116538-f0cd5e54-9a4e-41c3-b621-d65b7a336232.png">

2. We also forward all logs to datadog in the event further monitoring/investigation is needed.
<img width="1314" alt="image" src="https://user-images.githubusercontent.com/60664640/204116571-16163a15-9d58-4090-b034-afaada3cab70.png">

3. Lastly, once our website is live, it continues to be monitored. Every 1 minute an HTTP test is sent from 19 different servers throughout the world, if any of these fails, the team gets notified.
<img width="1400" alt="image" src="https://user-images.githubusercontent.com/60664640/204238731-818b75f3-38ec-4978-aefb-b2d64c94fcba.png">
<img width="1394" alt="image" src="https://user-images.githubusercontent.com/60664640/204239523-ff91ff5d-0743-44b5-b955-bcb5cc6362e1.png">



**Sprint Review**
  
 We deployed new working software (different from the last sprint based on feedback received) that is in a publicly accessible system (web server in DigitalOcean). Below is the evidence that our product increment is working software.
  
URL: https://seal-app-cnapu.ondigitalocean.app/
    
 On 11/18, we conducted a Sprint Review with our real stakeholder. Recording [here](https://drive.google.com/open?id=18SN-E0miNft1vRsIDUVHjzgc9qzjh6BH&authuser=ajuraschek%40g.harvard.edu&usp=drive_fs) and screenshot below.
  
  <img width="1512" alt="Screen Shot 2022-11-18 at 3 40 01 PM (2)" src="https://user-images.githubusercontent.com/104920023/202862899-9dfc69c4-85bd-4ee2-8841-7e5f67438c4c.png">

**Refined Product Backlog**
    
  Following the Sprint Review with the Stakeholder, we discussed feedback to identify features to focus on in next/final sprint. 
  
 Evidence of a refined backlog can be seen in changes to user stories / ordering on our Jira backlog [here](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1/backlog).

**Sprint Retrospective**
  
  On 11/19, we conducted a Sprint Retrospective, recording available [here](https://drive.google.com/open?id=19S9yxm1a2CmhDhsNi-4AzulcpisyUYvY&authuser=ajuraschek%40g.harvard.edu&usp=drive_fs) and screenshots below.
  
  <img width="1512" alt="Screen Shot 2022-11-19 at 9 26 26 AM (2)" src="https://user-images.githubusercontent.com/104920023/202862851-d0c045ec-705b-41d7-bbdd-0d13dcbdf4d2.png">
  
  <img width="1365" alt="image (2)" src="https://user-images.githubusercontent.com/104920023/202862869-f7dc745b-d755-45bf-a8ad-2586047980bd.png">

  Our identified action to improve our effectiveness was created as a user story with action plan listed as sub tasks and put at the top of our product backlog (linked [here](https://agile-exchange.atlassian.net/browse/AE-124)) and screen shot below.

  ![Screen Shot 2022-11-19 at 11 44 55 AM](https://user-images.githubusercontent.com/104920023/202862876-2827d178-6ecf-4549-9edd-f9d91a541e93.png)

 ### Project Part 4: Third Sprint
  
Recordings / Screenshots of Scrum Activities can be found [here](https://drive.google.com/drive/folders/1A67nMHn3wsPZwj59JHYZmbZUftKvDADA?usp=share_link)

**Sprint Planning**
 
We began estimation on 11/29 and completed sprint planning on 12/1. Recording of 12/1 session [here](https://drive.google.com/file/d/1BwUbvwZo4Srx83i91uWOMMxcjSbPjzph/view?usp=share_link).

 Sprint forecast: 106 User Story Points. 

Rationale: Due to the Thanksgiving holiday, we forecast a smaller number of user story points last sprint (53) and delivered all of them successfully during a shorter sprint duration. With a longer sprint planned and a more ambitious goal, we forecast being able to achieve double the number of user story points as last time (106).
  
Only Developers participated in moving stories from the product backlog into the sprint backlog.
  
User stories were all sized correctly (less than half of total), were broken up into developer tasks, and tracked on [Kanban Board](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1). Screenshot below:
  
 ![Screen Shot 2022-12-05 at 3 30 27 PM](https://user-images.githubusercontent.com/104920023/207129273-1599980b-7601-4988-88e0-6524778d6c27.png)

Sprint Burndown Chart can be seen in the below screenshot and was updated automatically as tasks were completed throughout the Sprint.
   
![Screen Shot 2022-12-12 at 1 54 38 PM](https://user-images.githubusercontent.com/104920023/207134082-06f68f18-9fb9-45ee-9fd7-a5b37fa2c65d.png)

**Daily Scrums**
  
We conducted multiple daily scrums both live via Zoom and using the Sup app on Slack. Team calendar can be viewed [here](https://calendar.google.com/calendar/u/0?cid=Y19kODZhOWM0NmQxNjM2ZTBhNzQ4ODU5OTg4M2Y5MmMzMWRiYTQyNDE1YzgyYmY4ODNkZGJkNzQ5YWUxMzlhMTI0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20).
  
Example of a Sup standup, which documents answers to daily scrum questions [here](https://agile-exchangegroup.slack.com/archives/C048S11GPLL/p1670422230816339?thread_ts=1670422230.709029&cid=C048S11GPLL)
  
Recording of a Zoom stand up with board updates [here](https://drive.google.com/file/d/1ByfSzRI6PtJ7GoRHvgtj7dT7BXSt_pUx/view?usp=share_link).

Screenshot of standup:
  
<img width="1512" alt="Screen Shot 2022-12-05 at 3 30 27 PM (2)" src="https://user-images.githubusercontent.com/104920023/207126280-ed368100-2c2f-4232-8c78-f2ea285fc3b8.png">

  
Changes to the board throughout the sprint, which updated the burndown chart automatically, can be seen via screenshot of the burndown chart below and recording of the daily stand up linked above and again [here](https://drive.google.com/file/d/1ByfSzRI6PtJ7GoRHvgtj7dT7BXSt_pUx/view?usp=share_link).
  
  ![Screen Shot 2022-12-12 at 1 54 38 PM](https://user-images.githubusercontent.com/104920023/207130710-35c3f654-3e7f-4beb-a1dd-10c29ed8dfd2.png)


**Pair/Mob Programming**
  
  Screenshots of various pair/mob programming sessions here:

![Screen Shot 2022-12-05 at 5 21 50 PM](https://user-images.githubusercontent.com/104920023/207126126-47fe12a7-ca18-472c-8d67-3961c56194ba.png)

  ![Screen Shot 2022-12-05 at 3 59 58 PM](https://user-images.githubusercontent.com/104920023/207126138-38f2de66-2459-4281-a7e1-9cf0699be47c.png)

**Test-Drive Development**
![image](https://user-images.githubusercontent.com/20470020/204352761-6ba2dc72-0be8-47cf-b891-f7e5da6d42ef.png)
![image](https://user-images.githubusercontent.com/20470020/204198797-b98383ee-1500-4498-b7b1-04e725c76b2f.png)
![image](https://user-images.githubusercontent.com/20470020/204198846-51b2e125-e60e-4125-92bd-fd35c11876ff.png)

All other Screenshots providing evidence of Test-Driven Development can be found in [this folder](https://drive.google.com/drive/folders/1XcanLlRImA2NmtFjIeXz42Qg8A1XwzFD).

We wrote 40 test cases below is the link,
<br /> **TDD Test Cases** 
  <br />[link]: (https://github.com/agile-exchange/shareversity-nextjs/blob/main/test/form.test.js)
  <br />[link]: (https://github.com/agile-exchange/shareversity-nextjs/blob/main/test/signup.test.js)

Code [link]: (https://github.com/agile-exchange/shareversity-nextjs)
  
- Steps to run tests : npm run test

**Continuous Integration and Continuous Delivery**

Details and evidence remain the same as last sprint.

**Sprint Review**
  
 We deployed new working software (different from the last sprint based on feedback received) that is in a publicly accessible system (web server in DigitalOcean). Below is the evidence that our product increment is working software.
  
URL: https://seal-app-cnapu.ondigitalocean.app/
    
 Sprint review will take place in class on 12/12. Rehearsal took place on 12/12 with recording available [here](https://drive.google.com/file/d/1C1IFybHbRTtpDUFNGeIRVNOlJc75utqB/view?usp=share_link). Slides available [here](https://docs.google.com/presentation/d/1Ddn6LPJ7Y5OAWSflr7CpRzQtl-SoJVtoSiqd05x0zDQ/edit?usp=sharing).

**Refined Product Backlog**
    
Backlog refinements to be discussed during in-class review. Our backlog of user stories is visible [here](https://agile-exchange.atlassian.net/jira/software/projects/AE/boards/1/backlog)

**Sprint Retrospective**
  
  On 12/12, we conducted a Sprint Retrospective, recording available [here](https://drive.google.com/file/d/1C4IkjieLaridwHYYMehE4CNLku2akawl/view?usp=share_link) and screenshots below.
  
  <img width="1512" alt="Screen Shot 2022-12-12 at 11 45 43 AM" src="https://user-images.githubusercontent.com/104920023/207125664-1220a586-ad4b-490d-97ee-fa075e5d6afd.png">

  ![Screen Shot 2022-12-12 at 11 45 48 AM](https://user-images.githubusercontent.com/104920023/207125768-a96803cc-2cd4-4669-8469-b43ee940bee7.png)

  Our identified action to improve our effectiveness was created as a user story with action plan listed as sub tasks and put at the top of our product backlog (linked [here](https://agile-exchange.atlassian.net/browse/AE-158)) and screen shot below.
  
 ![Screen Shot 2022-12-12 at 11 59 29 AM](https://user-images.githubusercontent.com/104920023/207125894-201fb764-729a-4884-a1cb-413000c84b5c.png)

