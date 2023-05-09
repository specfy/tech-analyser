import path from 'node:path';

import { describe, it, expect, vi, beforeEach } from 'vitest';

import { flatten } from '../payload/helpers.js';
import { FakeProvider } from '../provider/fake.js';
import { FSProvider } from '../provider/fs.js';
import type { Analyser } from '../types/index.js';

import { analyser } from './index.js';

const dockerCompose = `version: '3'
services:
  db:
    container_name: db
    image: postgres:15.1-alpine
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_PASSWORD=postgres
`;

let id = 0;
vi.mock('../common/nid.ts', () => {
  return { nid: () => `${id++}` };
});

describe('analyser', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should not find anything', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': [],
        },
        files: {},
      }),
    });

    expect(res.toJson('')).toStrictEqual({
      id: expect.any(String),
      name: 'main',
      group: 'component',
      edges: [],
      inComponent: null,
      languages: {},
      path: ['/'],
      tech: null,
      techs: [],
      childs: [],
      dependencies: [],
    });
  });

  it('should register only component of the same tech', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['package.json', 'docker-compose.yml'],
        },
        files: {
          '/docker-compose.yml': dockerCompose,
          '/package.json': '{ "name": "test", "dependencies": {"pg": "1.0.0"}}',
        },
      }),
    });

    const flat = flatten(res);
    const json: Analyser = JSON.parse(JSON.stringify(flat.toJson('')));
    expect(json).toMatchSnapshot();
    expect(flat.childs[0].id).toEqual(flat.childs[1].edges[0].to.id);
  });

  it('should run correctly', async () => {
    const root = path.join(__dirname, '../../tests/__fixtures__');
    const res = await analyser({
      provider: new FSProvider({
        path: root,
      }),
    });

    expect(res.toJson(root)).toMatchSnapshot();

    const flatted = flatten(res);

    // Check that inComponent was updated
    const vercel = flatted.childs.find((child) => child.name === 'vercel')!;
    const app = flatted.childs.find((child) => child.name === '@fake/app');
    expect(app!.inComponent!.id).toBe(vercel.id);

    // Check that edge.to was updated
    const datadog = flatted.childs.find((child) => child.name === 'datadog')!;
    const api = flatted.childs.find((child) => child.name === '@fake/api');
    expect(api!.edges[0].to.id).toBe(datadog.id);

    expect(JSON.parse(JSON.stringify(flatted.toJson(root)))).toMatchSnapshot();
  });
});