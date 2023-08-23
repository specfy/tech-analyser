export type TechType =
  | 'api'
  | 'app'
  | 'ci'
  | 'db'
  | 'etl'
  | 'hosting'
  | 'language'
  | 'messaging'
  | 'network'
  | 'saas'
  | 'storage'
  | 'tool';

export type AllowedKeys =
  | 'algolia'
  | 'alibabacloud'
  | 'angular'
  | 'appveyor'
  | 'auth0'
  | 'aws.dynamodb'
  | 'aws.ec2'
  | 'aws.elasticache'
  | 'aws.glacier'
  | 'aws.lambda'
  | 'aws.rds'
  | 'aws.s3'
  | 'aws.sns'
  | 'aws.sqs'
  | 'aws'
  | 'azure.ci'
  | 'azure'
  | 'bash'
  | 'bootstrap'
  | 'browserstack'
  | 'c'
  | 'caddy'
  | 'cassandra'
  | 'circleci'
  | 'cirrusci'
  | 'cloudflare'
  | 'cockroachdb'
  | 'codesandboxci'
  | 'couchbase'
  | 'cplusplus'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'dart'
  | 'datadog'
  | 'deferrun'
  | 'deno'
  | 'dependabot'
  | 'digitalocean'
  | 'discord'
  | 'docker'
  | 'elasticloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'elixir'
  | 'equinix'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fastify'
  | 'fastly'
  | 'firebase'
  | 'flyio'
  | 'gcp.aiplatform'
  | 'gcp.bigquery'
  | 'gcp.bigtable'
  | 'gcp.cloudbuild'
  | 'gcp.cloudrun'
  | 'gcp.dataproc'
  | 'gcp.datastore'
  | 'gcp.dns'
  | 'gcp.functions'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.language'
  | 'gcp.maps'
  | 'gcp.pubsub'
  | 'gcp.secretmanager'
  | 'gcp.speech'
  | 'gcp.sql'
  | 'gcp.translate'
  | 'gcp.vision'
  | 'gcp'
  | 'github.actions'
  | 'github.pages'
  | 'github'
  | 'gitlab.ci'
  | 'gitlab'
  | 'golang'
  | 'hashicorp_vault'
  | 'helm'
  | 'heroku'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'huggingface'
  | 'influxdb'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'kibana'
  | 'koa'
  | 'kotlin'
  | 'kubernetes'
  | 'logrocket'
  | 'mailchimp'
  | 'mailjet'
  | 'mariadb'
  | 'memcached'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mysql'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nginx'
  | 'nodejs'
  | 'okta'
  | 'openai'
  | 'oraclecloud'
  | 'ovh'
  | 'pagerduty'
  | 'percona'
  | 'php'
  | 'pingdom'
  | 'platformsh'
  | 'postgresql'
  | 'powershell'
  | 'prettier'
  | 'prisma'
  | 'prismacloud'
  | 'puppeteer'
  | 'python'
  | 'rabbitmq'
  | 'react'
  | 'reactemail'
  | 'redis'
  | 'relativeci'
  | 'render'
  | 'renovate'
  | 'resend'
  | 'rollup'
  | 'ruby'
  | 'rust'
  | 'scaleway'
  | 'scss'
  | 'sentry'
  | 'sequelize'
  | 'shell'
  | 'slack'
  | 'snowflake'
  | 'snyk'
  | 'socketio'
  | 'sqlite'
  | 'sqreen'
  | 'storybook'
  | 'strapi'
  | 'styleci'
  | 'stylelint'
  | 'swift'
  | 'tailwind'
  | 'teamcity'
  | 'terraform'
  | 'terragrunt'
  | 'traefik'
  | 'travisci'
  | 'typescript'
  | 'vercel'
  | 'vite'
  | 'vue'
  | 'webpack'
  | 'zapier'
  | 'zookeeper'
  | 'zoom';

export interface TechItem {
  key: AllowedKeys;
  name: string;
  type: TechType;
}
