import ResumeItem from './components/resume-item';
import ResumeSectionHeader from './components/resume-section-header'

export default function ExperiencePage () {
  return (
    <main className="rounded-lg bg-beige text-purple p-5 m-5 shadow-xl shadow-blue overflow-y-auto">
      <ResumeSectionHeader name="Work Experience" icon_button />
      <ResumeItem
        company={"Greenhouse Software"} 
        job_title={"Software Engineer"}
        dates_worked={"Oct 2021 - Present"}
        accomplishments={[
          "Remediate an issue where 500k outbound emails sent through SMTP service were being sent from the wrong domain.",
          "Built bulk employee import tool to speed up implementation time for new customers.",
          "Automate export of employee documents using Sidekiq and generate a S3 presigned url for customer ease of use.",
          "Spearhead the addition of two new admin roles from proof-of-concept to release.",
          "Reduce response time by 40% for commonly visited page by optimizing evaluation of employee permissions.",
          "Architect email notification to employees to complete their goals two weeks before they are due.",
          "Implement three new metrics for admins to view how effectively employees are onboarding in their first 30 days.",
          "Streamline pronouns and pronunciation data from Recruiting to Onboarding to prevent manually correcting data.",
          "Migrate background job processing from delayed jobs gem to Sidekiq to alleviate extraneous load on our database."
        ]}
      />
      <ResumeItem
        company={"Slalom Build"} 
        job_title={"Software Engineer"}
        dates_worked={"Jun 2019 - Sept 2021"}
        accomplishments={[
          "Constructed global redemption rewards application using AWS Lambda, DynamoDB, APIGateway, and React.",
          "Revamped internal cloud management application using Angular, PostgreSQL, and Java with Spring Boot",
          "Built out transformation system that ingested a CSV of validation rules to a fully built React page served using NextJS",
          "Pioneered shared component library using React/MaterialUI to drive consistency between micro applications",
          "Established website to showcase past hackathons and manage current hackathons using Angular, AWS Lambda, DynamoDB, API Gateway, and Cognito.",
        ]}
      />

      <ResumeItem
        company={"Station Casinos"} 
        job_title={"Software Engineer Intern"}
        dates_worked={"Jun 2018 - August 2018"}
        accomplishments={[
          "Created micro-service to detect four-of-a-kind poker hands using MongoDB, Express.js, Node.js, and RabbitMQ.",
          "Collaborated with QA and test deployed code on slot machines.",
          "Participated in weekly tours with other departments in company to learn how business operates."
        ]}
      />

      <ResumeSectionHeader name="Skills" />
      <div className="mb-3">
        <h3 className="text-2xl">Core Technologies</h3>
        <p className="text-lg"> Ruby on Rails, React, NextJS, Javascript, Typescript, Sidekiq, PostgresSQL, Amazon Web Services, GraphQL</p>
      </div>
      <div className="mb-3">
        <h3 className="text-2xl">Tools</h3>
        <p className="text-lg"> Rollbar, Datadog, Snowflake, Sorbet, Capybara, Docker, Webpack, Git</p>
      </div>
     
      <ResumeSectionHeader name="Certifications" />
      <div className="flex mb-3">
        <p className="grow text-lg">Amazon Web Services Solutions Architect Associate</p>
        <p className="text-lg">Obtained March 2023</p>
      </div>

      <ResumeSectionHeader name="Experience" />
      <div className="flex">
        <h3 className="grow text-2xl">University of Denver, Denver, CO</h3>
        <p className="text-lg">Sept 2015 - June 2019</p>
      </div>
      <p className="font-text-lg">Bachelors in Computer Science</p>
      <p className="text-lg">Minors in Mathematics and Business Information/Analytics</p>
    </main>
  );
}