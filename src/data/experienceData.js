export const experienceData = [
    {
      id: 1,
      company: "Fannie Mae",
      location: "Reston, VA",
      roles: [
        {
          jobtitle: "Software Engineer",
          startYear: "Jul 2024",
          endYear: "Present",
          description: [
            "Developed and deployed a Python-based drift detection workflow using Regex, Boto3, AWS Lambda, AWS Config Query, CloudWatch Logs, and EventBridge Scheduler to monitor Cross Account Read (CAR) roles across 100+ AWS accounts, automating weekly reports that reduced manual audit effort by 60% and shortened drift remediation time from 2 days to under 3 hours.",
            "Developed core agentic features for an internal AI chatbot using LangGraph, designing node- and edge-based workflows to orchestrate a hybrid RAG pipeline with specialized agents for SQL generation, SQL execution, and document retrieval; deployed on Amazon SageMaker to automate repetitive internal support queries.",
            "Developed and tested a full-stack loan management application using Spring Boot, JPA/Hibernate, and Angular/TypeScript, integrating Jenkins CI and achieving 80% test coverage with JUnit and Mockito, improving API performance by 30%.",
            "Implemented automated chunking of large IAM YAML configurations, reducing job preparation time by 70% for global role deployments.",
            "Built Python automation with Boto3 to programmatically create branches and pull requests, streamlining IAM configuration merges and eliminating manual workflow overhead.",
            "Operated a GitOps workflow with AWS CodeCommit and CodePipeline for CloudFormation and Terraform deployments, automating IAM role and policy updates across environments.",
            "Monitored AWS CodeBuild logs and StackSets, proactively debugging build failures and improving pipeline stability.",
          ],
          tools:
            "Python, Regex, Boto3, AWS Lambda, AWS Config, CloudWatch Logs, EventBridge Scheduler, LangGraph, Hybrid RAG, Amazon SageMaker, SQL, Spring Boot, JPA/Hibernate, Angular, TypeScript, Jenkins, JUnit, Mockito, AWS CodeCommit, AWS CodePipeline, AWS CodeBuild, CloudFormation, Terraform",
        },
        {
          jobtitle: "Software Engineer Intern",
          startYear: "Jun 2023",
          endYear: "Aug 2023",
          description: [
            "Converted Spring Boot API tests to the Karate testing framework using Gherkin, improving test readability and maintainability.",
            "Built Java utilities to accelerate data extraction from API response bodies.",
            "Built, deployed, and tested services using Gradle and Maven with Jenkins CI pipelines in AWS environments.",
            "Contributed to REST controllers across Spring Boot microservices.",
          ],
          tools:
            "Java, Spring Boot, Karate, Gherkin, Gradle, Maven, Jenkins, AWS",
        },
      ],
    },
  ];
  