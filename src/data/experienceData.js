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
            "Developed and deployed a Python-based drift detection workflow using AWS services to monitor Cross Account Read (CAR) roles across 100+ AWS accounts, automating weekly reports and reducing drift remediation time.",
            "Developed core agentic features for an internal AI chatbot using LangGraph, designing node- and edge-based workflows to orchestrate a hybrid RAG pipeline with specialized agents for SQL generation, SQL execution, and document retrieval; deployed on Amazon SageMaker to automate repetitive internal support queries.",
            "Developed and tested a full-stack loan management application using Spring Boot, JPA/Hibernate, and Angular/TypeScript, integrating Jenkins CI and achieving 80% test coverage.",
            "Implemented automated chunking of large IAM YAML configurations, reducing job preparation time by 70% for global role deployments.",
            "Built services using AWS CodeCommit, CodePipeline, CloudFormation, and Terraform, automating code deployment and infrastructure management.",
        ],
          tools: "Python, AWS, Spring Boot, JPA/Hibernate, Angular, TypeScript, Jenkins, AWS CodeCommit, AWS CodePipeline, CloudFormation, Terraform",
        },
        {
          jobtitle: "Software Engineer Intern",
          startYear: "Jun 2023",
          endYear: "Aug 2023",
          description: [
            "Converted Spring Boot API tests to the Karate testing framework using Gherkin, improving test readability and maintainability.",
            "Built Java utilities to accelerate data extraction from API response bodies.",
            "Built, deployed, and tested services using Gradle and Maven with Jenkins CI pipelines in AWS environments.",
          ],
          tools: "Java, Spring Boot, Karate, Gherkin, Gradle, Maven, Jenkins, AWS",
        },
      ],
    },
  ];