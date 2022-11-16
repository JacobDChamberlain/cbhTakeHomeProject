# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Will each Facility have the same constraints for these custom ids,
or will each Agent have a custom id for each Facility they work at?

Tickets:
* 1) determine criteria for each Facility's custom id, and find a third party library to create a hash value of Agent id for each Facility based on criteria
    - confirm any constraints:
        - how long/how many characters?
        - integer or hexadecimal value?
        - special characters or alphanumeric?
    - time to complete determined by how quickly Facility responds to requests
    - research libraries based on:
        - ability to conform to criteria
        - level of security (minimize likelihood of hash collisions)
        - efficiency
        - package weight
    - pick a package with the best fit (I've used "bcrypt" to hash password values; something like this or "crypto")
    - time to complete determined by whether one library can be used for all Facilities,
    or if multiple libraries are needed. Should avoid this if possible to minimize effort.

* 2) add a new table containing the Agents' initial id values, paired with the custom id values for each Facility
    - create a table with columns for Agent id (initial), Facility id, and custom id (new)
    - depending on whether database is relational or non-relational, create a relation between Facility ids, Agent ids, and this table to minimize code and query effort
    - time to complete determined by type of database

* 3) ensure the new custom ids show up in the metadata for Agents in the getShiftsByFacility function
    - refactor getShiftsByFacility to include custom id in Agent's metadata
    - time to complete determined by whether replacing ids or adding new column

* 4) add a column to generateReport which will include the new custom ids for each Agent at each Facility
    - confirm whether initial Agent ids are not necessary for Facility use
    - depending on Facility needs, either replace ids with custom ids, or add space for custom ids on report
    - time to complete determined by needs of organization needs of Facility on the PDFs
