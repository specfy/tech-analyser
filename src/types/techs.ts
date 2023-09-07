export type TechType =
  | 'analytics'
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
  | 'adobe'
  | 'airbyte'
  | 'airtable'
  | 'algolia'
  | 'alibabacloud'
  | 'alpinejs'
  | 'amplitude'
  | 'angular'
  | 'apache_airflow'
  | 'apache_cassandra'
  | 'apache_couchdb'
  | 'apache_flink'
  | 'apache_iceberg'
  | 'apache_kafka'
  | 'apache_spark'
  | 'apache_storm'
  | 'appveyor'
  | 'atlassian'
  | 'auth0'
  | 'aws.amplify_hosting'
  | 'aws.dynamodb'
  | 'aws.ec2'
  | 'aws.ecs'
  | 'aws.elasticache'
  | 'aws.fargate'
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
  | 'bigcommerce'
  | 'bitbucket'
  | 'bootstrap'
  | 'box'
  | 'browserstack'
  | 'c'
  | 'caddy'
  | 'circleci'
  | 'cirrusci'
  | 'clickhouse'
  | 'cloudflare'
  | 'cockroachdb'
  | 'codesandboxci'
  | 'contenful'
  | 'couchbase'
  | 'cplusplus'
  | 'crowdin'
  | 'csharp'
  | 'css'
  | 'cypressci'
  | 'dart'
  | 'databricks'
  | 'datadog'
  | 'dataiku'
  | 'datastax'
  | 'deferrun'
  | 'deno'
  | 'dependabot'
  | 'digitalocean'
  | 'discord'
  | 'discourse'
  | 'docker'
  | 'doctrinephp'
  | 'docusign'
  | 'dropbox'
  | 'dynatrace'
  | 'elasticloud'
  | 'elasticsearch'
  | 'elasticstack'
  | 'elixir'
  | 'emberjs'
  | 'equinix'
  | 'esbuild'
  | 'eslint'
  | 'expodev'
  | 'express'
  | 'fabric'
  | 'facebook'
  | 'fastify'
  | 'fastly'
  | 'figma'
  | 'firebase.firestore'
  | 'firebase'
  | 'flyio'
  | 'gcp.aiplatform'
  | 'gcp.bigquery'
  | 'gcp.bigtable'
  | 'gcp.cloudbuild'
  | 'gcp.cloudrun'
  | 'gcp.dataproc'
  | 'gcp.datastore'
  | 'gcp.dialogflow'
  | 'gcp.dns'
  | 'gcp.functions'
  | 'gcp.gce'
  | 'gcp.gcs'
  | 'gcp.gke'
  | 'gcp.language'
  | 'gcp.maps'
  | 'gcp.pubsub'
  | 'gcp.secretmanager'
  | 'gcp.spanner'
  | 'gcp.speech'
  | 'gcp.sql'
  | 'gcp.tasks'
  | 'gcp.translate'
  | 'gcp.vision'
  | 'gcp'
  | 'gitbook'
  | 'github.actions'
  | 'github.pages'
  | 'github'
  | 'gitlab.ci'
  | 'gitlab'
  | 'golang'
  | 'googleanalytics'
  | 'grafana'
  | 'hashicorp_vault'
  | 'helm'
  | 'heroku'
  | 'hotjar'
  | 'html'
  | 'httpd'
  | 'hubspot'
  | 'huggingface'
  | 'hypertune'
  | 'influxdb'
  | 'java'
  | 'javascript'
  | 'jenkins'
  | 'jest'
  | 'jira'
  | 'kibana'
  | 'klaviyo'
  | 'koa'
  | 'kotlin'
  | 'kubernetes'
  | 'laravel'
  | 'launchdarkly'
  | 'logrocket'
  | 'logsnag'
  | 'magento'
  | 'mailchimp'
  | 'mailjet'
  | 'mariadb'
  | 'memcached'
  | 'meteorjs'
  | 'mithriljs'
  | 'mixpanel'
  | 'mongodb'
  | 'mongodbatlas'
  | 'mysql'
  | 'neo4j'
  | 'netlify'
  | 'newrelic'
  | 'nextjs'
  | 'nginx'
  | 'nodejs'
  | 'notion'
  | 'nuxtjs'
  | 'okta'
  | 'openai'
  | 'oraclecloud'
  | 'ovh'
  | 'pagerduty'
  | 'percona'
  | 'php'
  | 'phpstan'
  | 'phpunit'
  | 'pingdom'
  | 'placekit'
  | 'planetscale'
  | 'platformsh'
  | 'plausible'
  | 'postgresql'
  | 'postman'
  | 'powershell'
  | 'preactjs'
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
  | 'salesforce'
  | 'sanity'
  | 'scaleway'
  | 'scss'
  | 'sendgrid'
  | 'sentry'
  | 'sequelize'
  | 'shell'
  | 'shopify'
  | 'sitecore.xmlcloud'
  | 'sitecore'
  | 'slack'
  | 'snowflake'
  | 'snyk'
  | 'socketio'
  | 'solidjs'
  | 'splitio'
  | 'splunk'
  | 'sqlite'
  | 'sqreen'
  | 'squarespace'
  | 'squareup'
  | 'storybook'
  | 'strapi'
  | 'stripe'
  | 'styleci'
  | 'stylelint'
  | 'supabase.functions'
  | 'supabase.postgres'
  | 'supabase.storage'
  | 'supabase'
  | 'sveltejs'
  | 'swift'
  | 'symfony'
  | 'tailwind'
  | 'teamcity'
  | 'tencentcloud'
  | 'terraform'
  | 'terragrunt'
  | 'tinybird'
  | 'traefik'
  | 'travisci'
  | 'twigphp'
  | 'twilio'
  | 'twitter'
  | 'typescript'
  | 'upstash.kafka'
  | 'upstash.qstash'
  | 'upstash.redis'
  | 'upstash'
  | 'vercel.ai'
  | 'vercel.analytics'
  | 'vercel.blob'
  | 'vercel.kv'
  | 'vercel.postgres'
  | 'vercel'
  | 'vite'
  | 'vue'
  | 'webflow'
  | 'webpack'
  | 'wiz'
  | 'woocommerce'
  | 'wordpress'
  | 'yii2'
  | 'yii2'
  | 'zapier'
  | 'zendesk'
  | 'zookeeper'
  | 'zoom'
  | 'zuora';

export interface TechItem {
  key: AllowedKeys;
  name: string;
  type: TechType;
}
