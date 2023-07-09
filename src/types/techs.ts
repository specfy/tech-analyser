export type TechType =
  | 'app'
  | 'ci'
  | 'db'
  | 'hosting'
  | 'language'
  | 'messaging'
  | 'network'
  | 'sass'
  | 'tool';

export type AllowedKeys =
  | 'algolia'
  | 'alibabacloud'
  | 'angular'
  | 'appveyor'
  | 'auth0'
  | 'aws.dynamodb'
  | 'aws.s3'
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
  | 'dependabot'
  | 'digitalocean'
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
  | 'firebase'
  | 'flyio'
  | 'gcp.bigquery'
  | 'gcp.cloudrun'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.pubsub'
  | 'gcp.sql'
  | 'gcp'
  | 'github.actions'
  | 'github.pages'
  | 'github'
  | 'gitlab.ci'
  | 'gitlab'
  | 'golang'
  | 'helm'
  | 'heroku'
  | 'hotjar'
  | 'html'
  | 'httpd'
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
  | 'python'
  | 'rabbitmq'
  | 'react'
  | 'reactemail'
  | 'redis'
  | 'relativeci'
  | 'render'
  | 'renovate'
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
  | 'vault'
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
